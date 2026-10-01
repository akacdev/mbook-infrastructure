const adminDb = db.getSiblingDB("admin");

adminDb.createUser({
  user: process.env.MONGO_ADMIN_USERNAME,
  pwd: process.env.MONGO_ADMIN_PASSWORD,
  roles: [
    { role: "clusterAdmin", db: "admin" },
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "dbAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
});

adminDb.createUser({
  user: process.env.MONGO_PROD_USERNAME,
  pwd: process.env.MONGO_PROD_PASSWORD,
  roles: [
    { role: "readWrite", db: "MaturitaBook" }
  ]
});

const maturitaBookDb = db.getSiblingDB("MaturitaBook");

maturitaBookDb.createUser({
  user: process.env.MONGO_EXPORT_USERNAME,
  pwd: process.env.MONGO_EXPORT_PASSWORD,
  roles: [
    { role: "read", db: "MaturitaBook" }
  ]
});
