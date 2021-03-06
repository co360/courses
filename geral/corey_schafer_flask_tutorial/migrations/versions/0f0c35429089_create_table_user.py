"""create table user

Revision ID: 0f0c35429089
Revises: 
Create Date: 2019-07-13 22:08:35.328994

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = '0f0c35429089'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('user',
                    sa.Column('id',
                              sa.Integer,
                              primary_key=True),
                    sa.Column('username',
                              sa.String(250),
                              nullable=False,
                              unique=True),
                    sa.Column('email',
                              sa.String(250),
                              nullable=False,
                              unique=True),
                    sa.Column('image',
                              sa.String(250),
                              nullable=False,
                              default='default.jpg'),
                    sa.Column('password',
                              sa.String(250),
                              nullable=False))


def downgrade():
    op.drop_table('user')
