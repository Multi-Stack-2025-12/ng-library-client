import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  QuerySpecification,
  createPagedList,
  formatSortFields
} from "./chunk-SZ5V3C56.js";
import "./chunk-6DU2HRTW.js";

// node_modules/@eac-arch/infrastructure-persistence/fesm2022/eac-arch-infrastructure-persistence.mjs
var ReadOnlyHttpRepository = class {
  // Override when getById must reconstruct a fully-loaded aggregate (e.g. with child collections).
  // Default: delegates to mapToEntity.
  rehydrate(id, dto) {
    return Promise.resolve(this.mapToEntity(dto));
  }
  // -- ReadOnlyHttpRepository implementation --
  async getAll(pageNumber, pageSize, options) {
    const page = await this.doGetAll(pageNumber, pageSize, options);
    return createPagedList([...page.items].map((m) => this.mapToEntity(m)), page.totalCount, page.currentPage, page.pageSize);
  }
  async getById(id) {
    const dto = await this.doGetById(id);
    if (!dto)
      return null;
    return this.rehydrate(id, dto);
  }
  exists(id) {
    return this.doExists(id);
  }
};
var GenericHttpRepository = class extends ReadOnlyHttpRepository {
  // -- HttpRepository implementation --
  async create(data) {
    const dto = await this.doCreate(data);
    return this.rehydrate(this.extractId(dto), dto);
  }
  async upsert(id, data) {
    const dto = await this.doUpsert(id, data);
    return dto ? this.rehydrate(id, dto) : null;
  }
  updatePartial(id, changes) {
    return this.doUpdatePartial(id, changes);
  }
  delete(id) {
    return this.doDelete(id);
  }
};
var HttpRepository = class extends GenericHttpRepository {
};
var HttpQueryService = class {
  // Override in root resource query services.
  // Default: throws because sub-resource query services require a parent ID.
  doGetAll(_pageNumber, _pageSize, _options) {
    throw new Error("getAll is not supported by this query service");
  }
  // Override in root resource query services.
  doGetById(_id) {
    throw new Error("getById is not supported by this query service");
  }
  // -- QueryService<TModel> implementation --
  async getAll() {
    const result = await this.doGetAll(1, Number.MAX_SAFE_INTEGER);
    return [...result.items];
  }
  getById(id) {
    return this.doGetById(id);
  }
  async getPagedList(pageNumber, pageSize, spec, sortFields, fields) {
    const options = this.buildOptions(spec, sortFields, fields);
    const result = await this.doGetAll(pageNumber, pageSize, options);
    return this.toPagedList(result);
  }
  // -- Shared helpers --
  // Converts a Specification + SortField[] into the agent-compatible TQueryOptions shape.
  // All subclasses share this exact logic — previously duplicated in every impl.
  buildOptions(spec, sortFields, fields) {
    const options = {};
    if (spec instanceof QuerySpecification)
      Object.assign(options, spec.toQueryParams());
    if (sortFields?.length)
      options.sort = formatSortFields(sortFields);
    if (fields?.length)
      options.fields = fields.join(",");
    return options;
  }
  // Converts an agent PagedList<TModel> into the shared PagedList format from @eac-arch/shared-kernel.
  toPagedList(source) {
    return createPagedList([...source.items], source.totalCount, source.currentPage, source.pageSize);
  }
};
export {
  GenericHttpRepository,
  HttpQueryService,
  HttpRepository,
  ReadOnlyHttpRepository
};
//# sourceMappingURL=@eac-arch_infrastructure-persistence.js.map
