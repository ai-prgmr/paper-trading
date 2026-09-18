export interface VariantData {
  id: string
  title: string
  description: string
  gsm: string
  gsmStartNumeric: number
  moq: string
  badgeText: string
  image: string
  usage: string
  color: string
  type: string
  format: "Sheet/Roll" | "Roll Only"
}

export const duplexVariants: VariantData[] = [
  {
    id: "coated-duplex-board",
    title: "Coated Duplex Board (HWC / LWC)",
    description: "High-performance multi-layered duplex board with a high-brightness clay-coated white surface and sturdy grey back. Specifically engineered for high-speed multi-color offset printing, consumer packaging, and rigid cartons.",
    gsm: "150 - 450 GSM",
    gsmStartNumeric: 150,
    moq: "Minimum Order Quantity: 1500 Kg",
    badgeText: "GSM: 150 - 450",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwZSA02nG5EZd7ONi0PQGL8dSRJzUyFP8KrYoGkOEU598JJrE9tCKOAY6gwcnabxBJDnjtWt1_IFxEBTl6zT_gk4JicjuyHGALhUCkfj-_YD3NXfjv5P982T0zb7t6MOQpVV0UmltG0xrPqgesRM_BiWZwhG5PBIf68SLAnmO5XvggB_NR9cPlQSopk-asXFbfCzhIE1km3jfNNQc0CotiwvAwL-qnkokiZalOMqj46pt8rHiTe4sO",
    usage: "Printing & Packaging",
    color: "White Front / Grey Back",
    type: "Sheet/Roll",
    format: "Sheet/Roll"
  },
  {
    id: "uncoated-duplex-board",
    title: "Uncoated Duplex Paper Board",
    description: "Optimized for cost-sensitive packaging where direct print contact isn't required. Provides excellent stiffness and folding resistance.",
    gsm: "180 - 500 GSM",
    gsmStartNumeric: 180,
    moq: "Minimum Order Quantity: 1200 Kg",
    badgeText: "GSM: 180 - 500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWCYb3fy5pqHPq-sKsMkfYs6W9a-Ud-jJRwz0bdLmwIOmaFvqphY_hnGzJO33NaSl1ohBjXDQuGaxCtUuJLJuKYuzHtr6ToSAzn5OSXx8iYwoBZgoyiScdqp0ghrYhIPDdbyxj4Abry88cIsgSDGosr3COToPKs_nUZTHryXQ3pxE5nONuAL4pXF2-IzP0d-_kUlAhf3gNpeoZfavFRkzO9tb-K4SfCiQocdrZOmqtGsg81Bcr-J-f",
    usage: "Box Making",
    color: "Grey Back",
    type: "Sheet/Roll",
    format: "Sheet/Roll"
  },
  {
    id: "hwc-grey-back-duplex-board",
    title: "HWC Grey Back Duplex Board",
    description: "High Weight Coated variant offers exceptional smoothness for high-speed multi-color offset printing. Ideal for pharmaceuticals and FMCG boxes.",
    gsm: "180 - 400 GSM",
    gsmStartNumeric: 180,
    moq: "Minimum Order Quantity: 1500 Kg",
    badgeText: "GSM: 180 - 400",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBev8BHSWd9pze6QXhYgESqzDGYHpBsUwN_2fc6rXKk7YHi0kaAC-uDEFpACTi9FO1-VWO__YiBWURLeFpABRzG1hYrq7BTUSp7yDYpxTKB5GLOZTv3sINWHuy-E0Ud12n8aBxt-uUE4lZtriBTRpzfI8bLRMrIqsW3frGWPXnSbj-qiaOYk9152vCXeiNJUqVSSeGBOfnvx2-2fkFLrvCTVN9no1zpvvnkkXamt4Qn0yaHqbTwAUdF",
    usage: "High end multicolour mono cartons printing and packaging",
    color: "Grey Back",
    type: "Sheet/Roll",
    format: "Sheet/Roll"
  },
  {
    id: "lwc-duplex-paper-board",
    title: "LWC Duplex Paper Board",
    description: "Light Weight Coated board designed for high-volume consumer goods. Excellent bulk-to-weight ratio for shipping efficiency.",
    gsm: "200 - 350 GSM",
    gsmStartNumeric: 200,
    moq: "Minimum Order Quantity: 2000 Kg",
    badgeText: "GSM: 200 - 350",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtHhVKaM5aKt503n_qN_9saFoTFialBpFdZZR5p56NT1CvjemqbKwPZcjXSO5Qguej_LqyHAyqspY9G_SBs3EOONHu4-hyaEXf2LtSn43wkjCW4CpUwOWVvRx4aHRHiGbd-sJOR1tmhyufBq37xu0cO84wsgVhd2YiECk_iK41nwS0-UnDzDdYAKRqIZ82LYTgdXsOsP7BQ-ctW7jnvF34uHpQyMJ3DKRSixErdzNXENIucEpuhs9P",
    usage: "Packaging",
    color: "Grey Back",
    type: "Sheet/Roll",
    format: "Sheet/Roll"
  },
  {
    id: "duplex-board-paper-roll",
    title: "Duplex Board Paper Roll",
    description: "Continuous rolls for high-capacity rotary printing and automated packaging lines. Available in custom widths to minimize waste.",
    gsm: "180 - 450 GSM",
    gsmStartNumeric: 180,
    moq: "Min Load: 5000 Kg (One Truck)",
    badgeText: "Bulk Logistics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfzpk0KqK2XjoDcLBSBg__wTiGvadu3_m6sOGiZpqsQK1lRdHEOArI83J5uOYLS3c-FsJbxjLLzSAyRVYkODq_smgd8vit6HDj_lRVQwwlFyZFRSEneKSkaz9pvWxbOF3jOI8OwS85q7Q7brME-ADTzQhZNONw8YG46HSzQzrkjDPWhWj4BGT1U_qtiK41WNoWiPyTx9fmwGqwFdt2d4TpPufvjLnFpjWb8pAecw74PGO1K8WapAQz",
    usage: "Multicolour mono cartons",
    color: "Grey Back",
    type: "Roll Only",
    format: "Roll Only"
  },
  {
    id: "white-duplex-board-paper-roll",
    title: "White Duplex Board Paper Roll",
    description: "Premium White back duplex board rolls. Used for luxury packaging and branded retail boxes where interior aesthetics are critical.",
    gsm: "250 - 450 GSM",
    gsmStartNumeric: 250,
    moq: "Minimum Order Quantity: 3000 Kg",
    badgeText: "Premium White",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVu1U1u_3z8aj3oXYEGWI1VEV_F8F3ExAlk42RmN6iWFdxoCw83L1Dm79QjwiBazQGRWSoAwMNVTAur6UFOC5sC7EXdnbe6vsHYllW1tFRN5e-3wdKqs5YbFdRL2DWnpJzse-wG-lq9YvfWtjKy5VnFh32GAqWyZ-JwHkXhaj42LQ56x-8PHX4V67PpR5XQuMT5hklfoX6XRW3XV3CjcPu0XjXXaJh-MI8Lvq6GU6SnMLN5ohym6OH",
    usage: "Luxury Box",
    color: "White Back",
    type: "Roll Only",
    format: "Roll Only"
  }
]
