export type HandleSearch = (cityName: string) => void;

export interface InputProps {
  onSearch: HandleSearch;
}
