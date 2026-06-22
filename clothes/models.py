from django.contrib.auth.models import User
from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=255)
    brand = models.CharField(max_length= 255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    OriginalPrice = models.DecimalField(max_digits=10, decimal_places=2)
    inventory = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')

    def __str__(self):
        return self.title


class Cart(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='cart')


class CartItem(models.Model):
    amount = models.IntegerField()
    cart = models.ForeignKey(Cart, on_delete = models.CASCADE, related_name = 'cartitems')
    product = models.ForeignKey(Product, on_delete = models.CASCADE, related_name = 'cartitems')

class Reviews(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    product = models.ForeignKey(Product, on_delete= models.SET_NULL, null=True, related_name='reviews')
    class Meta:
        unique_together = ('author', 'product')
