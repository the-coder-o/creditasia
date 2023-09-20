"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const complex_controller_1 = tslib_1.__importDefault(require("./complex.controller"));
const router = (0, express_1.Router)();
exports.complexRouter = router
    .post('/admin/complex/create', complex_controller_1.default.CREATE_COMPLEX)
    .patch('/admin/complex/update/:id', complex_controller_1.default.UPDATE_COMPLEX)
    .delete('/admin/complex/delete/:id', complex_controller_1.default.DELETE_COMPLEX);