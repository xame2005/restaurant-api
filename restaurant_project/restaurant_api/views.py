from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Restaurant
import json

# Create your views here.


class RestaurantView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            restaurants = list(Restaurant.objects.filter(id=id).values())
            if len(restaurants) > 0:
                restaurant = restaurants[0]
                data = {'message': 'Success', 'restaurant': restaurant}
            else:
                data = {'message': "No restaurants found"}
            return JsonResponse(data)

        else:
            restaurants = list(Restaurant.objects.values())
            if len(restaurants) > 0:
                data = {'message': "Success", 'restaurants': restaurants}
            else:
                data = {'message': "No restaurants found"}
            return JsonResponse(data)

    def post(self, request):
        jd = json.loads(request.body)
        Restaurant.objects.create(
            name=jd['name'],
            website=jd['website'],
            phone_number=jd['phone_number'],
            address=jd['address'],
            city=jd['city'],
            state=jd['state'],
            latitude=jd['latitude'],
            longitude=jd['longitude'],
        )
        data = {'message': "Success"}
        return JsonResponse(data)

    def put(self, request, id):
        jd = json.loads(request.body)
        restaurants = list(Restaurant.objects.filter(id=id).values())
        if len(restaurants) > 0:
            restaurant = Restaurant.objects.get(id=id)
            restaurant.name = jd['name']
            restaurant.website = jd['website']
            restaurant.phone_number = jd['phone_number']
            restaurant.address = jd['address']
            restaurant.city = jd['city']
            restaurant.state = jd['state']
            restaurant.latitude = jd['latitude']
            restaurant.longitude = jd['longitude']
            restaurant.is_open = jd['is_open']
            restaurant.save()
            data = {'message': "Success"}
        else:
            data = {'message': "No restaurant found"}
        return JsonResponse(data)

    def delete(self, request, id):
        companies = list(Restaurant.objects.filter(id=id).values())
        if len(companies) > 0:
            Restaurant.objects.filter(id=id).delete()
            data = {'message': "Success"}
        else:
            data = {'message': "No restaurant found"}
        return JsonResponse(data)
