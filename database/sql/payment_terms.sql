﻿--
-- Script was generated by Devart dbForge Studio 2019 for MySQL, Version 8.2.23.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 6/4/2022 7:57:53 AM
-- Server version: 5.7.24
-- Client version: 4.1
--


SET NAMES 'utf8';

INSERT INTO quickbilling.payment_terms(id, name, value, enabled, created_at, updated_at, deleted_at) VALUES
(1, 'Net 30', 30, 1, '2022-03-12 15:23:01', '2022-03-12 15:23:01', NULL),
(2, 'Cash On Delivery', 0, 1, '2022-03-12 15:23:22', '2022-03-12 15:23:22', NULL),
(3, 'Net 15', 15, 1, '2022-03-12 15:23:32', '2022-03-12 15:23:32', NULL),
(4, 'Net 60', 60, 1, '2022-03-12 15:23:47', '2022-03-12 15:23:47', NULL),
(5, 'Custom', 0, 1, '2022-04-22 07:36:02', '2022-04-22 07:36:02', NULL);