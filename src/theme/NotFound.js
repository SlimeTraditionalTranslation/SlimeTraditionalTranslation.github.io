/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import {FcBrokenLink} from "react-icons/fc";
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: '頁面未找到',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  喔不 我們找不到這個頁面
                </Translate>
                <FcBrokenLink />
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  無法找到你正在連結至的頁面.
                </Translate>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  請加入Discord並提供此連結
                  來讓我們知道這個連結已損壞!
                </Translate>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
