from django.db import models

# YOUR EXISTING USERS TABLE (Exact match)
class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=100)
    role = models.CharField(max_length=20)
    email = models.CharField(max_length=254)
    password = models.CharField(max_length=255)
    enterprise_id = models.IntegerField(blank=True, null=True)
    is_active = models.IntegerField()
    projects_assigned = models.CharField(max_length=255, blank=True, null=True)
    activity_log = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False  # Use YOUR existing table
        db_table = 'users'

    def __str__(self):
        return f"{self.username} ({self.role})"

# YOUR PROJECTS TABLE  
class Projects(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    enterprise_id = models.IntegerField(blank=True, null=True)
    pm_user_id = models.IntegerField(blank=True, null=True)
    team_lead_id = models.IntegerField(blank=True, null=True)
    status = models.CharField(max_length=20)
    budget_total = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    budget_spent = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    charter_document = models.TextField(blank=True, null=True)
    scope_description = models.TextField(blank=True, null=True)
    stakeholder_list = models.JSONField(blank=True, null=True)
    team_members = models.JSONField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    team_size = models.IntegerField()
    health_score = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'projects'

    def __str__(self):
        return self.name
