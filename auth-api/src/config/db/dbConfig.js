import { Sequelize } from "sequelize";

const senha = "123456";

const sequelize = new Sequelize('postgres://admin:123456@localhost:5431/auth-db', {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true,
    },
});

sequelize
.authenticate()
.then(() => {

    console.info("connect has been stablished!")

})

.catch((err) => {
    console.error("Unable to connect to the database.")
    console.error(err.message);

});

export default sequelize;
