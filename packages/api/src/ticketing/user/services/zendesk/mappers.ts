import { IUserMapper } from '@ticketing/user/types';
import { ZendeskUserInput, ZendeskUserOutput } from './types';
import {
  UnifiedUserInput,
  UnifiedUserOutput,
} from '@ticketing/user/types/model.unified';

export class ZendeskUserMapper implements IUserMapper {
  desunify(
    source: UnifiedUserInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): ZendeskUserInput {
    return;
  }

  unify(
    source: ZendeskUserOutput | ZendeskUserOutput[],
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedUserOutput | UnifiedUserOutput[] {
    if (!Array.isArray(source)) {
      return this.mapSingleUserToUnified(source, customFieldMappings);
    }
    return source.map((ticket) =>
      this.mapSingleUserToUnified(ticket, customFieldMappings),
    );
  }

  private mapSingleUserToUnified(
    ticket: ZendeskUserOutput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedUserOutput {
    return;
  }
}
