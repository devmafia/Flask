from alembic import context
from sqlalchemy import engine_from_config, pool
import logging
import sys

# Import the SQLAlchemy object and the models from your app
from flask import current_app
from app import app
from models import db, User, Message, CallRequest

config = context.config

# Add basic logging setup
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger('alembic.env')

with app.app_context():
    db_uri = current_app.config.get('SQLALCHEMY_DATABASE_URI')
    logger.info(f"Using database URI: {db_uri}")
    config.set_main_option('sqlalchemy.url', db_uri)

    target_metadata = db.Model.metadata

    def run_migrations_offline():
        url = config.get_main_option("sqlalchemy.url")
        context.configure(
            url=url, target_metadata=target_metadata, literal_binds=True, dialect_opts={"paramstyle": "named"}
        )

        with context.begin_transaction():
            context.run_migrations()

    def run_migrations_online():
        connectable = engine_from_config(
            config.get_section(config.config_ini_section),
            prefix="sqlalchemy.",
            poolclass=pool.NullPool,
        )

        with connectable.connect() as connection:
            context.configure(connection=connection, target_metadata=target_metadata)

            with context.begin_transaction():
                context.run_migrations()

    if context.is_offline_mode():
        run_migrations_offline()
    else:
        run_migrations_online()
