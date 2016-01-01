using CMFGlobalFundingRates.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CMFGlobalFundingRates.Controllers
{
    [RoutePrefix("api/CMF_London2Data")]
    public class CMF_London2DataController : ApiController
    {
        private Model1Container db = new Model1Container();

        [Route("")]
        [HttpGet]
        public IEnumerable<CMF_London_2> GetAllRows()
        {
            return db.CMF_London_2;
        }

        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult GetById(int id)
        {
            return Ok(db.CMF_London_2.FirstOrDefault(p => p.Id == id));
        }

        [Route("Edit/{id}")]
        [HttpPut]
        public IHttpActionResult Edit(int id, [FromBody]Property tempProp)
        {
            var row = db.CMF_London_2.FirstOrDefault(p => p.Id == id);

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
                    case "on":
                        row.ON = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "onemonth_indexed":
                        row.OneMonth_Indexed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "onemonth_fixedvalue":
                        row.OneMonth_FixedValue = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "threemonth_indexed":
                        row.ThreeMonth_Indexed = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "threemonth_fixedvalue":
                        row.ThreeMonth_FixedValue = tempProp.propertyValue;
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
        public IHttpActionResult Add([FromBody]CMF_London_2 temp)
        {
            var row = db.CMF_London_2.Add(temp);

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

        [Route("{id}")]
        [HttpDelete]
        public IHttpActionResult DeleteById(int id)
        {
            var del = db.CMF_London_2.FirstOrDefault(c => c.Id == id);
            db.CMF_London_2.Remove(del);
            db.SaveChanges();

            return Ok();
        }
    }
}
