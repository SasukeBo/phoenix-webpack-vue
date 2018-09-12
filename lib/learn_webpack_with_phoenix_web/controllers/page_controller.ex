defmodule LearnWebpackWithPhoenixWeb.PageController do
  use LearnWebpackWithPhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
