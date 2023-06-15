# Generated by Django 3.2.5 on 2023-06-14 04:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20230612_1150'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Note',
        ),
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(default='path/to/my/default/image.jpg', upload_to='images'),
        ),
        migrations.AddField(
            model_name='product',
            name='in_stock',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.IntegerField(),
        ),
    ]