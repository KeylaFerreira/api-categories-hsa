'use strict'

const Joi = require('joi')

module.exports = Joi.object(
  {
    id: Joi.string(),
    name: Joi.string(),
    relevance: Joi.number(),
    subcategories: Joi.array().items(Joi.object(
      {
        id: Joi.string(),
        name: Joi.string(),
        relevance: Joi.number(),
        subcategories: Joi.array()
          .items(Joi.object(
            {
              id: Joi.string(),
              name: Joi.string(),
              relevance: Joi.number(),
              iconImageUrl: Joi.string(),
              subcategories: Joi.array().items(Joi.object(
                {
                  id: Joi.string(),
                  name: Joi.string(),
                  relevance: Joi.number(),
                  largeImageUrl: Joi.string(),
                  mediumImageUrl: Joi.string(),
                  smallImageUrl: Joi.string(),
                  subcategories: Joi.array().items(Joi.object(
                    {
                      id: Joi.string(),
                      name: Joi.string(),
                      relevance: Joi.number()
                    })
                    .meta({ className: 'Subcategory Level 4' })
                    .unknown(true)
                    .options({ abortEarly: false }))
                })
                .meta({ className: 'Subcategory Level 3' })
                .unknown(true)
                .options({ abortEarly: false }))
            })
            .meta({ className: 'Subcategory Level 2' })
            .unknown(true)
            .options({ abortEarly: false }))
      })
      .meta({ className: 'Categories' })
      .unknown(true)
      .options({ abortEarly: false }))
  })
  .meta({ className: 'Category Three' })
  .unknown(true)
  .options({ abortEarly: false })
