# Generated by Django 2.1.7 on 2019-03-08 12:02

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PontoTuristico',
            fields=[
                ('ponto_turistico_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=250)),
                ('descricacao', models.TextField()),
            ],
        ),
    ]
