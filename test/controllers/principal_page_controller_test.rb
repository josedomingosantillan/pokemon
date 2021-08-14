require 'test_helper'

class PrincipalPageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get principal_page_index_url
    assert_response :success
  end

end
