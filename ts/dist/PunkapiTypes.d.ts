export interface Beer {
    abv?: number;
    attenuation_level?: number;
    boil_volume?: Record<string, any>;
    brewers_tips?: string;
    contributed_by?: string;
    description?: string;
    ebc?: number;
    first_brewed?: string;
    food_pairing?: any[];
    ibu?: number;
    id?: number;
    image?: string;
    ingredients?: Record<string, any>;
    method?: Record<string, any>;
    name?: string;
    ph?: number;
    srm?: number;
    tagline?: string;
    target_fg?: number;
    target_og?: number;
    volume?: Record<string, any>;
}
export interface BeerLoadMatch {
    id: number;
}
export interface BeerListMatch {
    abv_gt?: number;
    abv_lt?: number;
    beer_name?: string;
    brewed_after?: string;
    brewed_before?: string;
    ebc_gt?: number;
    ebc_lt?: number;
    food?: string;
    ibu_gt?: number;
    ibu_lt?: number;
    ids?: string;
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
export interface Image {
    id?: string;
}
export interface ImageLoadMatch {
    id: string;
}
