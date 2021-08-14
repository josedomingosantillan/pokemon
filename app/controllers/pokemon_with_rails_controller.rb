class PokemonWithRailsController < ApplicationController
  def index
    if params[:search].present?
      @dtos = Api.PokemoSearch(params[:search])
      result = JSON.parse @dtos.to_str
      @pokemons = Kaminari.paginate_array(result['results']).page(params[:page]).per(12)

      if @pokemons.empty?
        @error = 1
      end
    else
      @dtos = Api.PokemoAll
      result = JSON.parse @dtos.to_str
      @pokemons = Kaminari.paginate_array(result['results']).page(params[:page]).per(12)
    end

  end
end
