# Generated by Django 4.2.1 on 2023-05-31 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentAffairs', '0012_alter_students_student_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='admin',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('N', 'Prefer not to say')], default='N', max_length=1),
        ),
    ]