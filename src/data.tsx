import { faker } from '@faker-js/faker';

export const data = [

{ id: "1", name: faker.person.fullName(), desc: faker.company.catchPhrase()},
{ id: "2", name: faker.person.fullName(), desc: faker.company.catchPhrase()},
{ id: "3",
  name: faker.person.fullName(), desc: faker.company.catchPhrase(),
    children: [
      { id: "c1", name: faker.person.fullName(), desc: faker.company.catchPhrase()},
      { id: "c2", name: faker.person.fullName(), desc: faker.company.catchPhrase()},
      { id: "c3", name: faker.person.fullName(), desc: faker.company.catchPhrase(),
        children: [
          {
            id: "d111",
            name: faker.person.fullName(), desc: faker.company.catchPhrase(),
            children: [
              { id: 'e1111',
              name: faker.person.fullName(), desc: faker.company.catchPhrase(),
              children: [
                {
                  id: 'f1111',
                  name: faker.person.fullName(), desc: faker.company.catchPhrase()
                }
              ]
            }
          ]
        }
      ]
    }
  ]
},
{
  id: "4",
  name: faker.person.fullName(), desc: faker.company.catchPhrase(),
  children: [
    { id: "d1", name: faker.person.fullName(), desc: faker.company.catchPhrase()},
    { id: "d2", name: faker.person.fullName(), desc: faker.company.catchPhrase()},
    { id: "d3", name: faker.person.fullName(), desc: faker.company.catchPhrase() }
  ]
}
];

export const imageData = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAAklEQVR4AewaftIAAAMVSURBVMXBb2iUdQDA8e89z3Pbs3vuNje8rW3d2n9Jss2zcqEkGTWmDOc06EURNLCICIpeSC9yLwp625veCc2y1VIxbGmhDZKFSIG0zt2fmS3Zzd3d5s3ds/v3PM/PgYVH3OQ6X9znYxNCUAoSRdKDofrIt989aWUyCkVQKEA6PK9kYosaUA04AHXx/E9bY+M/eMtq3RWypt0CkoAOLDnaWrOy5rC4D4UChEeOV4Y/H/UCA0A30IkQNUIIm2/ozUOAD5gGfgNObPni6HyltzvNfcjDw8Osx8pm5WtHPupfvDDxlrmSeA0htiGEByFcCKEANoSQEMKFEB6E6EKIPQnfdLXi1Ja1TR0R1qGwjtTsjbr5r7/ZvTTx88FMLNYDNLA+DdAAN9Ci+wPqzbFTVcIwz9Tu758kD4U8ktf/qoqd/XHr3NFjh4BtgIv/5/Hly79qVjJZZt9YM1fp7Q7LmpYhh0Qe0fFzHbOffPoCsANQAYt7BGACJiAAA7AAwV0CMIDmlSlfb+Cdw4N6IFRlpTPkksivA9gMXAGuAFHuEsAqMAPcAFLA78ACkAFMIAH4gRnAZer6K8H33m9cujBhJ4dCfkFHe+to49CrEdZEz5xtiv9y6WlgO3D6oRcHpyzD6IlPXtrneWPo45tjp9y6P9AHdAKfeV4fCqnNTVl9OqCFj31pT82Fl4yVhI0cCnk4Nz86Izudf9cN7ouyRipXN6iNDVeBP4Dv6w4OzOqBkDMx5XvO3d93HiFk3R9cANqA0boDAxH1EU9aDwRlK5kqZ01Fa4tFDoU8anbvWiaHe29v3L239yJwkX/ogRD/qn/5pRhwkv/QNnWa7R9+sEoeEiUiUSISJSJRIgoFEIZhE6YlARJgAjZhGBIPQKEA4ZHjD0fHz3UDjwGTQG32Vnyn7HBQLIUCuLq23F69dl1ZOHn6WWA74ACSjva2E0CaIkgUoPIJ73L1Mzv+BPxAGXBbbfJMVu/aOWaz29MUQaFAkqpeLW+oHwZagOjGvucjze++naJICgXa0POU0fXVSByYAiyposLkAdwBFaAw4OOQEugAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAAAklEQVR4AewaftIAAAG6SURBVL3BTWsTQQCA4XdmJzSpTQ0pKME0it8HW0Q9eRK9eKqeVDwItuCf8RZYxJ9QPImH2l4sBT9o9VJt/WhisVWRqrGxxiS7OzNecphQxQjrPo+w1pIkhcsYGS7Mn7VbWzkcqRMn50Q+v0EMFC5jvGDm/rhZXzuCwysW17x8foMYKLoJ4ChwnG5ZYqL4PcF/IkmY4h/Y73WpV1f7gJK3d98nkcvVbaMhdGUlBZRkcbgmh4ZqttUSuvJGoU1RFgo/5K7dn+mQ9MgGgYqWlwebfvlA0y9P6OrKQcJQ6Wol2/TLpaZfvqaXnh8jCj3z4f1A6/atPU2/fCV69vQUDkWPwrnZ0WBm+gJwESgAD8P5J63g3t0x4BJQAN5Gi4sf23cmx2wQXAaGgZvAFB2KHgTTUzdMfVPazW8jwH5ABbMPJmi3G6ZWGwEOAanw8aOrCHHOfP0yChwG+oA0DkUPoqUX54EUkKFDv351BvCAfjp0tXIasMAAf6DozSDbZdluB38hSZgkYZKESRImSZgkYZKEKboZYAGoEZ93OBQuIbTcmfP52egnJiKTWcehcHmeTV8ff4nWkrikMxGOXwayoH12lMckAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAAAklEQVR4AewaftIAAALGSURBVL3BOUxTYQDA8f/39esFbYEqV4sQFQGVICZ4xvuKRIlG4uCiiWEgDg4aE11c3EzU2RCvyWMwKvEYJAwKGjVR8aCAikpJQ7FCgGqhvPdM7GCifaUy8PsJwzCYSZIZpkhT/3BMhkbG7YALsAIC0ICYEGJ0YX6mnmGzGExBkaYLT4K2sy29JcBqoABQwAjwwWqRj1oOLx+r8rs1pqBIw/HbXdtvvR6om9SN5YAHsAEC0ICfmqENHbr+7vaJbfObd1TmdpGCIoXw6ISnqa1v852O8N7gcGwtUEQShoHxKjjiamrv88Q1vXn3kvznmFCYCA7HnPfeDpada+1tiMX1VUAO5gRQ/TDwzanpxqQ309q7el5ORElh8BeJidbuSOGRm50bY3F9E5BDespbuyObjt4MrIjFdQtJSMyVAfWAlf9TBuwBrCQhMecFKgDJ//ECCwFJEhJzdiALECQXA8b5lx3IAgRJKKbJn+3ojmt6PDw64QNcQAZgYQqSaTpZW3qmcU1xA3AaaAOipEFhbhQIAj5A8ocODEUuXbYtHvg491Q46taEvHh+Ud3VUMasUqAU+AFoJKEwFwKeArsAyR86EI6+D7iyQh1Fy2CDLmT+oCM79N3hDmVWlHeVr9oStikRJwmFiQKP/XNNcdb9l8GRGk03fICNBA0IAU6gDFgvDX1d3Zf2fuBafqXj+oK1xS8wITGxtWJ2//l9lQ+ynequFGIA0EmYBD4DbmA2CQLwCaW8QikbKUhSKPE6B5sba04vneO5AgRIMIAo4AI8JOjA46KGA/fnNDZ0kIIiBYdVxqv87q/Htsy90dTW96GlK1IF5AGPgFxAAX3CYunxH9z/PHdn7TO7r3CMFBRp2FmZ92Z8Uv/kzbC2AyVA56KclXm5w75PgCEsKlC4b2/I7vdNMAVFmuqrC6L11QU9QA+/VfUzDZIZ9gu90ei9EuElBwAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAAAklEQVR4AewaftIAAAIvSURBVL3BTW8UZQAA4GfevgutFCNUTNrIh8kmTWM8GKM3jxw0nuTQgwfPHPxFJvwAoomaeDMeJCQeBMSmYUthu3x0SWkBbcLs7myn42EOszuZC5d9nqQoCrMUNfivf/9c+qr/Hk6r9JHiAlpIkIfD48O4mT3CKhaUcrx6+8tPd1srSwMTogYvd/5e2+vc/ByXVH7DM3yNBQRkc4/H3beuHV7HFSwrDdCZXzv/c2tladeEqNkn+AarKgV6+M60DdzFOtpKKW7jT+yaEDVLEBBUEiQIpgUkCAhKAUGDYMaiZgd4gESljz1sIiJBjm38iy6OlVJ0MVATNfsHERdUbsrtJaPiGhYRMEqGRQ9d/IJzSkPcx4Ga6A3MPRqb//W1KUeFNxE1W8MXaKuMk6x4El7k62ghQY4OtnAZF5VSbGAT+yZEzZbxEVZV/lL6zLQTWMKHaCulOMYpNcGMBTMWNbuLH/CByg308T0WEJDhIR7gJ6woDXAP+2qiBnPb2YsTfwy6OFJ5Fg7y5+hgEQEj9HCIHl4rDbGDoZqoQdzKzpz8Pb2ISyrbyNHGAgIyFDiN81hWGmCAeTVRs4+xjlWVDD1cNW0Dt3AFbaUUt3EDT0wIZiyYsajZHu5hrPIYu7iDiAQ5OniJLQyVUmwhVRM1iO8s3mm9/+4YKyq3sI+IU0iQ4Ske4jrOKo2wk5xsPVcTNVi6+tX2mW8v9xBVRjjGUyRIUOAII/yIOaUCR/Hs4kjN//FdtNqQKY9AAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAAAklEQVR4AewaftIAAANlSURBVL3BT0xbdQDA8e/7vX8t0EKbaQozCEjHQtS4OCeiBLcsyDKXON2iJxMP3jzowWhiTDAc5ODR6IS4xYMHXczcmMGgMqZGBDL+uZWCCEmxHZQFRlv6aB/tE0OThsHanvh8JMuy2EsKBfi5b6ZsYTHqAcrYyRJCSrS21E25XXaDPBQK8M13E/WDw/NNQC07pRRFRJ1OW1djQ+Wc21VkkoNCYV4GXgEq2cXGRtr88KNe/wfvHYudOf1oiBwUCiMAAQh2J1JpS7Isi3wEe0xQmDAQYXcpIAJEgCR5CApQUqwN2nRlGkgCScAAokAciAFTjhJ9RtPkCHnIbW1t5HPo8Yql2FrS4ZsMFwOzwHXgWyAAyIoifu9ob+1/rrHqrq4p5CIoQE/vVMX4xO0qYBXoBAJACOgHrqXT1rHvu32P+KeWislDkEMkmpAuX/Vpl7p9LdMzdzwV5c6xk60Hfyuyq+ts8tbum2luqr6eTlvJ/l9nn7905Zb3xmhQIQeFHJaW1rSPP+mvicfNE2530UxzU/XlN994yhgZC1pxw6Tx6croiRfqQvP/rnYFg5HXrvb4FxVFhJ48tH+R+xDk9gDwLrBx9vRjf7791rO3uEedd9+dC+fOXHy4siwEHAGayEFwHwODgQfbO/oaEolUA/Cjrst/2G1qinvIskiXlGiGENJXgDUwGDja3tF3IJHYEOxCIWNhMeq58sPkKcANqJP+cOnIWLAWsJ1sPThlmmnReX7oxXjcPBKLJQ8DkYmbC890nh/yAd3NTdV/SUKKTvrDjb9c++cdt8seUlXZAmJVlS5fy3FvL5sUMkK3ow99em7gfWA/oLMlCQRfOlWfGBye937eNfw6cJaM0fEQo+Ohm6oqz3194dWh5RUjMekPH1heiR/+4sshMpaPNtdcbDnu7WWTIMsO1AA6WRpQDdiBKqCenZxAI1AMOAEn27kBDxmCPSbYYwpZMWAEUAGJLWnAAFaBIDAKWGw3D0wDCWAOuAHoZKWAWTIUMjRNDpV7HJ8BxYBgywYQ1nU54HDogXKPIw48wXaLqir3qIpYK3Xafir3OBYAF1kJd1nR32RIlmXxP9NMySt3DTsgARJbLCBVVmpPJM0U8XhSBTS2S4FkuF32tGGYmrFuqoBMlqVrillaaltn038ZLUcgaBHlzAAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAAAklEQVR4AewaftIAAARjSURBVL3Ba0yVZQDA8f/7nOdwDucmHBSEEBFYoqBUyuYlZq7NrSKW80Oj9SHnVmtz09ZF62srm7OtttbcnHb54OZy2QelVlaKmAkJeWUaIBeBM33hAOfynsv7vk9uuEFnB+VTv5+mlOL/JJmnLj3pmkjZjnWF7mTLUKw0Zqog4AISQmP4+SWecNDlMHkEyUMkLKX1TqWdlqLku9tR/1DMNByCsc+uTW7RE1Y1EAAmpdC6Ak7RXe53DgVdIlzqlSZzkDzEcMyU28/eXRw37XcUoBStXfq9XkuxG6gEnNxn2sr6oGOsC/hya7nv1IdrgzpzEMyhddQI7GkfWx8z7YOWomHbMt/Artq8YUvxCrAYyAEEIACnpVhpKd4+M2rs2ts+VpawlCALQRanhw3n0d7oquvh1HZb0QDES71yoGqB0wRqgFxA4798wAo9YTW2hozmz69N+AejpiCDIIu2kFF8dtRoAJoAL3AXmAQkEAAE01LAqND4o36Rq6XEI08DkXDSfvrrW5GVI3HTSwZJdmuABiDINJ9hqtxY2o4CKcAAbCAEtDk07dDOmgVXT/THcloGrXVuh7Y5krY3A6NAhFkk2dUCq5mx+lhfpMYptN+AM0APYAKXgIumrZzvt48/Hknbjk3Fuf3blnk/feuCng/oZJBktxBYxIy8cNJ+YUVeTnp3bd5xIBewz4WMxI9D8RIFO0fipgTErclU+Pht1Z1W/AIIMkhmsRX8OhL39EXSbsDBDAnUlXgcvVvLvft5oDDX4U9Yqvr3EaOJBwaiZnIgat4BCoAvgClmEcxiK6WdHIz7bk2mx4FhwGSGJ2qqvP5I2mXaSuO+jUXuyI7lgRCQABTTXEAlsAtYSgbBLFJo6uP6Av3ZktzDwCFABxQPXNKT3jfP6xV6wpbMMIBeIMk8SDJ4pWY7hTa1och9cstjnkv7LocrkpbyAIZpq6GRmKnt7Rh7ySW0AJCcTNtTwB7gE6AakIAJhIEUGSTZFU+k7KU9U+m0rbjwYpk3Ohw33Z16sjxlq+aLdxNrAD8wXuxxtL1eHTj4fX+sQ09YBUAxYAAdwCQZJNn5boRTa26EU5XA+RX5zkEFhZ0kG4BGIAg4gDslHjmws2ZB/Fwo0a0nrLVAIaADpwCdDJIspNA6pdAqTFu9BjTvvzwhyE4xQwAaENPgH6fQTmhwjwyCLHYs9yffqA60AQeAccAiuxgwBgjgKSAInC/1ygNHNhWO1wZzLDJIsij2SPu5JZ5RU6mfvroZyUnZqglYBeQzIwV0D8XMK/v+Dm8KGaYHaKkrcP34apXvr7pgTkoKTZFBMofKgDPRXOnvu2dY3yRtFb45kV7fM5WuAhYybbTC7/y5yOO4eqwv+uTGIndrIEe01y9ydzaWeSPMQfIQRbkO66P6Ah04cvjm1MmjPdGVwBNMu9K01Ht9Q5F74t2LuvFeXf4PVQFnmkeQzNPLFb6xxjLvn0An01JeqaVdDs3+9pmiUNAlbObhX5XX5+ZGg7LOAAAAAElFTkSuQmCC"
]
