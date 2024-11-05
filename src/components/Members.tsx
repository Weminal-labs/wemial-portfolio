'use client'

import { SECTION_IDS } from '@/constants'
import Image from 'next/image'

const Members = () => {
  return (
    <section id={SECTION_IDS.OUR_TEAM} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Dedicated Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F317f5e16-74a7-4a31-b5a3-fe6c832c8ac1%2Fphapdev-notion-avatar.png?id=435cedd9-7489-4b28-88a3-19683e7e0910&table=block&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=250&userId=&cache=v2" 
              alt="Member 1"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Luong Van Phap</h3>
              <p className="text-gray-600 text-sm">Leader Weball</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F609a5543-e9f4-45dc-be44-c0b6d3899546%2Fnotion-avatar-1723018881419.png?id=67912e02-e0e2-4411-bca8-6959a08e0931&table=block&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=250&userId=&cache=v2" 
              alt="Member 2"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Pich Tran</h3>
              <p className="text-gray-600 text-sm">Smart Contract Developer</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F94f152fc-e757-4a76-83ea-1b8c93e82a94%2Favt_dorahck.png?id=fa9c46e8-6d8d-4a11-8ab0-2ec8d98df65a&table=block&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=250&userId=&cache=v2" 
              alt="Member 3"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Cao Dang Tinh</h3>
              <p className="text-gray-600 text-sm">Ai Developer </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F1ce9546f-f677-4458-8bdc-7f5410211039%2Favt-notion.png?table=block&id=0c6e6409-80d2-4b47-b11f-add34f999bc2&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=720&userId=&cache=v2" 
              alt="Member 4"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Mai Vu Xuan Vuong</h3>
              <p className="text-gray-600 text-sm">Full Stack Developer</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F05c1ea40-ab73-4a95-946f-29dfee9803ba%2Fimage.png?table=block&id=d0bcb269-eabe-44db-8103-26ee85657215&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=2000&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Pham Huynh Anh (Saitama Coder)</h3>
              <p className="text-gray-600 text-sm">DeepoolCoder</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F12c74d5b-13cf-45e6-9a21-e250d3c0103a%2FUntitled.png?table=block&id=f534c4e5-85a5-4e38-99bb-009aca6281e5&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=2000&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Vu Chau Anh Tuan (Kay)</h3>
              <p className="text-gray-600 text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2Fe3fed5bd-f2b3-49ba-b3ad-b96f8f2b23f1%2Fnotion-avatar-1723093607415.png?table=block&id=2200c3b7-ac34-4402-88c3-ed83f09ef07b&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=2000&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Vo Nguyen Phu Qui</h3>
              <p className="text-gray-600 text-sm">Move Developer</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2Fd22e6042-1ace-465a-bfc6-c11ad1f12959%2Fnotion-avatar-1723024894283.png?table=block&id=b5b3a7bd-594f-4234-83e5-d4faa0bf5e7a&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=580&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Nguyen Anh Tuan (Tuna)</h3>
              <p className="text-gray-600 text-sm">FrontEnd Developer</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F1cbddb9f-7a98-486e-b0b0-754b1926f108%2Fmy_profile.png?id=1e47796a-428b-4252-850e-ffcc85e62db6&table=block&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=250&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Phan Hoang Vinh Hien (Harry)</h3>
              <p className="text-gray-600 text-sm">Founder</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F521be69c-46d2-4e71-b3ec-c3d041327e1d%2Fnotion-avatar-1723024343582.png?id=3204c494-f43d-424c-baa0-568928692ba1&table=block&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=250&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Le Khac Thanh Tung</h3>
              <p className="text-gray-600 text-sm">Co-founder</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F9f43e807-f91f-4f70-936b-8d8b456b9301%2Fnotion-avatar-1723024795101.png?table=block&id=599f3a08-d670-481a-9b6f-bc58d09c0ed3&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=2000&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Lam Thanh Phuc</h3>
              <p className="text-gray-600 text-sm">Backend Developer</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2Fce73084b-ca4a-47e4-bc73-b7d4d474cb06%2FUntitled.png?table=block&id=43bcd81b-1b34-4364-a8db-9d2d9c163810&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=2000&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Tu Nhat Phuong (FromSunNews)</h3>
              <p className="text-gray-600 text-sm">Frontend Developer</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://harryph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf0f4344-aa59-48dc-938b-a5736604ea95%2F89eb4513-9846-406e-92ab-0ed7293f4de8%2Fnotion-avatar-1723038466786.png?id=c81dda49-e151-4099-9c4a-4d67deef40db&table=block&spaceId=df0f4344-aa59-48dc-938b-a5736604ea95&width=250&userId=&cache=v2" 
              alt="Member 5"
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">Hoang Phu Loc</h3>
              <p className="text-gray-600 text-sm">Fullstack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members