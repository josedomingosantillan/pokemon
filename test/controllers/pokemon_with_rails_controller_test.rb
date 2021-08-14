require 'test_helper'

class PokemonWithRailsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pokemon_with_rails_index_url
    assert_response :success
  end

end
