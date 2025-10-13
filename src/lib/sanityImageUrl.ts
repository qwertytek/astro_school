import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityClient } from "sanity:client";

export function urlFor(source: SanityImageSource, client: typeof sanityClient) {
    return imageUrlBuilder(client).image(source)
}