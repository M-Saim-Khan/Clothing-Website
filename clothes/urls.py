from django.urls import path
from . import views
urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('products/', views.ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('cart/', views.CartView.as_view(), name='cart-view'),
    path('cart/items/', views.CartItemCreate.as_view(), name='cart-item-create'),
    path('cart/items/<int:pk>/', views.CartItemDelete.as_view(), name='cart-item-delete'),
    path('products/<int:pk>/reviews/', views.ReviewList.as_view(), name = "review-list"),
    path('products/<int:pk>/reviews/create/', views.ReviewCreate.as_view(), name = "review-create"),
    path('products/reviews/<int:pk>/', views.ReviewDelete.as_view(), name = "review-delete"),
    path('me/', views.CurrentUserView.as_view(), name='current-user'),
]