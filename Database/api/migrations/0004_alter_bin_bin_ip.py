# Generated by Django 4.2 on 2023-04-16 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_anchor_bin_id_alter_bin_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bin',
            name='bin_ip',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
