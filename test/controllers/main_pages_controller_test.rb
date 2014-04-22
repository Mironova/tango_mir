require 'test_helper'

class MainPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get information" do
    get :information
    assert_response :success
  end

  test "should get lesson" do
    get :lesson
    assert_response :success
  end

  test "should get event" do
    get :event
    assert_response :success
  end

  test "should get nosotros" do
    get :nosotros
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
