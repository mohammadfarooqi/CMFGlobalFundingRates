using CMFGlobalFundingRates.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CMFGlobalFundingRates.Controllers
{
    [RoutePrefix("api/CMF_SingaporeData")]
    public class CMF_SingaporeDataController : ApiController
    {
        private Model1Container db = new Model1Container();

        [Route("")]
        [HttpGet]
        public IEnumerable<CMF_Singapore> GetAllRows()
        {
            return db.CMF_Singapore;
        }

        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult GetById(int id)
        {
            return Ok(db.CMF_Singapore.FirstOrDefault(p => p.Id == id));
        }

        [Route("Edit/{id}")]
        [HttpPut]
        public IHttpActionResult Edit(int id, [FromBody]Property tempProp)
        {
            var row = db.CMF_Singapore.FirstOrDefault(p => p.Id == id);

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
                    case "fourmonth_fixed":
                        row.FourMonth_Fixed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "fivemonth_fixed":
                        row.FiveMonth_Fixed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "sixmonth_fixed":
                        row.SixMonth_Fixed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    default:
                        return NotFound();
                }
            }

            return Ok(row);
        }

        [Route("Add")]
        [HttpPost]
        public IHttpActionResult Add([FromBody]CMF_Singapore temp)
        {
            var row = db.CMF_Singapore.Add(temp);

            if (row == null)
            {
                return NotFound();
            }
            else
            {
                db.SaveChanges();
            }

            return Ok(row);
        }
    }
}
