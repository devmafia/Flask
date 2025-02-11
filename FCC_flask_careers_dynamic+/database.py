from sqlalchemy import create_engine, text
import os

# db_connection_string = os.environ['DB_CONNECTION_STRING']

engine = create_engine("mysql+pymysql://root:@127.0.0.1/careers?charset=utf8mb4")


def load_jobs_from_db(id=None):    
    with engine.connect() as conn:
        if id != None:
            result = conn.execute(text("SELECT * FROM jobs WHERE id = :val"),  {'val': id})
        
            return list(result)
        else:
            result = conn.execute(text("select * from jobs"))
            jobs = []
            for row in result.fetchall():
                jobs.append(row)
            print(jobs)
            return jobs
