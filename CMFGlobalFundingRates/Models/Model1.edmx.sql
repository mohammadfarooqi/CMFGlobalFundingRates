
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/03/2015 19:41:49
-- Generated from EDMX file: C:\Users\mfarooqi\documents\visual studio 2013\Projects\CMFGlobalFundingRates\CMFGlobalFundingRates\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [CMFGlobalFundingRates];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'CMF_Toronto'
CREATE TABLE [dbo].[CMF_Toronto] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Currency] nvarchar(max)  NOT NULL,
    [Product] nvarchar(max)  NOT NULL,
    [ON_Repo] nvarchar(max)  NOT NULL,
    [OneMonth_Fixed] nvarchar(max)  NOT NULL,
    [TwoMonth_Fixed] nvarchar(max)  NOT NULL,
    [ThreeMonth_Fixed] nvarchar(max)  NOT NULL,
    [TwelveMonth_Fixed] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'CMF_Contacts'
CREATE TABLE [dbo].[CMF_Contacts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Phone] nvarchar(max)  NOT NULL,
    [Email] nvarchar(max)  NOT NULL,
    [Location] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'CMF_NewYork'
CREATE TABLE [dbo].[CMF_NewYork] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Currency] nvarchar(max)  NOT NULL,
    [Product] nvarchar(max)  NOT NULL,
    [ON_Repo] nvarchar(max)  NOT NULL,
    [OneMonth_Fixed] nvarchar(max)  NOT NULL,
    [OneMonth_Floating] nvarchar(max)  NOT NULL,
    [ThreeMonth_Fixed] nvarchar(max)  NOT NULL,
    [ThreeMonth_Floating] nvarchar(max)  NOT NULL,
    [SixMonth_Fixed] nvarchar(max)  NOT NULL,
    [SixMonth_Floating] nvarchar(max)  NOT NULL,
    [TwelveMonth_Fixed] nvarchar(max)  NOT NULL,
    [TwelveMonth_Floating] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'CMF_London_1'
CREATE TABLE [dbo].[CMF_London_1] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Currency] nvarchar(max)  NOT NULL,
    [Product] nvarchar(max)  NOT NULL,
    [ON_Repo] nvarchar(max)  NOT NULL,
    [OneMonth_Fixed] nvarchar(max)  NOT NULL,
    [ThreeMonth_Fied] nvarchar(max)  NOT NULL,
    [SixMonth_Fixed] nvarchar(max)  NOT NULL,
    [TwelveMonth_Fixed] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'CMF_London_2'
CREATE TABLE [dbo].[CMF_London_2] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Currency] nvarchar(max)  NOT NULL,
    [Product] nvarchar(max)  NOT NULL,
    [ON] nvarchar(max)  NOT NULL,
    [OneMonth_Indexed] nvarchar(max)  NOT NULL,
    [OneMonth_FixedValue] nvarchar(max)  NOT NULL,
    [ThreeMonth_Indexed] nvarchar(max)  NOT NULL,
    [ThreeMonth_FixedValue] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'CMF_Singapore'
CREATE TABLE [dbo].[CMF_Singapore] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Currency] nvarchar(max)  NOT NULL,
    [Product] nvarchar(max)  NOT NULL,
    [ON_Repo] nvarchar(max)  NOT NULL,
    [OneMonth_Fixed] nvarchar(max)  NOT NULL,
    [TwoMonth_Fixed] nvarchar(max)  NOT NULL,
    [ThreeMonth_Fixed] nvarchar(max)  NOT NULL,
    [FourMonth_Fixed] nvarchar(max)  NOT NULL,
    [FiveMonth_Fixed] nvarchar(max)  NOT NULL,
    [SixMonth_Fixed] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'CMF_Table_LastModifiedBy'
CREATE TABLE [dbo].[CMF_Table_LastModifiedBy] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [TableName] nvarchar(max)  NOT NULL,
    [UserName] nvarchar(max)  NOT NULL,
    [DateTime] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'CMF_Toronto'
ALTER TABLE [dbo].[CMF_Toronto]
ADD CONSTRAINT [PK_CMF_Toronto]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'CMF_Contacts'
ALTER TABLE [dbo].[CMF_Contacts]
ADD CONSTRAINT [PK_CMF_Contacts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'CMF_NewYork'
ALTER TABLE [dbo].[CMF_NewYork]
ADD CONSTRAINT [PK_CMF_NewYork]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'CMF_London_1'
ALTER TABLE [dbo].[CMF_London_1]
ADD CONSTRAINT [PK_CMF_London_1]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'CMF_London_2'
ALTER TABLE [dbo].[CMF_London_2]
ADD CONSTRAINT [PK_CMF_London_2]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'CMF_Singapore'
ALTER TABLE [dbo].[CMF_Singapore]
ADD CONSTRAINT [PK_CMF_Singapore]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'CMF_Table_LastModifiedBy'
ALTER TABLE [dbo].[CMF_Table_LastModifiedBy]
ADD CONSTRAINT [PK_CMF_Table_LastModifiedBy]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------