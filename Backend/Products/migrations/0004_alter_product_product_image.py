# Generated by Django 4.2.8 on 2023-12-18 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Products", "0003_alter_product_product_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="product_image",
            field=models.ImageField(upload_to="./Products/product_image"),
        ),
    ]