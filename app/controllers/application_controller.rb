class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  helper_method :logged_in?, :current_user
  skip_before_action :verify_authenticity_token

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      render json: { base: ['invalid credentials'] }, status: 418 #status: 401 correct one
    end
  end

end
