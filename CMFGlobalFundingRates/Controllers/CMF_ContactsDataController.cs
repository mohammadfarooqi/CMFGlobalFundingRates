using CMFGlobalFundingRates.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CMFGlobalFundingRates.Controllers
{
    [RoutePrefix("api/CMF_ContactsData")]
    public class CMF_ContactsDataController : ApiController
    {
        private Model1Container db = new Model1Container();

        [Route("")]
        [HttpGet]
        public IEnumerable<CMF_Contacts> GetAllRows()
        {
            return db.CMF_Contacts;
        }

        //public IEnumerable<CMF_Contacts> GetContacts(string location)
        //{
        //    return db.CMF_Contacts.Where(c => c.Location == location);
        //}

        [Route("{location}")]
        [HttpGet]
        public IEnumerable<CMF_Contacts> GetContacts(string location)
        {
            return db.CMF_Contacts.Where(c => c.Location == location);
        }

        [Route("Edit/{id}")]
        [HttpPut]
        public IHttpActionResult Edit(int id, [FromBody]Property tempProp)
        {
            var row = db.CMF_Contacts.FirstOrDefault(p => p.Id == id);

            if (row == null)
            {
                return NotFound();
            }
            else
            {
                switch (tempProp.propertyName.ToLower())
                {
                    case "name":
                        row.Name = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "phone":
                        row.Phone = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    case "email":
                        row.Email = tempProp.propertyValue;
                        db.SaveChanges();
                        break;
                    default:
                        return NotFound();
                }
            }

            return Ok(row);
        }
    }
}
