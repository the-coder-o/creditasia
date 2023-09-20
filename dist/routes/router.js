"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_routes_1 = require("../module/admin/admin.routes");
const company_routes_1 = require("../module/company/company.routes");
const complex_routes_1 = require("../module/complex/complex.routes");
const appRouter = (0, express_1.Router)();
appRouter.use(company_routes_1.companyRouter, complex_routes_1.complexRouter, admin_routes_1.adminRouter);
exports.default = appRouter;