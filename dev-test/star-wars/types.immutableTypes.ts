export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A character from the Star Wars universe */
export type Character = {
  /** The movies this character appears in */
  readonly appearsIn: ReadonlyArray<Maybe<Episode>>;
  /** The friends of the character, or an empty list if they have none */
  readonly friends?: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** The friends of the character exposed as a connection with edges */
  readonly friendsConnection: FriendsConnection;
  /** The ID of the character */
  readonly id: Scalars['ID'];
  /** The name of the character */
  readonly name: Scalars['String'];
};

/** A character from the Star Wars universe */
export type CharacterFriendsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
};

/** The input object sent when passing a color */
export type ColorInput = {
  readonly blue: Scalars['Int'];
  readonly green: Scalars['Int'];
  readonly red: Scalars['Int'];
};

/** An autonomous mechanical character in the Star Wars universe */
export type Droid = Character & {
  readonly __typename?: 'Droid';
  /** The movies this droid appears in */
  readonly appearsIn: ReadonlyArray<Maybe<Episode>>;
  /** This droid's friends, or an empty list if they have none */
  readonly friends?: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** The friends of the droid exposed as a connection with edges */
  readonly friendsConnection: FriendsConnection;
  /** The ID of the droid */
  readonly id: Scalars['ID'];
  /** What others call this droid */
  readonly name: Scalars['String'];
  /** This droid's primary function */
  readonly primaryFunction?: Maybe<Scalars['String']>;
};

/** An autonomous mechanical character in the Star Wars universe */
export type DroidFriendsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
};

/** The episodes in the Star Wars trilogy */
export enum Episode {
  /** Star Wars Episode V: The Empire Strikes Back, released in 1980. */
  Empire = 'EMPIRE',
  /** Star Wars Episode VI: Return of the Jedi, released in 1983. */
  Jedi = 'JEDI',
  /** Star Wars Episode IV: A New Hope, released in 1977. */
  Newhope = 'NEWHOPE',
}

/** A connection object for a character's friends */
export type FriendsConnection = {
  readonly __typename?: 'FriendsConnection';
  /** The edges for each of the character's friends. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<FriendsEdge>>>;
  /** A list of the friends, as a convenience when edges are not needed. */
  readonly friends?: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** Information for paginating this connection */
  readonly pageInfo: PageInfo;
  /** The total number of friends */
  readonly totalCount?: Maybe<Scalars['Int']>;
};

/** An edge object for a character's friends */
export type FriendsEdge = {
  readonly __typename?: 'FriendsEdge';
  /** A cursor used for pagination */
  readonly cursor: Scalars['ID'];
  /** The character represented by this friendship edge */
  readonly node?: Maybe<Character>;
};

/** A humanoid creature from the Star Wars universe */
export type Human = Character & {
  readonly __typename?: 'Human';
  /** The movies this human appears in */
  readonly appearsIn: ReadonlyArray<Maybe<Episode>>;
  /** This human's friends, or an empty list if they have none */
  readonly friends?: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** The friends of the human exposed as a connection with edges */
  readonly friendsConnection: FriendsConnection;
  /** Height in the preferred unit, default is meters */
  readonly height?: Maybe<Scalars['Float']>;
  /** The home planet of the human, or null if unknown */
  readonly homePlanet?: Maybe<Scalars['String']>;
  /** The ID of the human */
  readonly id: Scalars['ID'];
  /** Mass in kilograms, or null if unknown */
  readonly mass?: Maybe<Scalars['Float']>;
  /** What this human calls themselves */
  readonly name: Scalars['String'];
  /** A list of starships this person has piloted, or an empty list if none */
  readonly starships?: Maybe<ReadonlyArray<Maybe<Starship>>>;
};

/** A humanoid creature from the Star Wars universe */
export type HumanFriendsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
};

/** A humanoid creature from the Star Wars universe */
export type HumanHeightArgs = {
  unit?: Maybe<LengthUnit>;
};

/** Units of height */
export enum LengthUnit {
  /** Primarily used in the United States */
  Foot = 'FOOT',
  /** The standard unit around the world */
  Meter = 'METER',
}

/** The mutation type, represents all updates we can make to our data */
export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createReview?: Maybe<Review>;
};

/** The mutation type, represents all updates we can make to our data */
export type MutationCreateReviewArgs = {
  episode?: Maybe<Episode>;
  review: ReviewInput;
};

/** Information for paginating this connection */
export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly endCursor?: Maybe<Scalars['ID']>;
  readonly hasNextPage: Scalars['Boolean'];
  readonly startCursor?: Maybe<Scalars['ID']>;
};

/** The query type, represents all of the entry points into our object graph */
export type Query = {
  readonly __typename?: 'Query';
  readonly character?: Maybe<Character>;
  readonly droid?: Maybe<Droid>;
  readonly hero?: Maybe<Character>;
  readonly human?: Maybe<Human>;
  readonly reviews?: Maybe<ReadonlyArray<Maybe<Review>>>;
  readonly search?: Maybe<ReadonlyArray<Maybe<SearchResult>>>;
  readonly starship?: Maybe<Starship>;
};

/** The query type, represents all of the entry points into our object graph */
export type QueryCharacterArgs = {
  id: Scalars['ID'];
};

/** The query type, represents all of the entry points into our object graph */
export type QueryDroidArgs = {
  id: Scalars['ID'];
};

/** The query type, represents all of the entry points into our object graph */
export type QueryHeroArgs = {
  episode?: Maybe<Episode>;
};

/** The query type, represents all of the entry points into our object graph */
export type QueryHumanArgs = {
  id: Scalars['ID'];
};

/** The query type, represents all of the entry points into our object graph */
export type QueryReviewsArgs = {
  episode: Episode;
};

/** The query type, represents all of the entry points into our object graph */
export type QuerySearchArgs = {
  text?: Maybe<Scalars['String']>;
};

/** The query type, represents all of the entry points into our object graph */
export type QueryStarshipArgs = {
  id: Scalars['ID'];
};

/** Represents a review for a movie */
export type Review = {
  readonly __typename?: 'Review';
  /** Comment about the movie */
  readonly commentary?: Maybe<Scalars['String']>;
  /** The number of stars this review gave, 1-5 */
  readonly stars: Scalars['Int'];
};

/** The input object sent when someone is creating a new review */
export type ReviewInput = {
  /** Comment about the movie, optional */
  readonly commentary?: Maybe<Scalars['String']>;
  /** Favorite color, optional */
  readonly favoriteColor?: Maybe<ColorInput>;
  /** 0-5 stars */
  readonly stars: Scalars['Int'];
};

export type SearchResult = Droid | Human | Starship;

export type Starship = {
  readonly __typename?: 'Starship';
  /** The ID of the starship */
  readonly id: Scalars['ID'];
  /** Length of the starship, along the longest axis */
  readonly length?: Maybe<Scalars['Float']>;
  /** The name of the starship */
  readonly name: Scalars['String'];
};

export type StarshipLengthArgs = {
  unit?: Maybe<LengthUnit>;
};

export type CreateReviewForEpisodeMutationVariables = Exact<{
  episode: Episode;
  review: ReviewInput;
}>;

export type CreateReviewForEpisodeMutation = {
  readonly __typename?: 'Mutation';
  readonly createReview?:
    | { readonly __typename?: 'Review'; readonly stars: number; readonly commentary?: string | null | undefined }
    | null
    | undefined;
};

export type HeroAndFriendsNamesQueryVariables = Exact<{
  episode?: Maybe<Episode>;
}>;

export type HeroAndFriendsNamesQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | {
        readonly __typename?: 'Droid';
        readonly name: string;
        readonly friends?:
          | ReadonlyArray<
              | { readonly __typename?: 'Droid'; readonly name: string }
              | { readonly __typename?: 'Human'; readonly name: string }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | {
        readonly __typename?: 'Human';
        readonly name: string;
        readonly friends?:
          | ReadonlyArray<
              | { readonly __typename?: 'Droid'; readonly name: string }
              | { readonly __typename?: 'Human'; readonly name: string }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type HeroAppearsInQueryVariables = Exact<{ [key: string]: never }>;

export type HeroAppearsInQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | {
        readonly __typename?: 'Droid';
        readonly name: string;
        readonly appearsIn: ReadonlyArray<Episode | null | undefined>;
      }
    | {
        readonly __typename?: 'Human';
        readonly name: string;
        readonly appearsIn: ReadonlyArray<Episode | null | undefined>;
      }
    | null
    | undefined;
};

export type HeroDetailsQueryVariables = Exact<{
  episode?: Maybe<Episode>;
}>;

export type HeroDetailsQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | { readonly __typename?: 'Droid'; readonly primaryFunction?: string | null | undefined; readonly name: string }
    | { readonly __typename?: 'Human'; readonly height?: number | null | undefined; readonly name: string }
    | null
    | undefined;
};

type HeroDetails_Droid_Fragment = {
  readonly __typename?: 'Droid';
  readonly primaryFunction?: string | null | undefined;
  readonly name: string;
};

type HeroDetails_Human_Fragment = {
  readonly __typename?: 'Human';
  readonly height?: number | null | undefined;
  readonly name: string;
};

export type HeroDetailsFragment = HeroDetails_Droid_Fragment | HeroDetails_Human_Fragment;

export type HeroDetailsWithFragmentQueryVariables = Exact<{
  episode?: Maybe<Episode>;
}>;

export type HeroDetailsWithFragmentQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | { readonly __typename?: 'Droid'; readonly primaryFunction?: string | null | undefined; readonly name: string }
    | { readonly __typename?: 'Human'; readonly height?: number | null | undefined; readonly name: string }
    | null
    | undefined;
};

export type HeroNameQueryVariables = Exact<{
  episode?: Maybe<Episode>;
}>;

export type HeroNameQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | { readonly __typename?: 'Droid'; readonly name: string }
    | { readonly __typename?: 'Human'; readonly name: string }
    | null
    | undefined;
};

export type HeroNameConditionalInclusionQueryVariables = Exact<{
  episode?: Maybe<Episode>;
  includeName: Scalars['Boolean'];
}>;

export type HeroNameConditionalInclusionQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | { readonly __typename?: 'Droid'; readonly name?: string }
    | { readonly __typename?: 'Human'; readonly name?: string }
    | null
    | undefined;
};

export type HeroNameConditionalExclusionQueryVariables = Exact<{
  episode?: Maybe<Episode>;
  skipName: Scalars['Boolean'];
}>;

export type HeroNameConditionalExclusionQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | { readonly __typename?: 'Droid'; readonly name?: string }
    | { readonly __typename?: 'Human'; readonly name?: string }
    | null
    | undefined;
};

export type HeroParentTypeDependentFieldQueryVariables = Exact<{
  episode?: Maybe<Episode>;
}>;

export type HeroParentTypeDependentFieldQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | {
        readonly __typename?: 'Droid';
        readonly name: string;
        readonly friends?:
          | ReadonlyArray<
              | { readonly __typename?: 'Droid'; readonly name: string }
              | { readonly __typename?: 'Human'; readonly height?: number | null | undefined; readonly name: string }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | {
        readonly __typename?: 'Human';
        readonly name: string;
        readonly friends?:
          | ReadonlyArray<
              | { readonly __typename?: 'Droid'; readonly name: string }
              | { readonly __typename?: 'Human'; readonly height?: number | null | undefined; readonly name: string }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type HeroTypeDependentAliasedFieldQueryVariables = Exact<{
  episode?: Maybe<Episode>;
}>;

export type HeroTypeDependentAliasedFieldQuery = {
  readonly __typename?: 'Query';
  readonly hero?:
    | { readonly __typename?: 'Droid'; readonly property?: string | null | undefined }
    | { readonly __typename?: 'Human'; readonly property?: string | null | undefined }
    | null
    | undefined;
};

export type HumanFieldsFragment = {
  readonly __typename?: 'Human';
  readonly name: string;
  readonly mass?: number | null | undefined;
};

export type HumanWithNullHeightQueryVariables = Exact<{ [key: string]: never }>;

export type HumanWithNullHeightQuery = {
  readonly __typename?: 'Query';
  readonly human?:
    | { readonly __typename?: 'Human'; readonly name: string; readonly mass?: number | null | undefined }
    | null
    | undefined;
};

export type TwoHeroesQueryVariables = Exact<{ [key: string]: never }>;

export type TwoHeroesQuery = {
  readonly __typename?: 'Query';
  readonly r2?:
    | { readonly __typename?: 'Droid'; readonly name: string }
    | { readonly __typename?: 'Human'; readonly name: string }
    | null
    | undefined;
  readonly luke?:
    | { readonly __typename?: 'Droid'; readonly name: string }
    | { readonly __typename?: 'Human'; readonly name: string }
    | null
    | undefined;
};
