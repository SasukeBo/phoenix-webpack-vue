defmodule LearnWebpackWithPhoenixWeb.VueController do
  use LearnWebpackWithPhoenixWeb, :controller

  def index(conn, _params) do
    conn
    # |> put_layout(false)
    |> render("index.html")
  end
end
