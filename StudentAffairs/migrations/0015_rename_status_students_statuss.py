# Generated by Django 4.2.1 on 2023-06-01 19:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('StudentAffairs', '0014_students_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='students',
            old_name='status',
            new_name='statuss',
        ),
    ]