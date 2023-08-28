import {describe, expect} from 'vitest';
import {FavoriteCityPlaces} from './favorite-city-places.tsx';
import {generateMockOffer} from '../../mocks/generate-mock-offer.ts';
import {Offer} from '../../store/offers-process/offers-process.slice.ts';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../mocks/mock-component.tsx';
import {initialUserState} from '../../store/user-process/user-process.slice.ts';


describe('Component: FavoriteCityPlaces', () => {
  const mockFavoriteCity = 'Amsterdam';
  const mockFavoriteOffers = Array.from({length: 3}, () => generateMockOffer(false)) as Offer[];
  const mockFavoriteAmsterdamOffers = mockFavoriteOffers;

  it('should render correctly', () => {
    const favoriteCityPlacesElementId = 'favorite-city-places-element';
    const {withStoreComponent} = withStore(
      <FavoriteCityPlaces favoriteOffers={mockFavoriteAmsterdamOffers} cityName={mockFavoriteCity}/>,
      {USER: initialUserState});
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(favoriteCityPlacesElementId)).toBeInTheDocument();
  });
});
