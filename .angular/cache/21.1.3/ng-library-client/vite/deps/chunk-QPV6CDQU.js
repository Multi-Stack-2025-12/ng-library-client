import {
  __spreadValues
} from "./chunk-46DXP6YY.js";

// node_modules/@eac-arch/shared-kernel/fesm2022/eac-arch-shared-kernel.mjs
function isTransient(entity) {
  return !entity.id;
}
function entitiesEqual(a, b) {
  if (a === b)
    return true;
  if (!a || !b)
    return false;
  return a.id === b.id;
}
var BaseAggregateRoot = class {
  _domainEvents = [];
  get domainEvents() {
    return this._domainEvents;
  }
  addDomainEvent(event) {
    this._domainEvents.push(event);
  }
  clearDomainEvents() {
    const events = [...this._domainEvents];
    this._domainEvents = [];
    return events;
  }
};
var ValueObject = class {
  equals(other) {
    if (!other)
      return false;
    if (this === other)
      return true;
    if (this.constructor !== other.constructor)
      return false;
    const thisComponents = this.getEqualityComponents();
    const otherComponents = other.getEqualityComponents();
    if (thisComponents.length !== otherComponents.length)
      return false;
    return thisComponents.every((component, index) => component === otherComponents[index]);
  }
};
function createDomainEvent(overrides = {}) {
  return __spreadValues({
    eventId: crypto.randomUUID(),
    occurredOn: /* @__PURE__ */ new Date(),
    eventVersion: 1
  }, overrides);
}
var CompositeSpecification = class {
  and(other) {
    return new AndSpecification(this, other);
  }
  or(other) {
    return new OrSpecification(this, other);
  }
  not() {
    return new NotSpecification(this);
  }
};
var AndSpecification = class extends CompositeSpecification {
  left;
  right;
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  isSatisfiedBy(candidate) {
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
  }
};
var OrSpecification = class extends CompositeSpecification {
  left;
  right;
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  isSatisfiedBy(candidate) {
    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
  }
};
var NotSpecification = class extends CompositeSpecification {
  spec;
  constructor(spec) {
    super();
    this.spec = spec;
  }
  isSatisfiedBy(candidate) {
    return !this.spec.isSatisfiedBy(candidate);
  }
};
var QuerySpecification = class extends CompositeSpecification {
};
var QuerySpecificationBuilder = class {
  specs = [];
  and(spec) {
    if (spec)
      this.specs.push(spec);
    return this;
  }
  build() {
    if (this.specs.length === 0)
      return void 0;
    if (this.specs.length === 1)
      return this.specs[0];
    return new CompositeQuerySpecification(this.specs);
  }
};
var CompositeQuerySpecification = class extends QuerySpecification {
  specs;
  constructor(specs) {
    super();
    this.specs = specs;
  }
  isSatisfiedBy(candidate) {
    return this.specs.every((s) => s.isSatisfiedBy(candidate));
  }
  toQueryParams() {
    return this.specs.reduce((params, spec) => __spreadValues(__spreadValues({}, params), spec.toQueryParams()), {});
  }
};
function successResult(data) {
  return { success: true, data };
}
function failResult(...errors) {
  return { success: false, errors };
}
function createPagedList(items, totalCount, currentPage, pageSize) {
  const totalPages = Math.ceil(totalCount / pageSize);
  return {
    items,
    currentPage,
    totalPages,
    pageSize,
    totalCount,
    hasPrevious: currentPage > 1,
    hasNext: currentPage < totalPages
  };
}
function emptyPagedList(pageSize = 10) {
  return {
    items: [],
    currentPage: 1,
    totalPages: 0,
    pageSize,
    totalCount: 0,
    hasPrevious: false,
    hasNext: false
  };
}
function shapeEntity(entity, fields) {
  const id = entity["id"] ?? "";
  const attributes = {};
  if (fields.length === 0) {
    Object.keys(entity).filter((key) => key !== "id").forEach((key) => {
      attributes[key] = entity[key];
    });
  } else {
    fields.forEach((field) => {
      const key = field.trim();
      if (key in entity) {
        attributes[key] = entity[key];
      }
    });
  }
  return { id, attributes };
}
function shapeCollection(entities, fields) {
  return entities.map((entity) => shapeEntity(entity, fields));
}
var BaseException = class extends Error {
  errors;
  metadata;
  constructor(message, errors = [], metadata = {}) {
    super(message);
    this.name = this.constructor.name;
    this.errors = errors;
    this.metadata = metadata;
  }
};
var NotFoundException = class extends BaseException {
  constructor(resource, id) {
    super(`${resource} with id '${id}' was not found.`);
  }
};
var ConflictException = class extends BaseException {
  constructor(message, errors = []) {
    super(message, errors);
  }
};
var ValidationException = class extends BaseException {
  constructor(errors) {
    super("One or more validation errors occurred.", errors);
  }
};
var UnprocessableEntityException = class extends BaseException {
  constructor(message, errors = []) {
    super(message, errors);
  }
};
var InvalidSortParameterException = class extends BaseException {
  constructor(parameter) {
    super(`Invalid sort parameter: '${parameter}'.`);
  }
};
function parseSortFields(sortString) {
  if (!sortString?.trim())
    return [];
  return sortString.split(",").map((part) => {
    const tokens = part.trim().split(/\s+/);
    const field = tokens[0];
    const direction = tokens[1]?.toLowerCase() === "desc" ? "desc" : "asc";
    return { field, direction };
  });
}
function formatSortFields(sortFields) {
  if (!sortFields?.length)
    return "";
  return sortFields.map((s) => `${s.field} ${s.direction}`).join(", ");
}
function applySorting(items, sortFields) {
  if (sortFields.length === 0)
    return items;
  return [...items].sort((a, b) => {
    for (const { field, direction } of sortFields) {
      const aVal = a[field];
      const bVal = b[field];
      if (aVal === bVal)
        continue;
      if (aVal == null)
        return direction === "asc" ? -1 : 1;
      if (bVal == null)
        return direction === "asc" ? 1 : -1;
      const comparison = aVal < bVal ? -1 : 1;
      return direction === "asc" ? comparison : -comparison;
    }
    return 0;
  });
}
function createPatchOperation(op, path, value) {
  return { op, path, value };
}
function createReplacePatch(path, value) {
  return createPatchOperation("replace", path, value);
}
function buildPartialDelta(entityId, changes) {
  const operations = Object.entries(changes).map(([field, value]) => createReplacePatch(`/${field}`, value));
  return { entityId, operations };
}
function buildReplacePatches(changes) {
  return Object.keys(changes).filter((key) => changes[key] !== void 0).map((key) => createReplacePatch(`/${String(key)}`, changes[key]));
}
function calculateAge(birthDate) {
  const birth = typeof birthDate === "string" ? new Date(birthDate) : birthDate;
  const today = /* @__PURE__ */ new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) {
    age--;
  }
  return age;
}

export {
  isTransient,
  entitiesEqual,
  BaseAggregateRoot,
  ValueObject,
  createDomainEvent,
  CompositeSpecification,
  AndSpecification,
  OrSpecification,
  NotSpecification,
  QuerySpecification,
  QuerySpecificationBuilder,
  successResult,
  failResult,
  createPagedList,
  emptyPagedList,
  shapeEntity,
  shapeCollection,
  BaseException,
  NotFoundException,
  ConflictException,
  ValidationException,
  UnprocessableEntityException,
  InvalidSortParameterException,
  parseSortFields,
  formatSortFields,
  applySorting,
  createPatchOperation,
  createReplacePatch,
  buildPartialDelta,
  buildReplacePatches,
  calculateAge
};
//# sourceMappingURL=chunk-QPV6CDQU.js.map
