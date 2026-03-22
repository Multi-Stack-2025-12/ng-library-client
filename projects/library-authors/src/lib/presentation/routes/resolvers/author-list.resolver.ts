import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LITERARY_GENRE_AGENT } from 'library-integration';
import type { LiteraryGenreDto } from 'library-integration';

export interface AuthorListResolvedData {
  genres: readonly LiteraryGenreDto[];
}

export const authorListResolver: ResolveFn<AuthorListResolvedData> = async () => {
  const literaryGenreAgent = inject(LITERARY_GENRE_AGENT);
  try {
    const genresPage = await literaryGenreAgent.getAllLiteraryGenres({ pageNumber: 1, pageSize: 100 });
    return { genres: genresPage.items };
  } catch {
    return { genres: [] };
  }
};
