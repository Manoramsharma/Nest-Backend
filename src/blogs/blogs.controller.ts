import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogsService } from './blogs.service';
import { Blog } from './interfaces/blog.interface';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Blog> {
    return this.blogsService.findOne(id);
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogsService.create(createBlogDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Blog> {
    return this.blogsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateBlogDto: CreateBlogDto, @Param('id') id): Promise<Blog> {
    return this.blogsService.update(id, updateBlogDto);
  }
}
