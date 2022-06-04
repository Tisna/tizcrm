﻿--
-- Script was generated by Devart dbForge Studio 2019 for MySQL, Version 8.2.23.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 6/4/2022 7:57:20 AM
-- Server version: 5.7.24
-- Client version: 4.1
--


SET NAMES 'utf8';

INSERT INTO quickbilling.ifrs_categories(id, entity_id, category_type, name, destroyed_at, deleted_at, created_at, updated_at) VALUES
(5, 1, 'CURRENT_ASSET', 'Asset Accounts', NULL, NULL, '2022-04-09 13:35:15', '2022-04-09 13:35:15'),
(9, 1, 'CURRENT_LIABILITY', 'Liability Accounts', NULL, NULL, '2022-04-09 13:36:44', '2022-04-09 13:36:44'),
(12, 1, 'OPERATING_REVENUE', 'Operations Accounts', NULL, NULL, '2022-04-09 13:38:08', '2022-04-09 13:38:08'),
(14, 1, 'NON_OPERATING_REVENUE', 'Non-Operations Accounts', NULL, NULL, '2022-04-09 13:39:21', '2022-04-09 13:39:21'),
(18, 1, 'RECONCILIATION', 'Miscellaneous Accounts', NULL, NULL, '2022-04-09 13:42:14', '2022-04-09 13:42:14'),
(19, 1, 'BANK', 'Cash on hand', NULL, NULL, '2022-05-16 00:01:07', '2022-05-16 00:01:07'),
(20, 1, 'BANK', 'Checking', NULL, NULL, '2022-05-16 00:02:06', '2022-05-16 00:02:06'),
(21, 1, 'BANK', 'Money Market', NULL, NULL, '2022-05-16 00:02:27', '2022-05-16 00:02:27'),
(22, 1, 'BANK', 'Rents Held in Trust', NULL, NULL, '2022-05-16 00:02:39', '2022-05-16 00:02:39'),
(23, 1, 'BANK', 'Savings', NULL, NULL, '2022-05-16 00:02:53', '2022-05-16 00:02:53'),
(24, 1, 'BANK', 'Trust account', NULL, NULL, '2022-05-16 00:03:07', '2022-05-16 00:03:07'),
(25, 1, 'CONTRA_ASSET', 'Accumulated Amortization', NULL, NULL, '2022-05-16 00:04:55', '2022-05-16 00:21:57'),
(26, 1, 'CONTRA_ASSET', 'Accumulated Depletion', NULL, NULL, '2022-05-16 00:05:17', '2022-05-16 00:22:10'),
(27, 1, 'CONTRA_ASSET', 'Accumulated Depreciation', NULL, NULL, '2022-05-16 00:05:30', '2022-05-16 00:22:28'),
(28, 1, 'CURRENT_ASSET', 'Buildings', NULL, NULL, '2022-05-16 00:05:44', '2022-05-16 00:05:44'),
(29, 1, 'CURRENT_ASSET', 'Depletable Assets', NULL, NULL, '2022-05-16 00:05:56', '2022-05-16 00:05:56'),
(30, 1, 'CURRENT_ASSET', 'Fixed Asset Computers', NULL, NULL, '2022-05-16 00:06:09', '2022-05-16 00:06:09'),
(31, 1, 'CURRENT_ASSET', 'Fixed Asset Copiers', NULL, NULL, '2022-05-16 00:06:24', '2022-05-16 00:06:24'),
(32, 1, 'CURRENT_ASSET', 'Fixed Asset Furniture', NULL, NULL, '2022-05-16 00:06:37', '2022-05-16 00:06:37'),
(33, 1, 'CURRENT_ASSET', 'Fixed Asset Other Tools Equipment', NULL, NULL, '2022-05-16 00:06:52', '2022-05-16 00:06:52'),
(34, 1, 'CURRENT_ASSET', 'Fixed Asset Phone', NULL, NULL, '2022-05-16 00:07:05', '2022-05-16 00:07:05'),
(35, 1, 'CURRENT_ASSET', 'Fixed Asset Photo Video', NULL, NULL, '2022-05-16 00:07:17', '2022-05-16 00:07:17'),
(36, 1, 'CURRENT_ASSET', 'Fixed Asset Software', NULL, NULL, '2022-05-16 00:07:33', '2022-05-16 00:07:33'),
(37, 1, 'CURRENT_ASSET', 'Furniture & Fixtures', NULL, NULL, '2022-05-16 00:07:45', '2022-05-16 00:07:45'),
(38, 1, 'CURRENT_ASSET', 'Intangible Assets', NULL, NULL, '2022-05-16 00:07:57', '2022-05-16 00:07:57'),
(39, 1, 'CURRENT_ASSET', 'Land', NULL, NULL, '2022-05-16 00:08:10', '2022-05-16 00:08:10'),
(40, 1, 'CURRENT_ASSET', 'Leasehold Improvements', NULL, NULL, '2022-05-16 00:08:23', '2022-05-16 00:08:23'),
(41, 1, 'CURRENT_ASSET', 'Machinery & Equipment', NULL, NULL, '2022-05-16 00:08:35', '2022-05-16 00:08:35'),
(42, 1, 'CURRENT_ASSET', 'Other fixed assets', NULL, NULL, '2022-05-16 00:08:47', '2022-05-16 00:08:47'),
(43, 1, 'CURRENT_ASSET', 'Vehicles', NULL, NULL, '2022-05-16 00:08:59', '2022-05-16 00:08:59'),
(44, 1, 'CONTRA_ASSET', 'Accumulated Amortization of Other Assets', NULL, NULL, '2022-05-16 00:09:31', '2022-05-16 00:12:28'),
(45, 1, 'NON_CURRENT_ASSET', 'Goodwill', NULL, NULL, '2022-05-16 00:09:45', '2022-05-16 00:09:45'),
(46, 1, 'NON_CURRENT_ASSET', 'Lease Buyout', NULL, NULL, '2022-05-16 00:09:56', '2022-05-16 00:09:56'),
(47, 1, 'NON_CURRENT_ASSET', 'Licenses', NULL, NULL, '2022-05-16 00:10:08', '2022-05-16 00:10:08'),
(48, 1, 'CONTRA_ASSET', 'Organizational Costs', NULL, NULL, '2022-05-16 00:11:13', '2022-05-16 00:11:13'),
(49, 1, 'CURRENT_ASSET', 'Other Long-term Assets', NULL, NULL, '2022-05-16 00:11:38', '2022-05-16 00:11:38'),
(50, 1, 'NON_CURRENT_ASSET', 'Security Deposits', NULL, NULL, '2022-05-16 00:12:16', '2022-05-16 00:12:16'),
(51, 1, 'RECEIVABLE', 'Accounts Receivable (A/R)', NULL, NULL, '2022-05-16 00:28:03', '2022-05-16 00:28:03'),
(52, 1, 'PAYABLE', 'Accounts Payable (A/P)', NULL, NULL, '2022-05-16 00:28:22', '2022-05-16 00:28:22'),
(53, 1, 'NON_CURRENT_LIABILITY', 'Deferred Revenue', NULL, NULL, '2022-05-16 00:46:13', '2022-05-16 00:46:13'),
(54, 1, 'NON_CURRENT_LIABILITY', 'Federal Income Tax Payable', NULL, NULL, '2022-05-16 00:47:47', '2022-05-16 00:47:47'),
(55, 1, 'CURRENT_LIABILITY', 'Insurance Payable', NULL, NULL, '2022-05-16 00:48:00', '2022-05-16 00:55:21'),
(56, 1, 'NON_CURRENT_LIABILITY', 'Line of Credit', NULL, NULL, '2022-05-16 00:48:14', '2022-05-16 00:48:14'),
(57, 1, 'CURRENT_LIABILITY', 'Loan Payable', NULL, NULL, '2022-05-16 00:48:29', '2022-05-16 00:54:23'),
(58, 1, 'NON_CURRENT_LIABILITY', 'Other Current Liabilities', NULL, NULL, '2022-05-16 00:49:10', '2022-05-16 00:49:10'),
(59, 1, 'CONTROL', 'Payroll Clearing', NULL, NULL, '2022-05-16 00:49:37', '2022-05-16 00:49:37'),
(60, 1, 'CONTROL', 'Payroll Tax Payable', NULL, NULL, '2022-05-16 00:49:58', '2022-05-16 00:49:58'),
(61, 1, 'CURRENT_LIABILITY', 'Prepaid Expenses Payable', NULL, NULL, '2022-05-16 00:50:18', '2022-05-16 00:53:36'),
(62, 1, 'CURRENT_LIABILITY', 'Rents in trust - Liability', NULL, NULL, '2022-05-16 00:50:34', '2022-05-16 00:55:31'),
(63, 1, 'CONTROL', 'Sales Tax Payable', NULL, NULL, '2022-05-16 00:50:49', '2022-05-16 00:53:45'),
(64, 1, 'NON_CURRENT_LIABILITY', 'State/Local Income Tax Payable', NULL, NULL, '2022-05-16 00:51:07', '2022-05-16 00:51:07'),
(65, 1, 'NON_CURRENT_LIABILITY', 'Trust Accounts - Liabilities', NULL, NULL, '2022-05-16 00:51:29', '2022-05-16 00:51:29'),
(66, 1, 'NON_CURRENT_LIABILITY', 'Undistributed Tips', NULL, NULL, '2022-05-16 00:52:04', '2022-05-16 00:52:04'),
(67, 1, 'NON_CURRENT_LIABILITY', 'Notes Payable', NULL, NULL, '2022-05-16 00:52:35', '2022-05-16 00:52:35'),
(68, 1, 'NON_CURRENT_LIABILITY', 'Other Long Term Liabilities', NULL, NULL, '2022-05-16 00:52:48', '2022-05-16 00:52:48'),
(69, 1, 'NON_CURRENT_LIABILITY', 'Shareholder Notes Payable', NULL, NULL, '2022-05-16 00:53:07', '2022-05-16 00:53:07'),
(70, 1, 'EQUITY', 'Accumulated Adjustment', NULL, NULL, '2022-05-16 00:56:01', '2022-05-16 00:56:01'),
(71, 1, 'EQUITY', 'Common Stock', NULL, NULL, '2022-05-16 00:56:23', '2022-05-16 00:56:23'),
(72, 1, 'EQUITY', 'Estimated Taxes', NULL, NULL, '2022-05-16 00:56:37', '2022-05-16 00:56:37'),
(73, 1, 'EQUITY', 'Health Insurance Premium', NULL, NULL, '2022-05-16 00:56:54', '2022-05-16 00:56:54'),
(74, 1, 'EQUITY', 'Health Savings Account Contribution', NULL, NULL, '2022-05-16 00:57:14', '2022-05-16 00:57:14'),
(75, 1, 'EQUITY', 'Opening Balance Equity', NULL, NULL, '2022-05-16 00:57:38', '2022-05-16 00:57:38'),
(76, 1, 'EQUITY', 'Owner''s Equity', NULL, NULL, '2022-05-16 00:58:02', '2022-05-16 00:58:02'),
(77, 1, 'EQUITY', 'Paid-In Capital or Surplus', NULL, NULL, '2022-05-16 00:58:22', '2022-05-16 00:58:22'),
(78, 1, 'EQUITY', 'Partner Contributions', NULL, NULL, '2022-05-16 00:58:41', '2022-05-16 00:58:41'),
(79, 1, 'EQUITY', 'Partner Distributions', NULL, NULL, '2022-05-16 00:58:54', '2022-05-16 00:58:54'),
(80, 1, 'EQUITY', 'Partner''s Equity', NULL, NULL, '2022-05-16 00:59:14', '2022-05-16 00:59:14'),
(81, 1, 'EQUITY', 'Personal Expense', NULL, NULL, '2022-05-16 00:59:31', '2022-05-16 00:59:31'),
(82, 1, 'EQUITY', 'Personal Income', NULL, NULL, '2022-05-16 00:59:49', '2022-05-16 00:59:49'),
(83, 1, 'EQUITY', 'Preferred Stock', NULL, NULL, '2022-05-16 01:00:15', '2022-05-16 01:00:15'),
(84, 1, 'EQUITY', 'Retained Earnings', NULL, NULL, '2022-05-16 01:00:30', '2022-05-16 01:00:30'),
(85, 1, 'EQUITY', 'Treasury Stock', NULL, NULL, '2022-05-16 01:00:45', '2022-05-16 01:00:45'),
(86, 1, 'NON_OPERATING_REVENUE', 'Discounts/Refunds Given', NULL, NULL, '2022-05-16 01:01:34', '2022-05-16 01:01:34'),
(87, 1, 'NON_OPERATING_REVENUE', 'Non-Profit Income', NULL, NULL, '2022-05-16 01:01:52', '2022-05-16 01:01:52'),
(88, 1, 'OPERATING_REVENUE', 'Other Primary Income', NULL, NULL, '2022-05-16 01:02:05', '2022-05-16 01:02:05'),
(89, 1, 'OPERATING_REVENUE', 'Sales of Product Income', NULL, NULL, '2022-05-16 01:02:21', '2022-05-16 01:02:21'),
(90, 1, 'OPERATING_REVENUE', 'Service/Fee Income', NULL, NULL, '2022-05-16 01:02:35', '2022-05-16 01:02:35'),
(91, 1, 'OPERATING_REVENUE', 'Unapplied Cash Payment Income', NULL, NULL, '2022-05-16 01:02:47', '2022-05-16 01:02:47'),
(92, 1, 'NON_OPERATING_REVENUE', 'Dividend Income', NULL, NULL, '2022-05-16 01:03:15', '2022-05-16 01:03:15'),
(93, 1, 'OPERATING_REVENUE', 'Interest Earned', NULL, NULL, '2022-05-16 01:03:27', '2022-05-16 01:03:27'),
(94, 1, 'NON_OPERATING_REVENUE', 'Other Investment Income', NULL, NULL, '2022-05-16 01:03:41', '2022-05-16 01:03:41'),
(95, 1, 'NON_OPERATING_REVENUE', 'Other Miscellaneous Income', NULL, NULL, '2022-05-16 01:03:52', '2022-05-16 01:03:52'),
(96, 1, 'NON_OPERATING_REVENUE', 'Tax-Exempt Interest', NULL, NULL, '2022-05-16 01:04:09', '2022-05-16 01:04:09'),
(97, 1, 'OVERHEAD_EXPENSE', 'Cost of labor - COS', NULL, NULL, '2022-05-16 01:06:53', '2022-05-16 01:06:53'),
(98, 1, 'OPERATING_EXPENSE', 'Equipment Rental - COS', NULL, NULL, '2022-05-16 01:07:08', '2022-05-16 01:07:08'),
(99, 1, 'OTHER_EXPENSE', 'Other Costs of Services - COS', NULL, NULL, '2022-05-16 01:07:26', '2022-05-16 01:07:26'),
(100, 1, 'OPERATING_EXPENSE', 'Shipping, Freight & Delivery - COS', NULL, NULL, '2022-05-16 01:07:40', '2022-05-16 01:07:40'),
(101, 1, 'DIRECT_EXPENSE', 'Supplies & Materials - COGS', NULL, NULL, '2022-05-16 01:08:01', '2022-05-16 01:08:01'),
(102, 1, 'OPERATING_EXPENSE', 'Advertising/Promotional', NULL, NULL, '2022-05-16 01:08:27', '2022-05-16 01:08:27'),
(103, 1, 'OPERATING_EXPENSE', 'Auto', NULL, NULL, '2022-05-16 01:08:39', '2022-05-16 01:08:39'),
(104, 1, 'OTHER_EXPENSE', 'Bad Debts', NULL, NULL, '2022-05-16 01:08:58', '2022-05-16 01:08:58'),
(105, 1, 'OTHER_EXPENSE', 'Bad Debts', NULL, NULL, '2022-05-16 01:11:59', '2022-05-16 01:11:59'),
(106, 1, 'OPERATING_EXPENSE', 'Bank Charges', NULL, NULL, '2022-05-16 01:12:15', '2022-05-16 01:12:15'),
(107, 1, 'OTHER_EXPENSE', 'Charitable Contributions', NULL, NULL, '2022-05-16 01:12:44', '2022-05-16 01:12:44'),
(108, 1, 'OPERATING_EXPENSE', 'Communication', NULL, NULL, '2022-05-16 01:12:55', '2022-05-16 01:12:55'),
(109, 1, 'OVERHEAD_EXPENSE', 'Cost of Labor', NULL, NULL, '2022-05-16 01:13:08', '2022-05-16 01:13:08'),
(110, 1, 'DIRECT_EXPENSE', 'Dues & subscriptions', NULL, NULL, '2022-05-16 01:13:33', '2022-05-16 01:13:33'),
(111, 1, 'OTHER_EXPENSE', 'Entertainment', NULL, NULL, '2022-05-16 01:13:57', '2022-05-16 01:13:57'),
(112, 1, 'OTHER_EXPENSE', 'Entertainment Meals', NULL, NULL, '2022-05-16 01:14:36', '2022-05-16 01:14:36'),
(113, 1, 'OPERATING_EXPENSE', 'Equipment Rental', NULL, NULL, '2022-05-16 01:14:54', '2022-05-16 01:14:54'),
(114, 1, 'OVERHEAD_EXPENSE', 'Finance costs', NULL, NULL, '2022-05-16 01:15:15', '2022-05-16 01:15:15'),
(115, 1, 'OTHER_EXPENSE', 'Insurance', NULL, NULL, '2022-05-16 01:15:35', '2022-05-16 01:15:35'),
(116, 1, 'OTHER_EXPENSE', 'Interest Paid', NULL, NULL, '2022-05-16 01:16:28', '2022-05-16 01:16:28'),
(117, 1, 'OTHER_EXPENSE', 'Legal & Professional Fees', NULL, NULL, '2022-05-16 01:16:40', '2022-05-16 01:16:40'),
(118, 1, 'OPERATING_EXPENSE', 'Office/General Administrative Expenses', NULL, NULL, '2022-05-16 01:17:11', '2022-05-16 01:17:11'),
(119, 1, 'OTHER_EXPENSE', 'Other Business Expenses', NULL, NULL, '2022-05-16 01:17:25', '2022-05-16 01:17:25'),
(120, 1, 'OTHER_EXPENSE', 'Other Miscellaneous Service Cost', NULL, NULL, '2022-05-16 01:17:39', '2022-05-16 01:17:39'),
(121, 1, 'OVERHEAD_EXPENSE', 'Payroll Expenses', NULL, NULL, '2022-05-16 01:17:59', '2022-05-16 01:17:59'),
(122, 1, 'OVERHEAD_EXPENSE', 'Payroll Tax Expenses', NULL, NULL, '2022-05-16 01:18:20', '2022-05-16 01:18:20'),
(123, 1, 'OVERHEAD_EXPENSE', 'Payroll Wage Expenses', NULL, NULL, '2022-05-16 01:19:17', '2022-05-16 01:19:17'),
(124, 1, 'OTHER_EXPENSE', 'Promotional Meals', NULL, NULL, '2022-05-16 01:19:31', '2022-05-16 01:19:31'),
(125, 1, 'OPERATING_EXPENSE', 'Rent or Lease of Buildings', NULL, NULL, '2022-05-16 01:19:42', '2022-05-16 01:19:42'),
(126, 1, 'OPERATING_EXPENSE', 'Repair & Maintenance', NULL, NULL, '2022-05-16 01:19:58', '2022-05-16 01:19:58'),
(127, 1, 'OPERATING_EXPENSE', 'Shipping, Freight & Delivery', NULL, NULL, '2022-05-16 01:20:13', '2022-05-16 01:20:13'),
(128, 1, 'OPERATING_EXPENSE', 'Supplies & Materials', NULL, NULL, '2022-05-16 01:20:31', '2022-05-16 01:20:31'),
(129, 1, 'OVERHEAD_EXPENSE', 'Taxes Paid', NULL, NULL, '2022-05-16 01:20:43', '2022-05-16 01:20:43'),
(130, 1, 'OTHER_EXPENSE', 'Travel', NULL, NULL, '2022-05-16 01:20:56', '2022-05-16 01:20:56'),
(131, 1, 'OTHER_EXPENSE', 'Amortization', NULL, NULL, '2022-05-16 01:21:23', '2022-05-16 01:21:23'),
(132, 1, 'OTHER_EXPENSE', 'Depreciation', NULL, NULL, '2022-05-16 01:21:38', '2022-05-16 01:21:38'),
(133, 1, 'OTHER_EXPENSE', 'Exchange Gain or Loss', NULL, NULL, '2022-05-16 01:21:53', '2022-05-16 01:21:53'),
(134, 1, 'OTHER_EXPENSE', 'Gas And Fuel', NULL, NULL, '2022-05-16 01:22:17', '2022-05-16 01:22:17'),
(135, 1, 'OTHER_EXPENSE', 'Home Office', NULL, NULL, '2022-05-16 01:22:28', '2022-05-16 01:22:28'),
(136, 1, 'OTHER_EXPENSE', 'Homeowner Rental Insurance', NULL, NULL, '2022-05-16 01:22:40', '2022-05-16 01:22:40'),
(137, 1, 'OTHER_EXPENSE', 'Mortgage Interest Home Office', NULL, NULL, '2022-05-16 01:22:54', '2022-05-16 01:22:54'),
(138, 1, 'OTHER_EXPENSE', 'Other Home Office Expenses', NULL, NULL, '2022-05-16 01:23:06', '2022-05-16 01:23:06'),
(139, 1, 'OTHER_EXPENSE', 'Other Miscellaneous Expense', NULL, NULL, '2022-05-16 01:23:18', '2022-05-16 01:23:18'),
(140, 1, 'OTHER_EXPENSE', 'Other Vehicle Expenses', NULL, NULL, '2022-05-16 01:23:31', '2022-05-16 01:23:31'),
(141, 1, 'OTHER_EXPENSE', 'Mortgage Interest Home Office', NULL, NULL, '2022-05-16 01:23:46', '2022-05-16 01:23:46'),
(142, 1, 'OTHER_EXPENSE', 'Other Home Office Expenses', NULL, NULL, '2022-05-16 01:23:57', '2022-05-16 01:23:57'),
(143, 1, 'OTHER_EXPENSE', 'Other Miscellaneous Expense', NULL, NULL, '2022-05-16 01:24:08', '2022-05-16 01:24:08'),
(144, 1, 'OTHER_EXPENSE', 'Other Vehicle Expenses', NULL, NULL, '2022-05-16 01:24:28', '2022-05-16 01:24:28'),
(145, 1, 'OTHER_EXPENSE', 'Parking and Tolls', NULL, NULL, '2022-05-16 01:24:39', '2022-05-16 01:24:39'),
(146, 1, 'OTHER_EXPENSE', 'Penalties & Settlements', NULL, NULL, '2022-05-16 01:24:51', '2022-05-16 01:24:51'),
(147, 1, 'OTHER_EXPENSE', 'Property Tax Home Office', NULL, NULL, '2022-05-16 01:25:01', '2022-05-16 01:25:01'),
(148, 1, 'OTHER_EXPENSE', 'Rent and Lease Home Office', NULL, NULL, '2022-05-16 01:25:13', '2022-05-16 01:25:13'),
(149, 1, 'OTHER_EXPENSE', 'Repairs and Maintenance Home Office', NULL, NULL, '2022-05-16 01:25:24', '2022-05-16 01:25:24'),
(150, 1, 'OTHER_EXPENSE', 'Utilities Home Office', NULL, NULL, '2022-05-16 01:25:35', '2022-05-16 01:25:35'),
(151, 1, 'OTHER_EXPENSE', 'Vehicle', NULL, NULL, '2022-05-16 01:25:49', '2022-05-16 01:25:49'),
(152, 1, 'OTHER_EXPENSE', 'Vehicle Insurance', NULL, NULL, '2022-05-16 01:26:13', '2022-05-16 01:26:13'),
(153, 1, 'OTHER_EXPENSE', 'Vehicle Lease', NULL, NULL, '2022-05-16 01:26:25', '2022-05-16 01:26:25'),
(154, 1, 'OTHER_EXPENSE', 'Vehicle Loan', NULL, NULL, '2022-05-16 01:26:36', '2022-05-16 01:26:36'),
(155, 1, 'OTHER_EXPENSE', 'Vehicle Loan Interest', NULL, NULL, '2022-05-16 01:26:46', '2022-05-16 01:26:46'),
(156, 1, 'OTHER_EXPENSE', 'Vehicle Registration', NULL, NULL, '2022-05-16 01:26:56', '2022-05-16 01:26:56'),
(157, 1, 'OTHER_EXPENSE', 'Vehicle Repairs', NULL, NULL, '2022-05-16 01:27:06', '2022-05-16 01:27:06'),
(158, 1, 'OTHER_EXPENSE', 'Wash and Road Services', NULL, NULL, '2022-05-16 01:27:30', '2022-05-16 01:27:30');