from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
PERCENTAGE_VALIDATOR = [MinValueValidator(0), MaxValueValidator(100)]
# phno_validator = [MinValueValidator(1000000000), MaxValueValidator(9999999999)]


class Bin(models.Model):
    bin_id = models.AutoField(serialize=True, primary_key=True)
    user_id = models.ForeignKey("Anchor", blank = True,editable=True,null=True, on_delete=models.CASCADE)
    # email = models.EmailField( max_length=254,unique=True)
    bin_ip = models.CharField(max_length=50,unique=True)
    moisture = models.IntegerField()
    filled = models.DecimalField(max_digits=3, decimal_places=0, validators=PERCENTAGE_VALIDATOR)


class Anchor(models.Model):

    user_id = models.AutoField(serialize=True, primary_key=True)
    bin_id = models.ForeignKey("Bin",blank = True,editable=True,null=True,on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    phno = models.CharField(max_length=10,unique=True)
    # email = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField( max_length=254,unique=True)
    address = models.TextField(blank=True)
    state =models.CharField(max_length=50)
    zip = models.IntegerField()

class Complain(models.Model):
        
    comp_id = models.AutoField(serialize=True, primary_key=True)
    email = models.EmailField( max_length=254)
    issue = models.TextField(max_length=400)





