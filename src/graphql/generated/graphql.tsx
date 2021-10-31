import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
};

export type Business = {
  __typename?: 'Business';
  /** Yelp alias of this business. */
  alias?: Maybe<Scalars['String']>;
  /** Business attributes. */
  attributes?: Maybe<BusinessAttributes>;
  /** A list of category title and alias pairs associated with this business. */
  categories?: Maybe<Array<Maybe<Category>>>;
  /** The coordinates of this business. */
  coordinates?: Maybe<Coordinates>;
  /** Phone number of the business formatted nicely to be displayed to users. The format is the standard phone number format for the business's country. */
  display_phone?: Maybe<Scalars['String']>;
  /** When searching, this provides the distance of the business from the search location in meters */
  distance?: Maybe<Scalars['Float']>;
  /** Opening hours of the business. */
  hours?: Maybe<Array<Maybe<Hours>>>;
  /** Yelp ID of this business. */
  id?: Maybe<Scalars['String']>;
  /** Whether business has been claimed by a business owner. */
  is_claimed?: Maybe<Scalars['Boolean']>;
  /** Whether business has been (permanently) closed. */
  is_closed?: Maybe<Scalars['Boolean']>;
  /** The location of this business, including address, city, state, postal code and country. */
  location?: Maybe<Location>;
  /** Information and action links for messaging with this business via Yelp, including requesting quotes. */
  messaging?: Maybe<BusinessMessaging>;
  /** Name of this business. */
  name?: Maybe<Scalars['String']>;
  /** Phone number of the business. */
  phone?: Maybe<Scalars['String']>;
  /** URLs of up to three photos of the business. */
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Price level of the business. Value is one of $, $$, $$$ and $$$$ or null if we don't have price available for the business. */
  price?: Maybe<Scalars['String']>;
  /** Rating for this business (value ranges from 1, 1.5, ... 4.5, 5). */
  rating?: Maybe<Scalars['Float']>;
  /** Number of reviews for this business. */
  review_count?: Maybe<Scalars['Int']>;
  /** Review snippets from the business. */
  reviews?: Maybe<Array<Maybe<Review>>>;
  /** Special hours of the business, these override regular opening hours of the business. */
  special_hours?: Maybe<Array<Maybe<SpecialHours>>>;
  /** Information and action links for transacting with this business online. */
  transactions?: Maybe<Transactions>;
  /** URL for business page on Yelp. */
  url?: Maybe<Scalars['String']>;
};


export type BusinessReviewsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type BusinessAttribute = {
  __typename?: 'BusinessAttribute';
  /** The machine-friendly name of this business attribute. */
  name_code?: Maybe<Scalars['String']>;
  /** The machine-friendly value of this business attribute. */
  value_code?: Maybe<Scalars['String']>;
};

export type BusinessAttributes = {
  __typename?: 'BusinessAttributes';
  /** Whether business has gender neutral restrooms. See https://www.yelpblog.com/2017/06/find-gender-neutral-restrooms-160000-businesses-yelp for more details. */
  gender_neutral_restrooms?: Maybe<BusinessAttribute>;
  /** Whether business has opted in to the "Open to All" pledge. See https://www.yelpblog.com/2018/07/opentoall for more details. */
  open_to_all?: Maybe<BusinessAttribute>;
  /** Whether business is wheelchair accessible. */
  wheelchair_accessible?: Maybe<BusinessAttribute>;
};

export type BusinessMessaging = {
  __typename?: 'BusinessMessaging';
  /** Visit this action link URL to go directly into the business messaging flow for this business. */
  url?: Maybe<Scalars['String']>;
  /** The localized text description of the type of messaging this business is enabled for. Example: "Request a Quote" */
  use_case_text?: Maybe<Scalars['String']>;
};

export type BusinessUser = {
  __typename?: 'BusinessUser';
  /** Name of the business user. */
  name?: Maybe<Scalars['String']>;
  /** URL of the business user's profile photo. */
  photo_url?: Maybe<Scalars['String']>;
  /** Business role for the business user. */
  role?: Maybe<Scalars['String']>;
};

export type Businesses = {
  __typename?: 'Businesses';
  /** A list of business Yelp finds based on the search criteria. */
  business?: Maybe<Array<Maybe<Business>>>;
  /** Total number of businesses found. */
  total?: Maybe<Scalars['Int']>;
};

export type Categories = {
  __typename?: 'Categories';
  /** The category objects. */
  category?: Maybe<Array<Maybe<Category>>>;
  /** Total number of categories. */
  total?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  /** Alias of a category, when searching for business in certain categories, use alias rather than the title. */
  alias?: Maybe<Scalars['String']>;
  /** Countries for which this category is blacklisted. */
  country_blacklist?: Maybe<Array<Maybe<Country>>>;
  /** Countries for which this category is whitelisted. */
  country_whitelist?: Maybe<Array<Maybe<Country>>>;
  /** List of parent categories. */
  parent_categories?: Maybe<Array<Maybe<Category>>>;
  /** Title of a category for display purposes. */
  title?: Maybe<Scalars['String']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  /** The latitude of this business. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude of this business. */
  longitude?: Maybe<Scalars['Float']>;
};

export type Country = {
  __typename?: 'Country';
  /** The ISO 3166-1 alpha-2 code for this country. */
  code?: Maybe<Scalars['String']>;
  /** Supported locales with this country. */
  locales?: Maybe<Array<Maybe<Locale>>>;
};

export type Event = {
  __typename?: 'Event';
  /** Number of Yelp users attending this event. */
  attending_count?: Maybe<Scalars['String']>;
  /** The business tied to this event. */
  business?: Maybe<Business>;
  /** The ID of the related business. */
  business_id?: Maybe<Scalars['String']>;
  /** The category of this event. */
  category?: Maybe<Scalars['String']>;
  /** Cost of attending this event. */
  cost?: Maybe<Scalars['Int']>;
  /** Maximum cost of this event. */
  cost_max?: Maybe<Scalars['Int']>;
  /** Description excerpt of this event. */
  description?: Maybe<Scalars['String']>;
  /** Yelp page of this event. */
  event_site_url?: Maybe<Scalars['String']>;
  /** Event id. */
  id?: Maybe<Scalars['String']>;
  /** Yelp image url of this event. */
  image_url?: Maybe<Scalars['String']>;
  /** Number of Yelp users interested in attending this event. */
  interested_count?: Maybe<Scalars['String']>;
  /** Whether this event is canceled. */
  is_canceled?: Maybe<Scalars['Boolean']>;
  /** Whether this event is free. */
  is_free?: Maybe<Scalars['Boolean']>;
  /** Whether this event is created by a Yelp community manager. */
  is_official?: Maybe<Scalars['Boolean']>;
  /** Latitude of this event. */
  latitude?: Maybe<Scalars['Float']>;
  /** The location of this business, including address, city, state, postal code and country. */
  location?: Maybe<Location>;
  /** Longitude of this event. */
  longitude?: Maybe<Scalars['Float']>;
  /** Name of this event. */
  name?: Maybe<Scalars['String']>;
  /** URL to buy tickets for this event. */
  tickets_url?: Maybe<Scalars['String']>;
  /** Time this event ends. Returns time and date in the following format - "YYYY-MM-DD HH-mm". */
  time_end?: Maybe<Scalars['String']>;
  /** Time the event starts. Returns time and date in the following format - "YYYY-MM-DD HH-mm". */
  time_start?: Maybe<Scalars['String']>;
};

export type Events = {
  __typename?: 'Events';
  /** List of events found matching search criteria. */
  events?: Maybe<Array<Maybe<Event>>>;
  /** Total number of events found. */
  total?: Maybe<Scalars['Int']>;
};

export type Hours = {
  __typename?: 'Hours';
  /** The type of the opening hours information. Right now, this is always REGULAR. */
  hours_type?: Maybe<Scalars['String']>;
  /** Describes if the business is open now. */
  is_open_now?: Maybe<Scalars['Boolean']>;
  /** The specific open hours and days for a business. */
  open?: Maybe<Array<Maybe<OpenHours>>>;
};

export type Language = {
  __typename?: 'Language';
  /** The ISO 639-1 alpha-2 code for this language. When such a code is unavailable for a language, it will be a ISO 639-2 alpha-3 code instead. */
  code?: Maybe<Scalars['String']>;
  /** Supported locales with this language. */
  locales?: Maybe<Array<Maybe<Locale>>>;
};

export type Locale = {
  __typename?: 'Locale';
  /** The code for this locale, in the format of {language_code}_{country_code}. */
  code?: Maybe<Scalars['String']>;
  /** The country component of this locale. */
  country?: Maybe<Country>;
  /** The language component of this locale. */
  language?: Maybe<Language>;
};

export type Location = {
  __typename?: 'Location';
  /** Street address of this business. */
  address1?: Maybe<Scalars['String']>;
  /** Street address of this business, continued. */
  address2?: Maybe<Scalars['String']>;
  /** Street address of this business, continued. */
  address3?: Maybe<Scalars['String']>;
  /** City of this business. */
  city?: Maybe<Scalars['String']>;
  /** ISO 3166-1 alpha-2 country code of this business. */
  country?: Maybe<Scalars['String']>;
  /** Array of strings that if organized vertically give an address that is in the standard address format for the business's country. */
  formatted_address?: Maybe<Scalars['String']>;
  /** Postal code of this business. */
  postal_code?: Maybe<Scalars['String']>;
  /** ISO 3166-2 (with a few exceptions) state code of this business. */
  state?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum MatchThreshold {
  Default = 'DEFAULT',
  None = 'NONE',
  Strict = 'STRICT'
}

export type OpenHours = {
  __typename?: 'OpenHours';
  /** From 0 to 6, representing day of the week from Monday to Sunday. Notice that you may get the same day of the week more than once if the business has more than one opening time slots. */
  day?: Maybe<Scalars['Int']>;
  /** End of the opening hours in a day, in 24-hour clock notation, like 2130 means 9:30 PM. */
  end?: Maybe<Scalars['String']>;
  /** Whether the business opens overnight or not. When this is true, the end time will be lower than the start time. */
  is_overnight?: Maybe<Scalars['Boolean']>;
  /** Start of the opening hours in a day, in 24-hour clock notation, like 1000 means 10 AM. */
  start?: Maybe<Scalars['String']>;
};

export type PublicReviewResponse = {
  __typename?: 'PublicReviewResponse';
  /** Details about business user associated with the business who posted this public review response comment. */
  business_user?: Maybe<BusinessUser>;
  /** Text of this public review response. */
  text?: Maybe<Scalars['String']>;
  /** The time that this public review response was created in ISO8601 format. */
  time_created?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  /** Load information about a specific business. */
  business?: Maybe<Business>;
  /** Match detailed business location data to businesses on Yelp. */
  business_match?: Maybe<Businesses>;
  categories?: Maybe<Categories>;
  /** Load information about a specific event. */
  event?: Maybe<Event>;
  /** Search for events based on search parameters. */
  event_search?: Maybe<Events>;
  /** Search for businesses on Yelp by their phone number. */
  phone_search?: Maybe<Businesses>;
  /** Load reviews for a specific business. */
  reviews?: Maybe<Reviews>;
  /** Search for businesses on Yelp. */
  search?: Maybe<Businesses>;
};


export type QueryBusinessArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryBusiness_MatchArgs = {
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  match_threshold?: Maybe<MatchThreshold>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  state: Scalars['String'];
};


export type QueryCategoriesArgs = {
  alias?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryEventArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryEvent_SearchArgs = {
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  end_date?: Maybe<Scalars['Int']>;
  is_free?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
  sort_by?: Maybe<Scalars['String']>;
  sort_on?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Int']>;
};


export type QueryPhone_SearchArgs = {
  phone?: Maybe<Scalars['String']>;
};


export type QueryReviewsArgs = {
  business?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QuerySearchArgs = {
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Int']>;
  open_at?: Maybe<Scalars['Int']>;
  open_now?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['Float']>;
  sort_by?: Maybe<Scalars['String']>;
  term?: Maybe<Scalars['String']>;
};

export type RestaurantReservations = {
  __typename?: 'RestaurantReservations';
  /** Visit this action link URL to go directly into the Yelp Reservations flow for this business. */
  url?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  /** Yelp ID of this review. */
  id?: Maybe<Scalars['String']>;
  /** Details about the publicly visible response to this review posted by the business owner. */
  public_response?: Maybe<PublicReviewResponse>;
  /** Rating of this review. */
  rating?: Maybe<Scalars['Int']>;
  /** Text excerpt of this review. */
  text?: Maybe<Scalars['String']>;
  /** The time that the review was created in PST. */
  time_created?: Maybe<Scalars['String']>;
  /** URL of this review. */
  url?: Maybe<Scalars['String']>;
  /** The user who wrote the review. */
  user?: Maybe<User>;
};

export type Reviews = {
  __typename?: 'Reviews';
  /** The business associated with the reviews */
  business?: Maybe<Business>;
  /** A list of languages for which the business has at least one review. */
  possible_languages?: Maybe<Array<Maybe<Language>>>;
  /** The reviews objects. */
  review?: Maybe<Array<Maybe<Review>>>;
  /** Total number of reviews. */
  total?: Maybe<Scalars['Int']>;
};

export type SpecialHours = {
  __typename?: 'SpecialHours';
  /** The date for which the special hours apply inISO8601 format, AKA YYYY-MM-DD */
  date?: Maybe<Scalars['Date']>;
  /** End of the opening hours in a day, in 24-hour clock notation, like 2130 means 9:30 PM. */
  end?: Maybe<Scalars['String']>;
  /** Whether the business is closed on the indicated date. */
  is_closed?: Maybe<Scalars['Boolean']>;
  /** Whether the business opens overnight or not. When this is true, the end time will be lower than the start time. */
  is_overnight?: Maybe<Scalars['Boolean']>;
  /** Start of the opening hours in a day, in 24-hour clock notation, like 1000 means 10 AM. */
  start?: Maybe<Scalars['String']>;
};

export type Transactions = {
  __typename?: 'Transactions';
  /** Online reservations via Yelp Reservations. */
  restaurant_reservations?: Maybe<RestaurantReservations>;
};

export type User = {
  __typename?: 'User';
  /** The User's ID, a 22 character string */
  id?: Maybe<Scalars['String']>;
  /** URL of the user's profile photo. */
  image_url?: Maybe<Scalars['String']>;
  /** Name of the user. */
  name?: Maybe<Scalars['String']>;
  /** User's profile url */
  profile_url?: Maybe<Scalars['String']>;
};

export type BusinessQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type BusinessQuery = { __typename?: 'Query', business?: { __typename?: 'Business', id?: string | null | undefined, name?: string | null | undefined, rating?: number | null | undefined, review_count?: number | null | undefined, price?: string | null | undefined, photos?: Array<string | null | undefined> | null | undefined, hours?: Array<{ __typename?: 'Hours', is_open_now?: boolean | null | undefined } | null | undefined> | null | undefined, categories?: Array<{ __typename?: 'Category', title?: string | null | undefined, alias?: string | null | undefined } | null | undefined> | null | undefined, location?: { __typename?: 'Location', address1?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, postal_code?: string | null | undefined } | null | undefined, coordinates?: { __typename?: 'Coordinates', latitude?: number | null | undefined, longitude?: number | null | undefined } | null | undefined } | null | undefined };

export type CategoriesQueryVariables = Exact<{
  alias?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'Categories', total?: number | null | undefined, category?: Array<{ __typename?: 'Category', title?: string | null | undefined, alias?: string | null | undefined, parent_categories?: Array<{ __typename?: 'Category', title?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type ReviewsQueryVariables = Exact<{
  business: Scalars['String'];
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews?: { __typename?: 'Reviews', total?: number | null | undefined, review?: Array<{ __typename?: 'Review', rating?: number | null | undefined, text?: string | null | undefined, time_created?: string | null | undefined, user?: { __typename?: 'User', name?: string | null | undefined, image_url?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type SearchQueryVariables = Exact<{
  term: Scalars['String'];
  location: Scalars['String'];
  categories?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  open_now?: Maybe<Scalars['Boolean']>;
}>;


export type SearchQuery = { __typename?: 'Query', search?: { __typename?: 'Businesses', total?: number | null | undefined, business?: Array<{ __typename?: 'Business', id?: string | null | undefined, name?: string | null | undefined, rating?: number | null | undefined, review_count?: number | null | undefined, price?: string | null | undefined, photos?: Array<string | null | undefined> | null | undefined, hours?: Array<{ __typename?: 'Hours', is_open_now?: boolean | null | undefined } | null | undefined> | null | undefined, categories?: Array<{ __typename?: 'Category', title?: string | null | undefined, alias?: string | null | undefined } | null | undefined> | null | undefined, location?: { __typename?: 'Location', address1?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const BusinessDocument = gql`
    query business($id: String!) {
  business(id: $id) {
    id
    name
    rating
    review_count
    hours {
      is_open_now
    }
    price
    categories {
      title
      alias
    }
    photos
    location {
      address1
      city
      state
      country
      postal_code
    }
    coordinates {
      latitude
      longitude
    }
  }
}
    `;

/**
 * __useBusinessQuery__
 *
 * To run a query within a React component, call `useBusinessQuery` and pass it any options that fit your needs.
 * When your component renders, `useBusinessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBusinessQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBusinessQuery(baseOptions: Apollo.QueryHookOptions<BusinessQuery, BusinessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BusinessQuery, BusinessQueryVariables>(BusinessDocument, options);
      }
export function useBusinessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BusinessQuery, BusinessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BusinessQuery, BusinessQueryVariables>(BusinessDocument, options);
        }
export type BusinessQueryHookResult = ReturnType<typeof useBusinessQuery>;
export type BusinessLazyQueryHookResult = ReturnType<typeof useBusinessLazyQuery>;
export type BusinessQueryResult = Apollo.QueryResult<BusinessQuery, BusinessQueryVariables>;
export const CategoriesDocument = gql`
    query categories($alias: String, $country: String, $locale: String) {
  categories(alias: $alias, country: $country, locale: $locale) {
    total
    category {
      title
      alias
      parent_categories {
        title
      }
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      alias: // value for 'alias'
 *      country: // value for 'country'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ReviewsDocument = gql`
    query reviews($business: String!) {
  reviews(business: $business) {
    total
    review {
      rating
      text
      time_created
      user {
        name
        image_url
      }
    }
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      business: // value for 'business'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const SearchDocument = gql`
    query search($term: String!, $location: String!, $categories: String, $price: String, $open_now: Boolean) {
  search(
    term: $term
    location: $location
    categories: $categories
    price: $price
    open_now: $open_now
  ) {
    total
    business {
      id
      name
      rating
      review_count
      hours {
        is_open_now
      }
      price
      categories {
        title
        alias
      }
      photos
      location {
        address1
        city
        state
        country
      }
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      term: // value for 'term'
 *      location: // value for 'location'
 *      categories: // value for 'categories'
 *      price: // value for 'price'
 *      open_now: // value for 'open_now'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;