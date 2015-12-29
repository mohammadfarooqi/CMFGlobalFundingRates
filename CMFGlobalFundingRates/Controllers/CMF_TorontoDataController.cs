﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMFGlobalFundingRates.Models;

namespace CMFGlobalFundingRates.Controllers
{
    [RoutePrefix("api/CMF_TorontoData")]
    public class CMF_TorontoDataController : ApiController
    {
        private Model1Container db = new Model1Container();

        //[Route("api/CMF_TorontoData")]
        [Route("")]
        [HttpGet]
        public IEnumerable<CMF_Toronto> GetAllRows()
        {
            return db.CMF_Toronto;
        }

        //[Route("api/CMF_TorontoData/Edit")]
        [Route("Edit/{id}")]
        [HttpPut]
        public IHttpActionResult Edit(int id, [FromBody]Property tempProp)
        {
            var row = db.CMF_Toronto.FirstOrDefault(p => p.Id == id);

            if (row == null)
        	{
                return NotFound();
	        }
            else
            {
                switch (tempProp.propertyName.ToLower())
                {
                    case "currency":
                        row.Currency = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "product":
                        row.Product = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "on_repo":
                        row.ON_Repo = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "onemonth_fixed":
                        row.OneMonth_Fixed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "twomonth_fixed":
                        row.TwoMonth_Fixed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "threemonth_fixed":
                        row.ThreeMonth_Fixed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "twelvemonth_fixed":
                        row.TwelveMonth_Fixed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    default:
                        return NotFound();
                }
            }

            return Ok(row);
        }

        //public IHttpActionResult GetProduct(int id)
        //{
        //    var product = products.FirstOrDefault((p) => p.Id == id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(product);
        //}
    }
}
