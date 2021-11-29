from django.db import models

# Create your models here.


class Restaurant(models.Model):
    name = models.CharField(max_length=30)
    website = models.URLField(blank=True)
    phone_number = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    latitude = models.FloatField(default=0.0)
    longitude = models.FloatField(default=0.0)
    is_open = models.BooleanField(default=True)

    def __str__(self):
        return self.name
