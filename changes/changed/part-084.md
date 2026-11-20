# Changed — Bundle Modifications Report (Part 084 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `84 / 132` (**370** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 083](part-083.md) · [Part 085 →](part-085.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (937 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 122. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L2041)

```diff
-         return `a list of ${Eq.includes(" or ")?`(${Eq})`:Eq}`
+         return `a list of ${ub.includes(" or ")?`(${ub})`:ub}`
```

#### 123. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L2046` → after: `L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L2046) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L2046)

```diff
-       return `{ ${lq.slice(0,10).map((qq=>`${qq.name}${qq.flags&vq().SymbolFlags.Optional?"?":""}`)).join(", ")}${lq.length>10?", ...":""} }`
+       return `{ ${Ob.slice(0,10).map((bb=>`${bb.name}${bb.flags&nb().SymbolFlags.Optional?"?":""}`)).join(", ")}${Ob.length>10?", ...":""} }`
```

#### 124. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L2074-L2075` → after: `L2074-L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L2074-L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L2074-L2075) · [Before (L2074-L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L2074-L2075)

```diff
-               Aq = null !== (Oq = null === Yq || void 0 === Yq ? void 0 : Yq.getParameters()) && void 0 !== Oq ? Oq : [],
-               cq = new Set((null !== (mq = null === Yq || void 0 === Yq || null === (xq = Yq.getDeclaration()) || void 0 === xq ? void 0 : xq.typeParameters) && void 0 !== mq ? mq : []).map((qq => qq.name.text)));
+               Yb = null !== (Gb = null === Bb || void 0 === Bb ? void 0 : Bb.getParameters()) && void 0 !== Gb ? Gb : [],
+               Sb = new Set((null !== (Ub = null === Bb || void 0 === Bb || null === (Lb = Bb.getDeclaration()) || void 0 === Lb ? void 0 : Lb.typeParameters) && void 0 !== Ub ? Ub : []).map((bb => bb.name.text)));
```

#### 125. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L2079` → after: `L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L2079) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L2079)

```diff
-                 xq = mq && vq().isParameter(mq) ? mq : void 0;
+                 Lb = Ub && nb().isParameter(Ub) ? Ub : void 0;
```

#### 126. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L2084` → after: `L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L2084) · [Before (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L2084)

```diff
-                 gq.add(`${lq.expression.getText(qq)} can't take null as ${Aq[Yq].name} (value ${Yq+1}): ${mq}, or it throws when that line runs.`)
+                 hb.add(`${Ob.expression.getText(bb)} can't take null as ${Yb[Bb].name} (value ${Bb+1}): ${Ub}, or it throws when that line runs.`)
```

#### 127. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L2123` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L2123) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L2123)

```diff
-           return vq().isPropertyAccessExpression(qq) && vq().isIdentifier(qq.expression) && "CONFIG" === qq.expression.text && null !== (Eq = gq.get(qq.name.text)) && void 0 !== Eq ? Eq : qq.getText()
+           return nb().isPropertyAccessExpression(bb) && nb().isIdentifier(bb.expression) && "CONFIG" === bb.expression.text && null !== (ub = hb.get(bb.name.text)) && void 0 !== ub ? ub : bb.getText()
```

#### 128. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L2125)

```diff
-         mq = qq => qq && (vq().isStringLiteral(qq) || vq().isNoSubstitutionTemplateLiteral(qq)) ? qq.text : qq && vq().isObjectLiteralExpression(qq) ? qq.properties.flatMap((qq => vq().isPropertyAssignment(qq) && (vq().isIdentifier(qq.name) || vq().isStringLiteral(qq.name)) ? [`$ … [truncated]
+         Ub = bb => bb && (nb().isStringLiteral(bb) || nb().isNoSubstitutionTemplateLiteral(bb)) ? bb.text : bb && nb().isObjectLiteralExpression(bb) ? bb.properties.flatMap((bb => nb().isPropertyAssignment(bb) && (nb().isIdentifier(bb.name) || nb().isStringLiteral(bb.name)) ? [`$ … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5030)

```diff
-       } = jg(`(${qq})`), Yq = Eq.statements[0];
+       } = Ah(`(${bb})`), Bb = ub.statements[0];
```

#### 130. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5068` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5068) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5068)

```diff
-       }(Eq.startsWith("{") ? Eq : `{${Eq}}`);
+       }(ub.startsWith("{") ? ub : `{${ub}}`);
```

#### 131. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5079` → after: `L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5079) · [Before (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5079)

```diff
-         if (lq && Oq > 0) lq[1] += `\n${Eq}`;
+         if (Ob && Gb > 0) Ob[1] += `\n${ub}`;
```

#### 132. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5086)

```diff
-         Oq = Math.max(0, Oq + (null !== (xq = null === (Aq = gq.match(/[[{(]/g)) || void 0 === Aq ? void 0 : Aq.length) && void 0 !== xq ? xq : 0) - (null !== (cq = null === (uq = gq.match(/[\]})]/g)) || void 0 === uq ? void 0 : uq.length) && void 0 !== cq ? cq : 0))
+         Gb = Math.max(0, Gb + (null !== (Lb = null === (Yb = hb.match(/[[{(]/g)) || void 0 === Yb ? void 0 : Yb.length) && void 0 !== Lb ? Lb : 0) - (null !== (Sb = null === (ab = hb.match(/[\]})]/g)) || void 0 === ab ? void 0 : ab.length) && void 0 !== Sb ? Sb : 0))
```

#### 133. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5100` → after: `L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5100) · [Before (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5100)

```diff
-         problem: `${qq.key} must be a plain value like ${qq.value}, not ${Eq}`
+         problem: `${bb.key} must be a plain value like ${bb.value}, not ${ub}`
```

#### 134. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5103` → after: `L5103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5103) · [Before (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5103)

```diff
-         problem: `${qq.key} must be a number, like ${qq.value}`
+         problem: `${bb.key} must be a number, like ${bb.value}`
```

#### 135. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5106` → after: `L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5106) · [Before (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5106)

```diff
-         problem: `${qq.key} must be true or false`
+         problem: `${bb.key} must be true or false`
```

#### 136. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5111` → after: `L5111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5111) · [Before (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5111)

```diff
-         problem: `${qq.key} must be a position [x, y, z], like ${"null"===qq.value?"[0, 10, 0]":qq.value}`
+         problem: `${bb.key} must be a position [x, y, z], like ${"null"===bb.value?"[0, 10, 0]":bb.value}`
```

#### 137. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5114` → after: `L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5114) · [Before (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5114)

```diff
-         problem: `${qq.key} must be a list in [ ], like ${qq.value}`
+         problem: `${bb.key} must be a list in [ ], like ${bb.value}`
```

#### 138. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5142` → after: `L5142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5142) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5142)

```diff
-               mq = Oq ? Bq.get(null !== (Eq = AY(Oq.initializer)) && void 0 !== Eq ? Eq : "") : void 0;
+               Ub = Gb ? Hb.get(null !== (ub = YB(Gb.initializer)) && void 0 !== ub ? ub : "") : void 0;
```

#### 139. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5151` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5151) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5151)

```diff
-           const qq = null !== (Nq = AY(aq)) && void 0 !== Nq ? Nq : "",
+           const bb = null !== (Zb = YB(Xb)) && void 0 !== Zb ? Zb : "",
```

#### 140. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5155-L5157` → after: `L5155-L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5155-L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5155-L5157) · [Before (L5155-L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5155-L5157)

```diff
-             const Eq = lq.named ? `item: ${JSON.stringify(lq.item)}` : `item: ${JSON.stringify(lq.item)}, name: ${JSON.stringify(qq)}`;
-             cq.unshift(`"${qq}" isn't an item, so it is a ${lq.item}${lq.named?"":` named "${qq}"`}`), Aq = `${Aq.slice(0,lq.property.getStart()-xq)}${Eq}${Aq.slice(lq.property.getEnd()-xq)}`
-           } else null === Eq ? uq.unshift(`"${qq}"`) : Eq !== qq && (cq.unshift(`"${qq}" is "${Eq}"`), Aq = `${Aq.slice(0,aq.getStart()-xq)}${JSON.stringify(Eq)}${Aq.slice(aq.getEnd()-xq)}`)
+             const ub = Ob.named ? `item: ${JSON.stringify(Ob.item)}` : `item: ${JSON.stringify(Ob.item)}, name: ${JSON.stringify(bb)}`;
+             Sb.unshift(`"${bb}" isn't an item, so it is a ${Ob.item}${Ob.named?"":` named "${bb}"`}`), Yb = `${Yb.slice(0,Ob.property.getStart()-Lb)}${ub}${Yb.slice(Ob.property.getEnd()-Lb)}`
+           } else null === ub ? ab.unshift(`"${bb}"`) : ub !== bb && (Sb.unshift(`"${bb}" is "${ub}"`), Yb = `${Yb.slice(0,Xb.getStart()-Lb)}${JSON.stringify(ub)}${Yb.slice(Xb.getEnd()-Lb)}`)
```

#### 141. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5160)

```diff
-           problem: `${uq.join(", ")} ${1===uq.length?"item"===gq?"isn't an":"isn't a":"aren't"} ${gq} name${1===uq.length?"":"s"}, so ${qq.key} kept ${qq.value}`
+           problem: `${ab.join(", ")} ${1===ab.length?"item"===hb?"isn't an":"isn't a":"aren't"} ${hb} name${1===ab.length?"":"s"}, so ${bb.key} kept ${bb.value}`
```

#### 142. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5172` → after: `L5172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5172) · [Before (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5172)

```diff
-           problem: `${qq.key} must be text in quotes, like ${qq.value}`
+           problem: `${bb.key} must be text in quotes, like ${bb.value}`
```

#### 143. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5177` → after: `L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5177) · [Before (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5177)

```diff
-             problem: `"${Eq}" isn't ${"item"===qq.kind?"an":"a"} ${qq.kind} name, so ${qq.key} kept ${qq.value}`
+             problem: `"${ub}" isn't ${"item"===bb.kind?"an":"a"} ${bb.kind} name, so ${bb.key} kept ${bb.value}`
```

#### 144. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5181` → after: `L5181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5181) · [Before (L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5181)

```diff
-             fixed: `"${Eq}" is "${Yq}"`
+             fixed: `"${ub}" is "${Bb}"`
```

#### 145. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5211` → after: `L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5211) · [Before (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5211)

```diff
-       return null !== (Eq = WY.find((qq => aY(qq.name) === gq || aY(qq.title) === gq))) && void 0 !== Eq ? Eq : null
+       return null !== (ub = wB.find((bb => XB(bb.name) === hb || XB(bb.title) === hb))) && void 0 !== ub ? ub : null
```

#### 146. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5216` → after: `L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5216) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5216)

```diff
-       return null !== (Eq = lY.find((Eq => Eq.name === qq))) && void 0 !== Eq ? Eq : null
+       return null !== (ub = OB.find((ub => ub.name === bb))) && void 0 !== ub ? ub : null
```

#### 147. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5223` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5223) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5223)

```diff
-         return 0 === qq.length ? "" : `const CONFIG = {\n${qq.map((qq=>{var gq;return`\t${qq.key}: ${null!==(gq=Eq.get(qq.key))&&void 0!==gq?gq:qq.value}, // ${qq.about}`})).join("\n")}\n}`
+         return 0 === bb.length ? "" : `const CONFIG = {\n${bb.map((bb=>{var hb;return`\t${bb.key}: ${null!==(hb=ub.get(bb.key))&&void 0!==hb?hb:bb.value}, // ${bb.about}`})).join("\n")}\n}`
```

#### 148. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5225)

```diff
-       return `${""===gq?"":`${gq}\n\n`}${qq.code.trim()}\n`
+       return `${""===hb?"":`${hb}\n\n`}${bb.code.trim()}\n`
```

#### 149. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5235` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5235) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5235)

```diff
-             for (const qq of null !== (Oq = lq.uses) && void 0 !== Oq ? Oq : []) {
+             for (const bb of null !== (Gb = Ob.uses) && void 0 !== Gb ? Gb : []) {
```

#### 150. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5248` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5248) · [Before (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5248)

```diff
-         Yq = new RegExp(`function ${Eq.name}\\s*\\([^)]*\\)\\s*\\{`).exec(qq);
+         Bb = new RegExp(`function ${ub.name}\\s*\\([^)]*\\)\\s*\\{`).exec(bb);
```

#### 151. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5322` → after: `L5322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5322) · [Before (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5322)

```diff
-               lq.push(`${qq.name} has no setting ${xq}`);
+               Ob.push(`${bb.name} has no setting ${Lb}`);
```

#### 152. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5345` → after: `L5345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5345) · [Before (L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5345)

```diff
-           heading: "" === qq.trim() ? void 0 : `// ---- ${Eq.title} (ready-made) ----`
+           heading: "" === bb.trim() ? void 0 : `// ---- ${ub.title} (ready-made) ----`
```

#### 153. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5362` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5362) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5362)

```diff
-       return `- ${qq.name}: ${qq.summary}. Settings: ${qq.settings.map((qq=>qq.key)).join(", ")}`
+       return `- ${bb.name}: ${bb.summary}. Settings: ${bb.settings.map((bb=>bb.key)).join(", ")}`
```

#### 154. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5367` → after: `L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5367) · [Before (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5367)

```diff
-       const gq = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.trim().toLowerCase()) && void 0 !== Eq ? Eq : "",
+       const hb = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.trim().toLowerCase()) && void 0 !== ub ? ub : "",
```

#### 155. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5371` → after: `L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5371) · [Before (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5371)

```diff
-       return `${Yq?`Prefabs for ${NY.get(Yq)}:`:""===gq||"all"===gq?"Every prefab:":`There is no category ${qq}. Every prefab:`}\n${lq.length>0?lq.map(vY).join("\n"):"(none yet)"}${Oq.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${Oq.map((q … [truncated]
+       return `${Bb?`Prefabs for ${ZB.get(Bb)}:`:""===hb||"all"===hb?"Every prefab:":`There is no category ${bb}. Every prefab:`}\n${Ob.length>0?Ob.map(nB).join("\n"):"(none yet)"}${Gb.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${Gb.map((b … [truncated]
```

#### 156. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5376-L5379` → after: `L5376-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5376-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5376-L5379) · [Before (L5376-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5376-L5379)

```diff
-       const Yq = [...qq.settings, ...tY(qq)].map((qq => `- ${qq.key} (${qq.kind}, default ${qq.value}): ${qq.about}`)).join("\n"),
-         lq = null !== (gq = qq.changeable) && void 0 !== gq && gq.length ? `\nFunctions to replace by name for a game of their own:\n${qq.changeable.map((qq=>`- ${qq.name}: ${qq.about}`)).join("\n")}` : "",
-         Oq = Eq ? `\nIts code, as it goes in with the default settings:\n${jY(qq)}` : "";
-       return `${qq.name} (${qq.title}): ${qq.summary}.\nHow it plays: ${qq.howItPlays}\nSettings:\n${Yq}${lq}${qq.setup?`\nThe creator sets up: ${qq.setup}`:""}${Oq}`
+       const Bb = [...bb.settings, ...rB(bb)].map((bb => `- ${bb.key} (${bb.kind}, default ${bb.value}): ${bb.about}`)).join("\n"),
+         Ob = null !== (hb = bb.changeable) && void 0 !== hb && hb.length ? `\nFunctions to replace by name for a game of their own:\n${bb.changeable.map((bb=>`- ${bb.name}: ${bb.about}`)).join("\n")}` : "",
+         Gb = ub ? `\nIts code, as it goes in with the default settings:\n${AB(bb)}` : "";
+       return `${bb.name} (${bb.title}): ${bb.summary}.\nHow it plays: ${bb.howItPlays}\nSettings:\n${Bb}${Ob}${bb.setup?`\nThe creator sets up: ${bb.setup}`:""}${Gb}`
```

#### 157. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5387` → after: `L5387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5387) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5387)

```diff
-         Yq = ` ${qq.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
+         Bb = ` ${bb.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
```

#### 158. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5389-L5390` → after: `L5389-L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5389-L5390) · [Before (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5389-L5390)

```diff
-         const Eq = qq.keywords.map((qq => qq.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((qq => qq.includes(" ") ? Yq.includes(` ${qq} `) : gq.has(qq))),
-           lq = Math.min(...Eq.map((qq => Yq.indexOf(` ${qq} `))));
+         const ub = bb.keywords.map((bb => bb.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((bb => bb.includes(" ") ? Bb.includes(` ${bb} `) : hb.has(bb))),
+           Ob = Math.min(...ub.map((bb => Bb.indexOf(` ${bb} `))));
```

#### 159. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5426` → after: `L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5426) · [Before (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5426)

```diff
-               mq = qq => "string" === typeof qq ? qq : "boolean" === typeof qq ? String(qq) : Array.isArray(qq) ? qq.filter((qq => "string" === typeof qq)).join("\n") : void 0,
+               Ub = bb => "string" === typeof bb ? bb : "boolean" === typeof bb ? String(bb) : Array.isArray(bb) ? bb.filter((bb => "string" === typeof bb)).join("\n") : void 0,
```

#### 160. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5440` → after: `L5440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5440) · [Before (L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5440)

```diff
-             return Yq.startsWith("[") ? lq : qq
+             return Bb.startsWith("[") ? Ob : bb
```

#### 161. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5443-L5444` → after: `L5443-L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5443-L5444) · [Before (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5443-L5444)

```diff
-         Aq = null !== (Eq = null === (gq = xq.question) || void 0 === gq ? void 0 : gq.replace(/\s+/g, " ").trim()) && void 0 !== Eq ? Eq : "",
-         cq = (null !== (Yq = xq.choices) && void 0 !== Yq ? Yq : "").includes("\n") ? (null !== (lq = xq.choices) && void 0 !== lq ? lq : "").split("\n") : (null !== (Oq = xq.choices) && void 0 !== Oq ? Oq : "").split("|"),
+         Yb = null !== (ub = null === (hb = Lb.question) || void 0 === hb ? void 0 : hb.replace(/\s+/g, " ").trim()) && void 0 !== ub ? ub : "",
+         Sb = (null !== (Bb = Lb.choices) && void 0 !== Bb ? Bb : "").includes("\n") ? (null !== (Ob = Lb.choices) && void 0 !== Ob ? Ob : "").split("\n") : (null !== (Gb = Lb.choices) && void 0 !== Gb ? Gb : "").split("|"),
```

#### 162. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5467-L5470` → after: `L5467-L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5467-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5467-L5470) · [Before (L5467-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5467-L5470)

```diff
-       GY = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${pY})\s*\(|(?:${pY})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-       LY = new RegExp(`^(?:${pY})$`),
-       JY = new RegExp(String.raw`^(${pY})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-       kY = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${pY})\b|\buse_?prefab\s*\(`, "i");
+       MB = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${sB})\s*\(|(?:${sB})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       mB = new RegExp(`^(?:${sB})$`),
+       IB = new RegExp(String.raw`^(${sB})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       PB = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${sB})\b|\buse_?prefab\s*\(`, "i");
```

#### 163. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5483` → after: `L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5483) · [Before (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5483)

```diff
-           return void 0 === Eq.path ? Eq : {
+           return void 0 === ub.path ? ub : {
```

#### 164. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5487` → after: `L5487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5487) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5487)

```diff
-           return void 0 === Eq.url ? Eq : {
+           return void 0 === ub.url ? ub : {
```

#### 165. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5533-L5535` → after: `L5533-L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5533-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5533-L5535) · [Before (L5533-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5533-L5535)

```diff
-       const dq = Object.keys(gq).some(Vq.f),
-         jq = qq => null !== qq && dq && (0, Vq.f)(qq),
-         Hq = qq => jq(qq) ? `${Vq.l}${(0,Vq.h)(qq)}` : null !== Oq && void 0 !== Oq ? Oq : sY(qq),
+       const ob = Object.keys(hb).some(pb.c),
+         Ab = bb => null !== bb && ob && (0, pb.c)(bb),
+         lb = bb => Ab(bb) ? `${pb.e}${(0,pb.d)(bb)}` : null !== Gb && void 0 !== Gb ? Gb : VB(bb),
```

#### 166. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5575-L5577` → after: `L5575-L5577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5575-L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5575-L5577) · [Before (L5575-L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5575-L5577)

```diff
-               return `${gq.slice(0,Math.max(gq.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-             }(null !== Eq && void 0 !== Eq ? Eq : ""),
-             Oq = null !== (Yq = Zq.get(qq)) && void 0 !== Yq ? Yq : [];
+               return `${hb.slice(0,Math.max(hb.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== ub && void 0 !== ub ? ub : ""),
+             Gb = null !== (Bb = ib.get(bb)) && void 0 !== Bb ? Bb : [];
```

#### 167. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5579` → after: `L5579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5579) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5579)

```diff
-           ("" === lq || Oq.includes(lq) || Zq.set(qq, [...Oq, lq]), "" !== lq) && Sq.set(qq, [...null !== (mq = Sq.get(qq)) && void 0 !== mq ? mq : [], {
+           ("" === Ob || Gb.includes(Ob) || ib.set(bb, [...Gb, Ob]), "" !== Ob) && Nb.set(bb, [...null !== (Ub = Nb.get(bb)) && void 0 !== Ub ? Ub : [], {
```

#### 168. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5597` → after: `L5597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5597) · [Before (L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5597)

```diff
-               error: `There is no prefab called ${Eq}. The prefabs are: ${WY.map((qq=>qq.name)).join(", ")}.`
+               error: `There is no prefab called ${ub}. The prefabs are: ${wB.map((bb=>bb.name)).join(", ")}.`
```

#### 169. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5599` → after: `L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5599) · [Before (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5599)

```diff
-           }(null !== (lq = cq[qq]) && void 0 !== lq ? lq : "", Eq, gq, Aq);
+           }(null !== (Ob = Sb[bb]) && void 0 !== Ob ? Ob : "", ub, hb, Yb);
```

#### 170. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5605` → after: `L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5605) · [Before (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5605)

```diff
-           }), Gq(qq, null !== Yq && void 0 !== Yq ? Yq : mq.prefab.title, mq.text), Jq.push({
+           }), Mb(bb, null !== Bb && void 0 !== Bb ? Bb : Ub.prefab.title, Ub.text), Ib.push({
```

#### 171. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5611` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5611) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5611)

```diff
-             setup: null !== (Oq = mq.prefab.setup) && void 0 !== Oq ? Oq : null
+             setup: null !== (Gb = Ub.prefab.setup) && void 0 !== Gb ? Gb : null
```

#### 172. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5629` → after: `L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5629) · [Before (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5629)

```diff
-         const qq = null !== (OE = lE.get(Vq.name)) && void 0 !== OE ? OE : 0;
+         const bb = null !== (Gu = Ou.get(pb.name)) && void 0 !== Gu ? Gu : 0;
```

#### 173. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5639)

```diff
-               path: null !== (mE = null !== (xE = null !== (AE = Vq.args.path) && void 0 !== AE ? AE : Oq) && void 0 !== xE ? xE : Yq) && void 0 !== mE ? mE : void 0
+               path: null !== (Uu = null !== (Lu = null !== (Yu = pb.args.path) && void 0 !== Yu ? Yu : Gb) && void 0 !== Lu ? Lu : Bb) && void 0 !== Uu ? Uu : void 0
```

#### 174. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5650` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5650) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5650)

```diff
-           Qq = `${Eq.name}\n${JSON.stringify({...Eq.args,why:void 0})}`,
+           Cb = `${ub.name}\n${JSON.stringify({...ub.args,why:void 0})}`,
```

#### 175. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5670` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5670) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5670)

```diff
-             const qq = void 0 !== lq && "" !== lq.trim() ? Hq(lq) : void 0 === Oq ? null !== Yq && void 0 !== Yq ? Yq : "index.js" : null;
+             const bb = void 0 !== Ob && "" !== Ob.trim() ? lb(Ob) : void 0 === Gb ? null !== Bb && void 0 !== Bb ? Bb : "index.js" : null;
```

#### 176. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5674` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5674) · [Before (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5674)

```diff
-               Iq(qq, Eq.args.name, null !== (cE = Eq.args.settings) && void 0 !== cE ? cE : "", Eq.args.why)
+               cb(bb, ub.args.name, null !== (Su = ub.args.settings) && void 0 !== Su ? Su : "", ub.args.why)
```

#### 177. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5681` → after: `L5681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5681) · [Before (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5681)

```diff
-             if (0 === Xq.length) Xq = WE(null !== (uE = Eq.args.steps) && void 0 !== uE ? uE : "")
+             if (0 === Fb.length) Fb = wu(null !== (au = ub.args.steps) && void 0 !== au ? au : "")
```

#### 178. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5684` → after: `L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5684) · [Before (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5684)

```diff
-             const qq = gE(null !== (BE = Eq.args.note) && void 0 !== BE ? BE : "");
+             const bb = hu(null !== (Hu = ub.args.note) && void 0 !== Hu ? Hu : "");
```

#### 179. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5699` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5699) · [Before (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5699)

```diff
-               if (void 0 === mq || "" !== mq.trim() && !TY(RY(mq), void 0 === lq ? "" : null !== (aE = cq[Hq(lq)]) && void 0 !== aE ? aE : "")) {
+               if (void 0 === Ub || "" !== Ub.trim() && !JB(qB(Ub), void 0 === Ob ? "" : null !== (Xu = Sb[lb(Ob)]) && void 0 !== Xu ? Xu : "")) {
```

#### 180. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5701` → after: `L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5701) · [Before (L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5701)

```diff
-                 else if (void 0 !== lq && Pq(Hq(lq)) && "" !== (null !== (VE = gq[Hq(lq)]) && void 0 !== VE ? VE : "").trim()) Nq(Eq.name, Hq(lq), "unread", void 0 === mq ? void 0 : {
+                 else if (void 0 !== Ob && Wb(lb(Ob)) && "" !== (null !== (pu = hb[lb(Ob)]) && void 0 !== pu ? pu : "").trim()) Zb(ub.name, lb(Ob), "unread", void 0 === Ub ? void 0 : {
```

#### 181. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5720` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5720) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5720)

```diff
-               Oq = null === qq ? "" : null !== (jE = cq[qq]) && void 0 !== jE ? jE : "",
+               Gb = null === bb ? "" : null !== (Au = Sb[bb]) && void 0 !== Au ? Au : "",
```

#### 182. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5727-L5728` → after: `L5727-L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5727-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5727-L5728) · [Before (L5727-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5727-L5728)

```diff
-               })) || void 0 === oE ? void 0 : oE.text) && void 0 !== HE ? HE : null : "replace_function" === Eq.name ? wq(Oq, gq, mq) : eq(Oq, gq, mq);
-             null === qq || null === Bq ? Nq(Eq.name, qq, cg(Eq) ? "brokenCode" : "missingArgs") : TY(mq, Oq) ? Nq(Eq.name, qq, "placeholder") : "replace_function" === Eq.name && Pq(qq) && Dq(Oq).includes(null !== Yq && void 0 !== Yq ? Yq : "") ? (Nq(Eq.name, qq, "unread", {
+               })) || void 0 === Ku ? void 0 : Ku.text) && void 0 !== lu ? lu : null : "replace_function" === ub.name ? fb(Gb, hb, Ub) : Qb(Gb, hb, Ub);
+             null === bb || null === Hb ? Zb(ub.name, bb, Sh(ub) ? "brokenCode" : "missingArgs") : JB(Ub, Gb) ? Zb(ub.name, bb, "placeholder") : "replace_function" === ub.name && Wb(bb) && Rb(Gb).includes(null !== Bb && void 0 !== Bb ? Bb : "") ? (Zb(ub.name, bb, "unread", {
```

#### 183. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5733-L5734` → after: `L5733-L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5733-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5733-L5734) · [Before (L5733-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5733-L5734)

```diff
-             const qq = !0 === (null === (PE = jq._meta) || void 0 === PE ? void 0 : PE.appliesAtOnce) ? null !== Oq && void 0 !== Oq ? Oq : Yq : void 0 === lq ? null : Hq(lq),
-               gq = null === qq ? "" : null !== (QE = cq[qq]) && void 0 !== QE ? QE : "",
+             const bb = !0 === (null === (Wu = Ab._meta) || void 0 === Wu ? void 0 : Wu.appliesAtOnce) ? null !== Gb && void 0 !== Gb ? Gb : Bb : void 0 === Ob ? null : lb(Ob),
+               hb = null === bb ? "" : null !== (Cu = Sb[bb]) && void 0 !== Cu ? Cu : "",
```

#### 184. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5738-L5740` → after: `L5738-L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5738-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5738-L5740) · [Before (L5738-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5738-L5740)

```diff
-               aq = null !== Aq && void 0 !== Aq ? Aq : Wq,
-               Vq = null !== Wq ? zE(null !== Bq && void 0 !== Bq ? Bq : "") : null !== Bq && void 0 !== Bq ? Bq : "",
-               dq = null === aq || void 0 === xq ? Vq : Mq(gq.slice(aq.from, aq.to), fq(gq, aq, null !== Wq ? zE(xq) : xq, Vq), Tq(gq.slice(aq.to)));
+               Xb = null !== Yb && void 0 !== Yb ? Yb : wb,
+               pb = null !== wb ? eu(null !== Hb && void 0 !== Hb ? Hb : "") : null !== Hb && void 0 !== Hb ? Hb : "",
+               ob = null === Xb || void 0 === Lb ? pb : tb(hb.slice(Xb.from, Xb.to), vb(hb, Xb, null !== wb ? eu(Lb) : Lb, pb), Jb(hb.slice(Xb.to)));
```

#### 185. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5747-L5748` → after: `L5747-L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5747-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5747-L5748) · [Before (L5747-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5747-L5748)

```diff
-               const Yq = oq(qq) ? Cq(gq, aq.from, aq.to, null !== xq && void 0 !== xq ? xq : "", Vq) : null;
-               cq[qq] = null !== Yq && void 0 !== Yq ? Yq : gq.slice(0, aq.from) + dq + gq.slice(aq.to), uq.add(qq), Gq(qq, Eq.args.why, dq)
+               const Bb = Kb(bb) ? Tb(hb, Xb.from, Xb.to, null !== Lb && void 0 !== Lb ? Lb : "", pb) : null;
+               Sb[bb] = null !== Bb && void 0 !== Bb ? Bb : hb.slice(0, Xb.from) + ob + hb.slice(Xb.to), ab.add(bb), Mb(bb, ub.args.why, ob)
```

#### 186. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5758-L5759` → after: `L5758-L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5758-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5758-L5759) · [Before (L5758-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5758-L5759)

```diff
-           lq = null !== (rE = null !== Oq && void 0 !== Oq ? Oq : Yq) && void 0 !== rE ? rE : "index.js",
-           mq = null !== (vE = cq[lq]) && void 0 !== vE ? vE : "";
+           Ob = null !== (ju = null !== Gb && void 0 !== Gb ? Gb : Bb) && void 0 !== ju ? ju : "index.js",
+           Ub = null !== (nu = Sb[Ob]) && void 0 !== nu ? nu : "";
```

#### 187. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5774` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5774) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5774)

```diff
-           cq[Vq] = gY(EY(qq ? cq[Vq] : cq[Vq].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (nE = gq[Vq]) && void 0 !== nE ? nE : "");
+           Sb[pb] = hB(uB(bb ? Sb[pb] : Sb[pb].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (xu = hb[pb]) && void 0 !== xu ? xu : "");
```

#### 188. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5779` → after: `L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5779) · [Before (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5779)

```diff
-         const qq = dE(wY(XY(cq[Vq])), oq(Vq) ? lq : [], null !== (hE = gq[Vq]) && void 0 !== hE ? hE : "");
+         const bb = ou(fB(FB(Sb[pb])), Kb(pb) ? Ob : [], null !== (Du = hb[pb]) && void 0 !== Du ? Du : "");
```

#### 189. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5783-L5785` → after: `L5783-L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5783-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5783-L5785) · [Before (L5783-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5783-L5785)

```diff
-         const qq = Vq.problems.length > 0 ? ` Kept as it was: ${Vq.problems.join("; ")}.` : "",
-           Eq = Vq.fixed.length > 0 ? ` Names changed to real ones: ${Vq.fixed.join(", ")}.` : "";
-         aq += `\n\nThis uses the ready-made ${Vq.title}.${Eq}${qq}${Vq.setup?` ${Vq.setup}`:""}`
+         const bb = pb.problems.length > 0 ? ` Kept as it was: ${pb.problems.join("; ")}.` : "",
+           ub = pb.fixed.length > 0 ? ` Names changed to real ones: ${pb.fixed.join(", ")}.` : "";
+         Xb += `\n\nThis uses the ready-made ${pb.title}.${ub}${bb}${pb.setup?` ${pb.setup}`:""}`
```

#### 190. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5791` → after: `L5791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5791) · [Before (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5791)

```diff
-         of bq) aq += `\n\nI renamed \`${Vq}\` to \`${iq}\`, the name World Code calls.`;
+         of zb) Xb += `\n\nI renamed \`${pb}\` to \`${gb}\`, the name World Code calls.`;
```

#### 191. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5795` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5795) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5795)

```diff
-         const qq = null !== (ZE = gq[Vq]) && void 0 !== ZE ? ZE : "";
+         const bb = null !== (iu = hb[pb]) && void 0 !== iu ? iu : "";
```

#### 192. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5886` → after: `L5886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5886) · [Before (L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5886)

```diff
-       const Eq = null === qq.path ? qq.tool : `${qq.tool} ${qq.path}`;
+       const ub = null === bb.path ? bb.tool : `${bb.tool} ${bb.path}`;
```

#### 193. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5888-L5893` → after: `L5888-L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5888-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5888-L5893) · [Before (L5888-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5888-L5893)

```diff
-       if ("prefab" === qq.reason) return `${Eq}: ${null!==(gq=qq.detail)&&void 0!==gq?gq:"the prefab couldn't go in."} Nothing changed.`;
-       if ("missingArgs" === qq.reason) return `${Eq}: the call was missing an argument it needs, so nothing changed.`;
-       if ("placeholder" === qq.reason) return "write_file" === qq.tool ? `${Eq}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${Eq}: the code had a line standing in for code left out ("// ... exi … [truncated]
-       if ("unread" === qq.reason) return `${Eq}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==qq.path&&(0,Vq.f)(qq.path)?"view_world_code":"view_file"} shows.`;
-       if ("brokenCode" === qq.reason) return `${Eq}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-       return `${Eq}: search matched nothing in the file, so nothing changed. ${qq.closest?`The closest lines (${qq.closest.line}-${qq.closest.lastLine}) are:\n${qq.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${qq.functions.length>0?`, or use replace … [truncated]
+       if ("prefab" === bb.reason) return `${ub}: ${null!==(hb=bb.detail)&&void 0!==hb?hb:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === bb.reason) return `${ub}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === bb.reason) return "write_file" === bb.tool ? `${ub}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${ub}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === bb.reason) return `${ub}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==bb.path&&(0,pb.c)(bb.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === bb.reason) return `${ub}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${ub}: search matched nothing in the file, so nothing changed. ${bb.closest?`The closest lines (${bb.closest.line}-${bb.closest.lastLine}) are:\n${bb.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${bb.functions.length>0?`, or use replace … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5910-L5911` → after: `L5910-L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5910-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5910-L5911) · [Before (L5910-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5910-L5911)

```diff
-       xl = qq => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
-       Al = qq => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       LO = bb => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
+       YO = bb => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5921` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5921) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5921)

```diff
-     const Bl = `You looked at World Code: its files are below, their paths starting ${Vq.l}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${V … [truncated]
+     const HO = `You looked at World Code: its files are below, their paths starting ${pb.e}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${p … [truncated]
```

#### 196. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5932-L5933` → after: `L5932-L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5932-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5932-L5933) · [Before (L5932-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5932-L5933)

```diff
-       const Nq = Eq ? Vq.c : "index.js",
-         aq = Eq ? `${Vq.l}index.js` : Nq,
+       const Zb = ub ? pb.b : "index.js",
+         Xb = ub ? `${pb.e}index.js` : Zb,
```

#### 197. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5937-L5942` → after: `L5937-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5937-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5937-L5942) · [Before (L5937-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5937-L5942)

```diff
-         Pq = Hq("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${dq("edit … [truncated]
-         Qq = Hq("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         yq = Hq("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         tq = Hq("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${dq("edit_fil … [truncated]
-         rq = Eq ? `2. Then give the whole new code with a write_file call, exactly like this:\n${dq("write_file",{path:Nq,why:"what the change does",content:cl.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${dq("write_fi … [truncated]
-         vq = Eq ? "" : ` If there is no code yet, write it in ${Nq}.`,
+         Wb = lb("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${ob("edit … [truncated]
+         Cb = lb("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         db = lb("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         rb = lb("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${ob("edit_fil … [truncated]
+         jb = ub ? `2. Then give the whole new code with a write_file call, exactly like this:\n${ob("write_file",{path:Zb,why:"what the change does",content:SO.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${ob("write_fi … [truncated]
+         nb = ub ? "" : ` If there is no code yet, write it in ${Zb}.`,
```

#### 198. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5944` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5944) · [Before (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5944)

```diff
-         nq = Eq ? Aq ? `\n${Bl}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         xb = ub ? Yb ? `\n${HO}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5948-L5952` → after: `L5948-L5952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5948-L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5948-L5952) · [Before (L5948-L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5948-L5952)

```diff
-         fq = Hq("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         Mq = Hq("plan") ? `\n${"deepseek"===gq?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         Tq = null !== (lq = Bq[0]) && void 0 !== lq ? lq : VY("parkour"),
-         zq = (null !== (Oq = null === Tq || void 0 === Tq ? void 0 : Tq.settings) && void 0 !== Oq ? Oq : []).slice(0, 2).map((qq => `${qq.key}: ${qq.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         vb = lb("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         tb = lb("plan") ? `\n${"deepseek"===hb?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         Jb = null !== (Ob = Hb[0]) && void 0 !== Ob ? Ob : pB("parkour"),
+         eb = (null !== (Gb = null === Jb || void 0 === Jb ? void 0 : Jb.settings) && void 0 !== Gb ? Gb : []).slice(0, 2).map((bb => `${bb.key}: ${bb.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5954` → after: `L5954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5954) · [Before (L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5954)

```diff
-         Yq ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         Bb ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5957` → after: `L5957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5957) · [Before (L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5957)

```diff
-         Oq.join("\n")
+         Gb.join("\n")
```

#### 202. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5959` → after: `L5959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5959) · [Before (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5959)

```diff
-       `}(qq,dq,cq)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(bb,ob,Sb)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5962-L5963` → after: `L5962-L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5962-L5963) · [Before (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5962-L5963)

```diff
-     function Nl(qq, Eq, gq) {
-       return Object.keys(qq).filter((qq => !gq || !(0, Vq.f)(qq))).sort(((qq, gq) => (gq === Eq ? 1 : 0) - (qq === Eq ? 1 : 0) || qq.localeCompare(gq)))
+     function ZO(bb, ub, hb) {
+       return Object.keys(bb).filter((bb => !hb || !(0, pb.c)(bb))).sort(((bb, hb) => (hb === ub ? 1 : 0) - (bb === ub ? 1 : 0) || bb.localeCompare(hb)))
```

#### 204. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5966-L5969` → after: `L5966-L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5966-L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5966-L5969) · [Before (L5966-L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5966-L5969)

```diff
-     function al(qq, Eq, gq) {
-       var Yq;
-       const lq = Nl(qq, Eq, gq);
-       return null !== Eq && lq.includes(Eq) ? Eq : null !== (Yq = lq[0]) && void 0 !== Yq ? Yq : null
+     function XO(bb, ub, hb) {
+       var Bb;
+       const Ob = ZO(bb, ub, hb);
+       return null !== ub && Ob.includes(ub) ? ub : null !== (Bb = Ob[0]) && void 0 !== Bb ? Bb : null
```

#### 205. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5972-L5973` → after: `L5972-L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5972-L5973) · [Before (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5972-L5973)

```diff
-     function Vl(qq) {
-       const Eq = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${qq.includes("index.ts")?"index.ts":"index.js"}`;
+     function pO(bb) {
+       const ub = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${bb.includes("index.ts")?"index.ts":"index.js"}`;
```

#### 206. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5977-L5978` → after: `L5977-L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5977-L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5977-L5978) · [Before (L5977-L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5977-L5978)

```diff
-     function dl(qq, Eq) {
-       var gq;
+     function oO(bb, ub) {
+       var hb;
```

#### 207. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5980-L5985` → after: `L5980-L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5980-L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5980-L5985) · [Before (L5980-L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5980-L5985)

```diff
-         files: Yq,
-         activePath: lq
-       } = qq, Oq = !0 === qq.codeBlock, mq = Nl(Yq, lq, Oq);
-       if (0 === mq.length || mq.every((qq => "" === Yq[qq].trim()))) return Oq ? "There is no code yet: the code block is empty." : mq.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const xq = null !== (gq = al(Yq, lq, Oq)) && void 0 !== gq ? gq : mq[0];
-       return `${mq.length>1?`Their files:\n${mq.map((qq=>{const Eq=""===(gq=Yq[qq])?0:gq.replace(/\n$/,"").split("\n").length;var gq;return`- ${qq}: ${1===Eq?"1 line":`${Eq} lines`}${qq===xq?" (open in the editor, its code below)":""}`})).join("\n")}\n${Oq?"":Vl(mq)}\n`:""}${func … [truncated]
+         files: Bb,
+         activePath: Ob
+       } = bb, Gb = !0 === bb.codeBlock, Ub = ZO(Bb, Ob, Gb);
+       if (0 === Ub.length || Ub.every((bb => "" === Bb[bb].trim()))) return Gb ? "There is no code yet: the code block is empty." : Ub.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const Lb = null !== (hb = XO(Bb, Ob, Gb)) && void 0 !== hb ? hb : Ub[0];
+       return `${Ub.length>1?`Their files:\n${Ub.map((bb=>{const ub=""===(hb=Bb[bb])?0:hb.replace(/\n$/,"").split("\n").length;var hb;return`- ${bb}: ${1===ub?"1 line":`${ub} lines`}${bb===Lb?" (open in the editor, its code below)":""}`})).join("\n")}\n${Gb?"":pO(Ub)}\n`:""}${func … [truncated]
```

#### 208. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5988-L5989` → after: `L5988-L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5988-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5988-L5989) · [Before (L5988-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5988-L5989)

```diff
-     function jl(qq) {
-       var Eq, gq, Yq, lq, Oq, mq;
+     function AO(bb) {
+       var ub, hb, Bb, Ob, Gb, Ub;
```

#### 209. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L5991-L6022` → after: `L5991-L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L5991-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L5991-L6022) · [Before (L5991-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L5991-L6022)

```diff
-         codeBlock: !0 === qq.codeBlock,
-         hasCode: "" !== (null !== (Eq = qq.files[null !== (gq = qq.activePath) && void 0 !== gq ? gq : ""]) && void 0 !== Eq ? Eq : "").trim(),
-         hasBigFile: Object.values(qq.files).some((qq => qq.length > 6e3)),
-         wantsExport: eY(qq.request),
-         canAsk: !0 === qq.canAsk,
-         canRemember: !0 === (null === (Yq = qq.about) || void 0 === Yq ? void 0 : Yq.canRemember),
-         isBigRequest: BE(qq.request),
-         canLookUp: !0 === qq.canLookUp,
-         hasOtherFiles: Object.keys(qq.files).length > 1,
-         hasErrors: qq.errors.length > 0,
-         canChangeWorldCode: !0 === qq.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(qq.files).some(Vq.f),
-         offersPrefabs: (lq = qq.request, Oq = qq.files, mq = Hl(qq), "never" !== mq.offer && ("always" === mq.offer || bY(lq, 1).length > 0 || BE(lq) || !Ol(Oq) && ll.test(lq))),
-         listsPrefabs: Hl(qq).categories,
-         looksUpDocs: !0 === qq.looksUpDocs
-       }
- ... (16 more removed lines; see GitHub link above)
+         codeBlock: !0 === bb.codeBlock,
+         hasCode: "" !== (null !== (ub = bb.files[null !== (hb = bb.activePath) && void 0 !== hb ? hb : ""]) && void 0 !== ub ? ub : "").trim(),
+         hasBigFile: Object.values(bb.files).some((bb => bb.length > 6e3)),
+         wantsExport: QB(bb.request),
+         canAsk: !0 === bb.canAsk,
+         canRemember: !0 === (null === (Bb = bb.about) || void 0 === Bb ? void 0 : Bb.canRemember),
+         isBigRequest: Hu(bb.request),
+         canLookUp: !0 === bb.canLookUp,
+         hasOtherFiles: Object.keys(bb.files).length > 1,
+         hasErrors: bb.errors.length > 0,
+         canChangeWorldCode: !0 === bb.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(bb.files).some(pb.c),
+         offersPrefabs: (Ob = bb.request, Gb = bb.files, Ub = lO(bb), "never" !== Ub.offer && ("always" === Ub.offer || zB(Ob, 1).length > 0 || Hu(Ob) || !GO(Gb) && OO.test(Ob))),
+         listsPrefabs: lO(bb).categories,
+         looksUpDocs: !0 === bb.looksUpDocs
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 210. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6024-L6025` → after: `L6024-L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6024-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6024-L6025) · [Before (L6024-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6024-L6025)

```diff
-             edit_file: qq.hasBigFile,
-             replace_function: Eq,
+             edit_file: bb.hasBigFile,
+             replace_function: ub,
```

#### 211. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6027-L6044` → after: `L6027-L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6027-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6027-L6044) · [Before (L6027-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6027-L6044)

```diff
-             add_world_code: qq.codeBlock && !0 !== qq.hasWorldCodeFiles,
-             edit_code_in_place: qq.hasCode,
-             export_game: qq.wantsExport,
-             switch_to_world_code: qq.codeBlock,
-             ask_creator: qq.canAsk,
-             remember: !0 === qq.canRemember && !qq.codeBlock,
-             plan: !0 === qq.isBigRequest && qq.canAsk && !qq.codeBlock,
-             view_file: gq && !0 === qq.hasOtherFiles && !qq.codeBlock,
-             view_world_code: Yq,
-             view_chunk: gq,
-             view_game_state: gq,
-             get_docs: gq,
-             fetch_url: gq && !0 === qq.looksUpDocs,
-             find_names: gq,
-             view_errors: gq && !0 === qq.hasErrors,
-             use_prefab: !0 === qq.offersPrefabs && !qq.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: bb.codeBlock && !0 !== bb.hasWorldCodeFiles,
+             edit_code_in_place: bb.hasCode,
+             export_game: bb.wantsExport,
+             switch_to_world_code: bb.codeBlock,
+             ask_creator: bb.canAsk,
+             remember: !0 === bb.canRemember && !bb.codeBlock,
+             plan: !0 === bb.isBigRequest && bb.canAsk && !bb.codeBlock,
+             view_file: hb && !0 === bb.hasOtherFiles && !bb.codeBlock,
+             view_world_code: Bb,
+             view_chunk: hb,
+             view_game_state: hb,
+             get_docs: hb,
+             fetch_url: hb && !0 === bb.looksUpDocs,
+             find_names: hb,
+             view_errors: hb && !0 === bb.hasErrors,
+             use_prefab: !0 === bb.offersPrefabs && !bb.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6046-L6049` → after: `L6046-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6046-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6046-L6049) · [Before (L6046-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6046-L6049)

```diff
-         let Oq = QE.filter((qq => lq[qq.name]));
-         for (const mq of ["remember", "plan"]) Oq.filter((qq => !yE(qq.name))).length > 7 && (Oq = Oq.filter((qq => qq.name !== mq)));
-         return Oq
-       }(jl(qq))
+         let Gb = Cu.filter((bb => Ob[bb.name]));
+         for (const Ub of ["remember", "plan"]) Gb.filter((bb => !du(bb.name))).length > 7 && (Gb = Gb.filter((bb => bb.name !== Ub)));
+         return Gb
+       }(AO(bb))
```

#### 213. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6052-L6059` → after: `L6052-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6052-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6052-L6059) · [Before (L6052-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6052-L6059)

```diff
-     function Pl(qq, Eq) {
-       var gq, Yq;
-       const lq = jl(qq),
-         Oq = !0 === lq.canLookUp,
-         mq = (null !== (gq = null === (Yq = qq.lookups) || void 0 === Yq ? void 0 : Yq.length) && void 0 !== gq ? gq : 0) > 0,
-         xq = !0 === lq.hasWorldCodeFiles,
-         Aq = [lq.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", lq.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", Oq ? "" : mq ? "You have looked things up as many times as you can: answer n … [truncated]
-       return Aq.length > 0 ? `\n\nFor this request: ${Aq.join(" ")}` : ""
+     function WO(bb, ub) {
+       var hb, Bb;
+       const Ob = AO(bb),
+         Gb = !0 === Ob.canLookUp,
+         Ub = (null !== (hb = null === (Bb = bb.lookups) || void 0 === Bb ? void 0 : Bb.length) && void 0 !== hb ? hb : 0) > 0,
+         Lb = !0 === Ob.hasWorldCodeFiles,
+         Yb = [Ob.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", Ob.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", Gb ? "" : Ub ? "You have looked things up as many times as you can: answer n … [truncated]
+       return Yb.length > 0 ? `\n\nFor this request: ${Yb.join(" ")}` : ""
```

#### 214. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6062-L6064` → after: `L6062-L6064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6062-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6062-L6064) · [Before (L6062-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6062-L6064)

```diff
-     function Ql(qq, Eq) {
-       var gq, Yq, lq, Oq, mq, xq;
-       let Aq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ml,
+     function CO(bb, ub) {
+       var hb, Bb, Ob, Gb, Ub, Lb;
+       let Yb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UO,
```

#### 215. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6066-L6067` → after: `L6066-L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6066-L6067) · [Before (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6066-L6067)

```diff
-           docsInTurn: cq = !1,
-           kV: uq = !1
+           docsInTurn: Sb = !1,
+           mp: ab = !1
```

#### 216. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6069-L6101` → after: `L6069-L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6069-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6069-L6101) · [Before (L6069-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6069-L6101)

```diff
-       const Bq = "deepseek" === Aq.format,
-         Wq = Object.values(Eq.files).join("\n"),
-         Nq = Eq.history.slice(-2).map((qq => qq.text)).join("\n"),
-         aq = `${Eq.request}\n${Nq}\n${Eq.errors.join("\n")}`,
-         Vq = !0 === Eq.looksUpDocs,
-         dq = Vq && !0 === Eq.canLookUp ? [] : qq.find(aq, Wq, 12),
-         jq = qq.matchItemAndBlockNames(aq, 12),
-         Hq = !0 === Eq.codeBlock,
-         oq = Hq ? "myId" : "playerId",
-         Pq = ol(Eq, Aq.format),
-         Qq = Pq.some((qq => "use_prefab" === qq.name)),
-         yq = !Qq || Bq && !0 !== jl(Eq).offersPrefabs ? [] : function(qq, Eq, gq) {
-           if ("never" === gq.offer || "none" === gq.list) return [];
-           if ("all" === gq.list) return [...WY];
-           const Yq = bY(qq, 4);
-           if (Ol(Eq) || !ll.test(qq) && !BE(qq)) return Yq;
- ... (17 more removed lines; see GitHub link above)
+       const Hb = "deepseek" === Yb.format,
+         wb = Object.values(ub.files).join("\n"),
+         Zb = ub.history.slice(-2).map((bb => bb.text)).join("\n"),
+         Xb = `${ub.request}\n${Zb}\n${ub.errors.join("\n")}`,
+         pb = !0 === ub.looksUpDocs,
+         ob = pb && !0 === ub.canLookUp ? [] : bb.find(Xb, wb, 12),
+         Ab = bb.matchItemAndBlockNames(Xb, 12),
+         lb = !0 === ub.codeBlock,
+         Kb = lb ? "myId" : "playerId",
+         Wb = KO(ub, Yb.format),
+         Cb = Wb.some((bb => "use_prefab" === bb.name)),
+         db = !Cb || Hb && !0 !== AO(ub).offersPrefabs ? [] : function(bb, ub, hb) {
+           if ("never" === hb.offer || "none" === hb.list) return [];
+           if ("all" === hb.list) return [...wB];
+           const Bb = zB(bb, 4);
+           if (GO(ub) || !OO.test(bb) && !Hu(bb)) return Bb;
+ ... (17 more added lines; see GitHub link above)
```

#### 217. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6103` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6103) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6103)

```diff
-           content: El([Hq ? Al(Vq) : xl(Vq), ...Vq ? [] : [Hq ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${qq.index("callback")}` : `## Callbacks (all of them)\n${qq.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: uO([lb ? YO(pb) : LO(pb), ...pb ? [] : [lb ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${bb.index("callback")}` : `## Callbacks (all of them)\n${bb.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 218. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6110-L6115` → after: `L6110-L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6110-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6110-L6115) · [Before (L6110-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6110-L6115)

```diff
-             hasWorldCodeFiles: !0 === jl(Eq).hasWorldCodeFiles,
-             hasLookedUp: (null !== (gq = null === (Yq = Eq.lookups) || void 0 === Yq ? void 0 : Yq.length) && void 0 !== gq ? gq : 0) > 0,
-             movesToWorldCode: !0 === Eq.canChangeWorldCode,
-             listedPrefabs: yq,
-             guidesToPrefabs: !0 === Hl(Eq).guide
-           })].filter((qq => "" !== qq)).join("\n\n"), Pq, Aq.format, Aq.nativeTools)
+             hasWorldCodeFiles: !0 === AO(ub).hasWorldCodeFiles,
+             hasLookedUp: (null !== (hb = null === (Bb = ub.lookups) || void 0 === Bb ? void 0 : Bb.length) && void 0 !== hb ? hb : 0) > 0,
+             movesToWorldCode: !0 === ub.canChangeWorldCode,
+             listedPrefabs: db,
+             guidesToPrefabs: !0 === lO(ub).guide
+           })].filter((bb => "" !== bb)).join("\n\n"), Wb, Yb.format, Yb.nativeTools)
```

#### 219. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6117-L6120` → after: `L6117-L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6117-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6117-L6120) · [Before (L6117-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6117-L6120)

```diff
-       if (!Bq)
-         for (const pq of Eq.history) hq.push({
-           role: pq.role,
-           content: pq.text
+       if (!Hb)
+         for (const sb of ub.history) Db.push({
+           role: sb.role,
+           content: sb.text
```

#### 220. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6122-L6130` → after: `L6122-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6122-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6122-L6130) · [Before (L6122-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6122-L6130)

```diff
-       const nq = Bq && !uq && Eq.history.length > 0 ? `Earlier in this chat:\n${Eq.history.map((qq=>`${"user"===qq.role?"They asked":"You answered"}: ${qq.text}`)).join("\n")}\n\n` : "",
-         bq = null !== (lq = Eq.about) && void 0 !== lq && lq.notes.length ? `AI notes (notes they kept):\n${Eq.about.notes.map((qq=>`- ${qq}`)).join("\n")}\n\n` : "",
-         iq = null !== (Oq = Eq.about) && void 0 !== Oq && Oq.outline ? `Outline of their code:\n${Eq.about.outline}\n\n` : "",
-         Zq = Eq.errors.length > 0 ? `\n\nErrors their world showed recently:\n${Eq.errors.slice(-5).join("\n")}` : "",
-         fq = null === (mq = Eq.failedEdits) || void 0 === mq || !mq.length || Bq && uq ? "" : `\n\nWhat happened to your last answer's changes:\n${function(qq,Eq){return qq.map((qq=>eE[Eq].editFailure(qq.tool,gl(qq)))).join("\n\n")}(Eq.failedEdits,Aq.format)}`,
-         Mq = [...cq ? vq : [], ...Bq ? [tq, rq] : []].filter((qq => "" !== qq)).map((qq => `${qq}\n\n`)).join(""),
-         Tq = null === (xq = Eq.lookups) || void 0 === xq || !xq.length || Bq && uq ? "" : `\n\nWhat you looked up for this request:\n${zq=Eq.lookups,Sq=Aq.format,zq.map((qq=>eE[Sq].lookupResult(qq.tool,qq.about,qq.text))).join("\n\n")}`;
-       var zq, Sq;
-       return hq.push({
+       const xb = Hb && !ab && ub.history.length > 0 ? `Earlier in this chat:\n${ub.history.map((bb=>`${"user"===bb.role?"They asked":"You answered"}: ${bb.text}`)).join("\n")}\n\n` : "",
+         zb = null !== (Ob = ub.about) && void 0 !== Ob && Ob.notes.length ? `AI notes (notes they kept):\n${ub.about.notes.map((bb=>`- ${bb}`)).join("\n")}\n\n` : "",
+         gb = null !== (Gb = ub.about) && void 0 !== Gb && Gb.outline ? `Outline of their code:\n${ub.about.outline}\n\n` : "",
+         ib = ub.errors.length > 0 ? `\n\nErrors their world showed recently:\n${ub.errors.slice(-5).join("\n")}` : "",
+         vb = null === (Ub = ub.failedEdits) || void 0 === Ub || !Ub.length || Hb && ab ? "" : `\n\nWhat happened to your last answer's changes:\n${function(bb,ub){return bb.map((bb=>Qu[ub].editFailure(bb.tool,hO(bb)))).join("\n\n")}(ub.failedEdits,Yb.format)}`,
+         tb = [...Sb ? nb : [], ...Hb ? [rb, jb] : []].filter((bb => "" !== bb)).map((bb => `${bb}\n\n`)).join(""),
+         Jb = null === (Lb = ub.lookups) || void 0 === Lb || !Lb.length || Hb && ab ? "" : `\n\nWhat you looked up for this request:\n${eb=ub.lookups,Nb=Yb.format,eb.map((bb=>Qu[Nb].lookupResult(bb.tool,bb.about,bb.text))).join("\n\n")}`;
+       var eb, Nb;
+       return Db.push({
```

#### 221. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6132-L6133` → after: `L6132-L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6132-L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6132-L6133) · [Before (L6132-L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6132-L6133)

```diff
-         content: `${Mq}${bq}${iq}${nq}Their code now:\n${dl(Eq,Aq.format)}${Zq}${fq}${Tq}${Bq?Pl(Eq,yq):""}\n\nTheir request: ${Eq.request}`
-       }), hq
+         content: `${tb}${zb}${gb}${xb}Their code now:\n${oO(ub,Yb.format)}${ib}${vb}${Jb}${Hb?WO(ub,db):""}\n\nTheir request: ${ub.request}`
+       }), Db
```

#### 222. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6135` → after: `L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6135) · [Before (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6135)

```diff
-     var yl = gq(39532);
+     var dO = hb(39231);
```

#### 223. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6137-L6138` → after: `L6137-L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6137-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6137-L6138) · [Before (L6137-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6137-L6138)

```diff
-     function tl(qq) {
-       var Eq, gq, Yq, lq, Oq, mq;
+     function rO(bb) {
+       var ub, hb, Bb, Ob, Gb, Ub;
```

#### 224. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6140-L6142` → after: `L6140-L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6140-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6140-L6142) · [Before (L6140-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6140-L6142)

```diff
-         args: xq
-       } = qq;
-       switch (qq.name) {
+         args: Lb
+       } = bb;
+       switch (bb.name) {
```

#### 225. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6144` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6144) · [Before (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6144)

```diff
-           return null !== (Eq = xq.path) && void 0 !== Eq ? Eq : "a file";
+           return null !== (ub = Lb.path) && void 0 !== ub ? ub : "a file";
```

#### 226. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6148` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6148) · [Before (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6148)

```diff
-           return xq.position ? `the blocks near ${null!==(gq=null===(Yq=(0,yl.h)(xq.position))||void 0===Yq?void 0:Yq.map(Math.floor).join(", "))&&void 0!==gq?gq:xq.position}` : "the blocks around you";
+           return Lb.position ? `the blocks near ${null!==(hb=null===(Bb=(0,dO.e)(Lb.position))||void 0===Bb?void 0:Bb.map(Math.floor).join(", "))&&void 0!==hb?hb:Lb.position}` : "the blocks around you";
```

#### 227. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6152` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6152) · [Before (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6152)

```diff
-           return xq.name ? `the docs for ${xq.name}` : `the list of ${vl(null!==(lq=xq.list)&&void 0!==lq?lq:rl)}`;
+           return Lb.name ? `the docs for ${Lb.name}` : `the list of ${nO(null!==(Ob=Lb.list)&&void 0!==Ob?Ob:jO)}`;
```

#### 228. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6154-L6158` → after: `L6154-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6154-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6154-L6158) · [Before (L6154-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6154-L6158)

```diff
-           return function(qq) {
-             const Eq = void 0 === qq ? null : Pq(qq);
-             if (null === Eq) return null !== qq && void 0 !== qq ? qq : "a docs page";
-             return Qq(Eq) ? "the list of docs pages" : `the docs page ${function(qq){const Eq=(0,jq.B)(qq);return null===Eq?qq:`${Eq.name}${null===Eq.part?"":`/${Eq.part}`}`}(Eq)}`
-           }(xq.url);
+           return function(bb) {
+             const ub = void 0 === bb ? null : Wb(bb);
+             if (null === ub) return null !== bb && void 0 !== bb ? bb : "a docs page";
+             return Cb(ub) ? "the list of docs pages" : `the docs page ${function(bb){const ub=(0,Ab.z)(bb);return null===ub?bb:`${ub.name}${null===ub.part?"":`/${ub.part}`}`}(ub)}`
+           }(Lb.url);
```

#### 229. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6160` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6160) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6160)

```diff
-           return `names for "${null!==(Oq=xq.words)&&void 0!==Oq?Oq:""}"`;
+           return `names for "${null!==(Gb=Lb.words)&&void 0!==Gb?Gb:""}"`;
```

#### 230. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6164` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6164) · [Before (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6164)

```diff
-           return xq.category ? `the ready-made ${xq.category} games` : "the ready-made games";
+           return Lb.category ? `the ready-made ${Lb.category} games` : "the ready-made games";
```

#### 231. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6166` → after: `L6166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6166) · [Before (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6166)

```diff
-           return `the ready-made ${null!==(mq=xq.name)&&void 0!==mq?mq:"game"}`
+           return `the ready-made ${null!==(Ub=Lb.name)&&void 0!==Ub?Ub:"game"}`
```

#### 232. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6169` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6169) · [Before (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6169)

```diff
-     const rl = "functions";
+     const jO = "functions";
```

#### 233. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6171-L6172` → after: `L6171-L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6171-L6172) · [Before (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6171-L6172)

```diff
-     function vl(qq) {
-       return qq.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function nO(bb) {
+       return bb.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 234. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6175-L6176` → after: `L6175-L6176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6175-L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6175-L6176) · [Before (L6175-L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6175-L6176)

```diff
-     function hl(qq) {
-       return "get_docs" === qq.name || "fetch_url" === qq.name
+     function DO(bb) {
+       return "get_docs" === bb.name || "fetch_url" === bb.name
```

#### 235. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6178-L6181` → after: `L6178-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6178-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6178-L6181) · [Before (L6178-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6178-L6181)

```diff
-     async function nl(qq, Eq) {
-       var gq;
-       const Yq = tl(qq),
-         lq = Eq => ({
+     async function xO(bb, ub) {
+       var hb;
+       const Bb = rO(bb),
+         Ob = ub => ({
```

#### 236. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6183-L6185` → after: `L6183-L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6183-L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6183-L6185) · [Before (L6183-L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6183-L6185)

```diff
-             tool: qq.name,
-             about: Yq,
-             text: Eq
+             tool: bb.name,
+             about: Bb,
+             text: ub
```

#### 237. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6188` → after: `L6188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6188) · [Before (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6188)

```diff
-       switch (qq.name) {
+       switch (bb.name) {
```

#### 238. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6190` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6190) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6190)

```diff
-           return lq((xq = qq.args.path, Aq = Eq.files, void 0 === xq ? "No path was given: give the path of a file from the list." : Object.hasOwn(Aq, xq) ? "" === Aq[xq] ? `${xq} is empty.` : Aq[xq] : `There is no file called ${xq}. Their files are: ${Object.keys(Aq).join(", ")} … [truncated]
+           return Ob((Lb = bb.args.path, Yb = ub.files, void 0 === Lb ? "No path was given: give the path of a file from the list." : Object.hasOwn(Yb, Lb) ? "" === Yb[Lb] ? `${Lb} is empty.` : Yb[Lb] : `There is no file called ${Lb}. Their files are: ${Object.keys(Yb).join(", ")} … [truncated]
```

#### 239. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6192-L6197` → after: `L6192-L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6192-L6197) · [Before (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6192-L6197)

```diff
-           const qq = Eq.readWorldCode ? await Eq.readWorldCode() : null;
-           if (null === qq) return lq("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const gq = Object.keys(qq).sort(),
-             Yq = Object.fromEntries(gq.map((Eq => [`${Vq.l}${Eq}`, qq[Eq]]))),
-             Oq = gq.map((Eq => `${Vq.l}${Eq}:\n${""===qq[Eq]?"(empty)":qq[Eq]}`)).join("\n\n"),
-             mq = gq.length > 1 ? `\n\n${Vl(gq,Vq.l)}` : "";
+           const bb = ub.readWorldCode ? await ub.readWorldCode() : null;
+           if (null === bb) return Ob("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const hb = Object.keys(bb).sort(),
+             Bb = Object.fromEntries(hb.map((ub => [`${pb.e}${ub}`, bb[ub]]))),
+             Gb = hb.map((ub => `${pb.e}${ub}:\n${""===bb[ub]?"(empty)":bb[ub]}`)).join("\n\n"),
+             Ub = hb.length > 1 ? `\n\n${pO(hb,pb.e)}` : "";
```

#### 240. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6199-L6200` → after: `L6199-L6200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6199-L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6199-L6200) · [Before (L6199-L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6199-L6200)

```diff
-             ...lq("" === Oq ? `World Code has no code yet: ${Vq.l}index.js is empty.` : `${Oq}${mq}`),
-             worldCodeFiles: Yq
+             ...Ob("" === Gb ? `World Code has no code yet: ${pb.e}index.js is empty.` : `${Gb}${Ub}`),
+             worldCodeFiles: Bb
```

#### 241. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6204` → after: `L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6204) · [Before (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6204)

```diff
-           return lq(await Eq.viewChunk((0, yl.h)(qq.args.position)));
+           return Ob(await ub.viewChunk((0, dO.e)(bb.args.position)));
```

#### 242. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6206` → after: `L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6206) · [Before (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6206)

```diff
-           return lq(await Eq.viewGameState());
+           return Ob(await ub.viewGameState());
```

#### 243. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6208-L6211` → after: `L6208-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6208-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6208-L6211) · [Before (L6208-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6208-L6211)

```diff
-           return lq(function(qq, Eq, gq) {
-             if (void 0 === qq) {
-               const qq = (0, tq.b)(jE, vl(null !== Eq && void 0 !== Eq ? Eq : rl));
-               return void 0 === qq ? `There is no list called ${Eq}: ask for ${HE}.` : gq.index(qq)
+           return Ob(function(bb, ub, hb) {
+             if (void 0 === bb) {
+               const bb = (0, rb.d)(Au, nO(null !== ub && void 0 !== ub ? ub : jO));
+               return void 0 === bb ? `There is no list called ${ub}: ask for ${lu}.` : hb.index(bb)
```

#### 244. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6213-L6217` → after: `L6213-L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6213-L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6213-L6217) · [Before (L6213-L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6213-L6217)

```diff
-             const Yq = gq.section(qq);
-             if (Yq) return Yq.text;
-             const lq = gq.find(qq, "", 3).map((qq => qq.name)).join(", ");
-             return `Nothing is called ${qq}.${""===lq?"":` The closest names are: ${lq}.`}`
-           }(qq.args.name, qq.args.list, Eq.docs));
+             const Bb = hb.section(bb);
+             if (Bb) return Bb.text;
+             const Ob = hb.find(bb, "", 3).map((bb => bb.name)).join(", ");
+             return `Nothing is called ${bb}.${""===Ob?"":` The closest names are: ${Ob}.`}`
+           }(bb.args.name, bb.args.list, ub.docs));
```

#### 245. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6219` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6219) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6219)

```diff
-           return lq(await Eq.fetchDocsPage(null !== (gq = qq.args.url) && void 0 !== gq ? gq : ""));
+           return Ob(await ub.fetchDocsPage(null !== (hb = bb.args.url) && void 0 !== hb ? hb : ""));
```

#### 246. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6221-L6223` → after: `L6221-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6221-L6223) · [Before (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6221-L6223)

```diff
-           var Oq, mq;
-           const gq = Eq.docs.searchNames(null !== (Oq = qq.args.words) && void 0 !== Oq ? Oq : "", 20);
-           return lq(gq.length > 0 ? gq.join(", ") : `No block, item or mob name has any of the words "${null!==(mq=qq.args.words)&&void 0!==mq?mq:""}".`)
+           var Gb, Ub;
+           const hb = ub.docs.searchNames(null !== (Gb = bb.args.words) && void 0 !== Gb ? Gb : "", 20);
+           return Ob(hb.length > 0 ? hb.join(", ") : `No block, item or mob name has any of the words "${null!==(Ub=bb.args.words)&&void 0!==Ub?Ub:""}".`)
```

#### 247. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6226` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6226) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6226)

```diff
-           return lq(Eq.errors.length > 0 ? Eq.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return Ob(ub.errors.length > 0 ? ub.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 248. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6228` → after: `L6228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6228) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6228)

```diff
-           return lq(hY(qq.args.category));
+           return Ob(DB(bb.args.category));
```

#### 249. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6230-L6233` → after: `L6230-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6230-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6230-L6233) · [Before (L6230-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6230-L6233)

```diff
-           return lq(function(qq, Eq) {
-             const gq = void 0 === qq ? null : VY(qq);
-             return gq ? nY(gq, Eq) : `There is no prefab called ${null!==qq&&void 0!==qq?qq:"that"}.\n${hY()}`
-           }(qq.args.name, !0 === Eq.showPrefabCode))
+           return Ob(function(bb, ub) {
+             const hb = void 0 === bb ? null : pB(bb);
+             return hb ? xB(hb, ub) : `There is no prefab called ${null!==bb&&void 0!==bb?bb:"that"}.\n${DB()}`
+           }(bb.args.name, !0 === ub.showPrefabCode))
```

#### 250. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6235` → after: `L6235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6235) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6235)

```diff
-       var xq, Aq
+       var Lb, Yb
```

#### 251. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6237` → after: `L6237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6237) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6237)

```diff
-     const bl = [
+     const zO = [
```

#### 252. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6263-L6320` → after: `L6263-L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6263-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6263-L6320) · [Before (L6263-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6263-L6320)

```diff
-     function il(qq) {
-       let Eq = qq;
-       for (const [gq, Yq] of bl) Eq = Eq.replace(gq, (qq => qq.length > 1 && qq[0] !== qq[0].toLowerCase() && qq.slice(1) === qq.slice(1).toLowerCase() ? Yq[0].toUpperCase() + Yq.slice(1) : Yq));
-       return Eq
-     }
-     const Zl = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       fl = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       Ml = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       Tl = 12e3,
-       zl = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function Sl(qq) {
-       var Eq, gq, Yq;
-       const lq = null === (Eq = /Safety:\s*(\w+)/.exec(qq)) || void 0 === Eq ? void 0 : Eq[1],
-         Oq = null !== (gq = null === (Yq = /Categories:\s*(.+)/.exec(qq)) || void 0 === Yq ? void 0 : Yq[1]) && void 0 !== gq ? gq : "";
-       return /PII/.test(Oq) ? "personalInfo" : "Unsafe" === lq || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(Oq) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function gO(bb) {
+       let ub = bb;
+       for (const [hb, Bb] of zO) ub = ub.replace(hb, (bb => bb.length > 1 && bb[0] !== bb[0].toLowerCase() && bb.slice(1) === bb.slice(1).toLowerCase() ? Bb[0].toUpperCase() + Bb.slice(1) : Bb));
+       return ub
+     }
+     const iO = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       vO = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       tO = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       JO = 12e3,
+       eO = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function NO(bb) {
+       var ub, hb, Bb;
+       const Ob = null === (ub = /Safety:\s*(\w+)/.exec(bb)) || void 0 === ub ? void 0 : ub[1],
+         Gb = null !== (hb = null === (Bb = /Categories:\s*(.+)/.exec(bb)) || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== hb ? hb : "";
+       return /PII/.test(Gb) ? "personalInfo" : "Unsafe" === Ob || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(Gb) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 253. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6322-L6325` → after: `L6322-L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6322-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6322-L6325) · [Before (L6322-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6322-L6325)

```diff
-           if ("\n" === Eq) break;
-           if (gq) gq = "]" !== Eq;
-           else if ("[" === Eq) gq = !0;
-           else if ("/" === Eq) return Yq + 1
+           if ("\n" === ub) break;
+           if (hb) hb = "]" !== ub;
+           else if ("[" === ub) hb = !0;
+           else if ("/" === ub) return Bb + 1
```

#### 254. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6328-L6349` → after: `L6328-L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6328-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6328-L6349) · [Before (L6328-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6328-L6349)

```diff
-       return Eq + 1
-     }
- 
-     function Ul(qq, Eq, gq, Yq) {
-       let lq = Eq,
-         Oq = 0;
-       for (; lq < qq.length;) {
-         const Eq = qq[lq],
-           mq = qq[lq + 1];
-         if ("/" === Eq && "/" === mq) {
-           const Eq = qq.indexOf("\n", lq);
-           Yq.push(qq.slice(lq + 2, -1 === Eq ? qq.length : Eq)), lq = -1 === Eq ? qq.length : Eq
-         } else if ("/" === Eq && "*" === mq) {
-           const Eq = qq.indexOf("*/", lq + 2);
-           Yq.push(qq.slice(lq + 2, -1 === Eq ? qq.length : Eq)), lq = -1 === Eq ? qq.length : Eq + 2
-         } else if ("/" === Eq && kl(qq, lq)) lq = Rl(qq, lq);
- ... (6 more removed lines; see GitHub link above)
+       return ub + 1
+     }
+ 
+     function EO(bb, ub, hb, Bb) {
+       let Ob = ub,
+         Gb = 0;
+       for (; Ob < bb.length;) {
+         const ub = bb[Ob],
+           Ub = bb[Ob + 1];
+         if ("/" === ub && "/" === Ub) {
+           const ub = bb.indexOf("\n", Ob);
+           Bb.push(bb.slice(Ob + 2, -1 === ub ? bb.length : ub)), Ob = -1 === ub ? bb.length : ub
+         } else if ("/" === ub && "*" === Ub) {
+           const ub = bb.indexOf("*/", Ob + 2);
+           Bb.push(bb.slice(Ob + 2, -1 === ub ? bb.length : ub)), Ob = -1 === ub ? bb.length : ub + 2
+         } else if ("/" === ub && PO(bb, Ob)) Ob = qO(bb, Ob);
+ ... (6 more added lines; see GitHub link above)
```

#### 255. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6351-L6354` → after: `L6351-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6351-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6351-L6354) · [Before (L6351-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6351-L6354)

```diff
-           if (gq && "{" === Eq) Oq++;
-           else if (gq && "}" === Eq) {
-             if (0 === Oq) return lq + 1;
-             Oq--
+           if (hb && "{" === ub) Gb++;
+           else if (hb && "}" === ub) {
+             if (0 === Gb) return Ob + 1;
+             Gb--
```

#### 256. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6356` → after: `L6356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6356) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6356)

```diff
-           lq++
+           Ob++
```

#### 257. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6359)

```diff
-       return lq
+       return Ob
```

#### 258. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6361-L6365` → after: `L6361-L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6361-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6361-L6365) · [Before (L6361-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6361-L6365)

```diff
-     const Fl = 4e5;
-     var sl = gq(41222);
-     const Xl = 15e3;
-     let wl = [],
-       Kl = null;
+     const yO = 4e5;
+     var VO = hb(40924);
+     const FO = 15e3;
+     let fO = [],
+       kO = null;
```

#### 259. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6367-L6368` → after: `L6367-L6368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6367-L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6367-L6368) · [Before (L6367-L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6367-L6368)

```diff
-     function Cl(qq) {
-       return Math.ceil(qq.length / 4)
+     function TO(bb) {
+       return Math.ceil(bb.length / 4)
```

#### 260. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6371-L6372` → after: `L6371-L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6371-L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6371-L6372) · [Before (L6371-L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6371-L6372)

```diff
-     function Il(qq) {
-       return "number" === typeof qq && Number.isInteger(qq) && qq >= 0
+     function cO(bb) {
+       return "number" === typeof bb && Number.isInteger(bb) && bb >= 0
```

#### 261. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6375-L6378` → after: `L6375-L6378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6375-L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6375-L6378) · [Before (L6375-L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6375-L6378)

```diff
-     function el(qq, Eq, gq) {
-       var Yq;
-       let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(qq) {
+     function QO(bb, ub, hb) {
+       var Bb;
+       let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(bb) {
```

#### 262. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6380-L6385` → after: `L6380-L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6380-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6380-L6385) · [Before (L6380-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6380-L6385)

```diff
-         if (wl.push(qq), wl.length >= 40) return void Dl();
-         Kl ??= setTimeout((() => {
-           Dl()
-         }), Xl)
-       }(null !== (Yq = function(qq) {
-         if (null === qq || "object" !== typeof qq) return null;
+         if (fO.push(bb), fO.length >= 40) return void RO();
+         kO ??= setTimeout((() => {
+           RO()
+         }), FO)
+       }(null !== (Bb = function(bb) {
+         if (null === bb || "object" !== typeof bb) return null;
```

#### 263. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6387-L6392` → after: `L6387-L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6387-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6387-L6392) · [Before (L6387-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6387-L6392)

```diff
-           prompt_tokens: Eq,
-           completion_tokens: gq,
-           prompt_tokens_details: Yq
-         } = qq;
-         if (!Il(Eq) || !Il(gq)) return null;
-         const lq = null !== Yq && "object" === typeof Yq ? Yq.cached_tokens : void 0;
+           prompt_tokens: ub,
+           completion_tokens: hb,
+           prompt_tokens_details: Bb
+         } = bb;
+         if (!cO(ub) || !cO(hb)) return null;
+         const Ob = null !== Bb && "object" === typeof Bb ? Bb.cached_tokens : void 0;
```

#### 264. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6394-L6396` → after: `L6394-L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6394-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6394-L6396) · [Before (L6394-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6394-L6396)

```diff
-           sent: Eq,
-           cached: Il(lq) ? lq : 0,
-           received: gq
+           sent: ub,
+           cached: cO(Ob) ? Ob : 0,
+           received: hb
```

#### 265. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6398-L6399` → after: `L6398-L6399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6398-L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6398-L6399) · [Before (L6398-L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6398-L6399)

```diff
-       }(qq)) && void 0 !== Yq ? Yq : {
-         sent: Cl(JSON.stringify(Eq)),
+       }(bb)) && void 0 !== Bb ? Bb : {
+         sent: TO(JSON.stringify(ub)),
```

#### 266. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6401` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6401) · [Before (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6401)

```diff
-         received: Cl(gq) + lq
+         received: TO(hb) + Ob
```

#### 267. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6404-L6411` → after: `L6404-L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6404-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6404-L6411) · [Before (L6404-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6404-L6411)

```diff
-     async function Dl() {
-       null !== Kl && (clearTimeout(Kl), Kl = null);
-       const qq = wl.slice(0, 40);
-       if (wl = wl.slice(40), wl.length > 0 && (Kl = setTimeout((() => {
-           Dl()
-         }), Xl)), 0 !== qq.length) try {
-         await (0, sl.postToGameServer)("/ai-helper/usage", {
-           calls: qq
+     async function RO() {
+       null !== kO && (clearTimeout(kO), kO = null);
+       const bb = fO.slice(0, 40);
+       if (fO = fO.slice(40), fO.length > 0 && (kO = setTimeout((() => {
+           RO()
+         }), FO)), 0 !== bb.length) try {
+         await (0, VO.postToGameServer)("/ai-helper/usage", {
+           calls: bb
```

#### 268. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6415-L6416` → after: `L6415-L6416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6415-L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6415-L6416) · [Before (L6415-L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6415-L6416)

```diff
-     const qO = 6e4;
-     const EO = new class {
+     const bG = 6e4;
+     const uG = new class {
```

#### 269. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6420-L6422` → after: `L6420-L6422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6420-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6420-L6422) · [Before (L6420-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6420-L6422)

```diff
-         record(qq) {
-           let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-           this.calls.set(qq, [...this.recent(qq, Eq), Eq])
+         record(bb) {
+           let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+           this.calls.set(bb, [...this.recent(bb, ub), ub])
```

#### 270. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6424-L6426` → after: `L6424-L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6424-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6424-L6426) · [Before (L6424-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6424-L6426)

```diff
-         markFull(qq) {
-           let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-           this.fullUntil.set(qq, Eq + qO)
+         markFull(bb) {
+           let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+           this.fullUntil.set(bb, ub + bG)
```

#### 271. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6428-L6430` → after: `L6428-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6428-L6430) · [Before (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6428-L6430)

```diff
-         callsInLastMinute(qq) {
-           let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-           return this.recent(qq, Eq).length
+         callsInLastMinute(bb) {
+           let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+           return this.recent(bb, ub).length
```

#### 272. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6432-L6437` → after: `L6432-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6432-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6432-L6437) · [Before (L6432-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6432-L6437)

```diff
-         freeAt(qq) {
-           var Eq;
-           let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-           const Yq = this.recent(qq, gq),
-             lq = Yq.length < 2 ? gq : Yq[Yq.length - 2] + qO;
-           return Math.max(lq, null !== (Eq = this.fullUntil.get(qq)) && void 0 !== Eq ? Eq : 0, gq)
+         freeAt(bb) {
+           var ub;
+           let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+           const Bb = this.recent(bb, hb),
+             Ob = Bb.length < 2 ? hb : Bb[Bb.length - 2] + bG;
+           return Math.max(Ob, null !== (ub = this.fullUntil.get(bb)) && void 0 !== ub ? ub : 0, hb)
```

#### 273. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6439-L6441` → after: `L6439-L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6439-L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6439-L6441) · [Before (L6439-L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6439-L6441)

```diff
-         firstFreeAt(qq) {
-           let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-           return Math.min(...qq.map((qq => this.freeAt(qq, Eq))))
+         firstFreeAt(bb) {
+           let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+           return Math.min(...bb.map((bb => this.freeAt(bb, ub))))
```

#### 274. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6446-L6448` → after: `L6446-L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6446-L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6446-L6448) · [Before (L6446-L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6446-L6448)

```diff
-         recent(qq, Eq) {
-           var gq;
-           return (null !== (gq = this.calls.get(qq)) && void 0 !== gq ? gq : []).filter((qq => Eq - qq < qO))
+         recent(bb, ub) {
+           var hb;
+           return (null !== (hb = this.calls.get(bb)) && void 0 !== hb ? hb : []).filter((bb => ub - bb < bG))
```

#### 275. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6451-L6462` → after: `L6451-L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6451-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6451-L6462) · [Before (L6451-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6451-L6462)

```diff
-       gO = /\n{3,}/,
-       YO = /<tool_call\b|<function=/;
- 
-     function lO(qq) {
-       const Eq = qq.trimStart(),
-         gq = gO.exec(Eq),
-         Yq = YO.exec(Eq);
-       if (null === gq || null !== Yq && Yq.index < gq.index) return null;
-       const lq = Eq.slice(gq.index + gq[0].length);
-       return "" === lq.trim() ? null : lq
-     }
-     const OO = [{
+       hG = /\n{3,}/,
+       BG = /<tool_call\b|<function=/;
+ 
+     function OG(bb) {
+       const ub = bb.trimStart(),
+         hb = hG.exec(ub),
+         Bb = BG.exec(ub);
+       if (null === hb || null !== Bb && Bb.index < hb.index) return null;
+       const Ob = ub.slice(hb.index + hb[0].length);
+       return "" === Ob.trim() ? null : Ob
+     }
+     const GG = [{
```

#### 276. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6481` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6481) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6481)

```diff
-     const mO = {
+     const UG = {
```

#### 277. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6488-L6489` → after: `L6488-L6489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6488-L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6488-L6489) · [Before (L6488-L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6488-L6489)

```diff
-     function xO(qq) {
-       return [...OO, mO].find((Eq => Eq.name === qq))
+     function LG(bb) {
+       return [...GG, UG].find((ub => ub.name === bb))
```

#### 278. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6492-L6494` → after: `L6492-L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6492-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6492-L6494) · [Before (L6492-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6492-L6494)

```diff
-     function AO(qq) {
-       var Eq, gq;
-       return null !== (Eq = null === (gq = xO(qq)) || void 0 === gq ? void 0 : gq.callFormat) && void 0 !== Eq ? Eq : "simple"
+     function YG(bb) {
+       var ub, hb;
+       return null !== (ub = null === (hb = LG(bb)) || void 0 === hb ? void 0 : hb.callFormat) && void 0 !== ub ? ub : "simple"
```

#### 279. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6497-L6498` → after: `L6497-L6498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6497-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6497-L6498) · [Before (L6497-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6497-L6498)

```diff
-     function cO(qq) {
-       var Eq;
+     function SG(bb) {
+       var ub;
```

#### 280. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6500-L6501` → after: `L6500-L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6500-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6500-L6501) · [Before (L6500-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6500-L6501)

```diff
-         format: null !== (Eq = qq.callFormat) && void 0 !== Eq ? Eq : "simple",
-         nativeTools: !0 === qq.nativeTools
+         format: null !== (ub = bb.callFormat) && void 0 !== ub ? ub : "simple",
+         nativeTools: !0 === bb.nativeTools
```

#### 281. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6505-L6506` → after: `L6505-L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6505-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6505-L6506) · [Before (L6505-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6505-L6506)

```diff
-     function uO(qq, Eq) {
-       return "function" === typeof qq ? qq(Eq) : qq
+     function aG(bb, ub) {
+       return "function" === typeof bb ? bb(ub) : bb
```

#### 282. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6508-L6514` → after: `L6508-L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6508-L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6508-L6514) · [Before (L6508-L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6508-L6514)

```diff
-     const BO = "TOO_COMPLEX",
-       WO = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${BO} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       NO = 24e4,
-       aO = ["tooLarge", "busy", "timeout", "turnedAway", "failed"];
-     class VO extends Error {
-       constructor(qq) {
-         super(`World Code AI ${qq}`), this.reason = qq
+     const HG = "TOO_COMPLEX",
+       wG = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${HG} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       ZG = 24e4,
+       XG = ["tooLarge", "busy", "timeout", "turnedAway", "failed"];
+     class pG extends Error {
+       constructor(bb) {
+         super(`World Code AI ${bb}`), this.reason = bb
```

#### 283. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6518-L6519` → after: `L6518-L6519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6518-L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6518-L6519) · [Before (L6518-L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6518-L6519)

```diff
-     function dO(qq) {
-       switch (qq) {
+     function oG(bb) {
+       switch (bb) {
```

#### 284. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6532-L6534` → after: `L6532-L6534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6532-L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6532-L6534) · [Before (L6532-L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6532-L6534)

```diff
-     function jO(qq, Eq) {
-       var gq, Yq, lq, Oq, mq;
-       const xq = qq[null !== (gq = Eq.index) && void 0 !== gq ? gq : 0] ??= {
+     function AG(bb, ub) {
+       var hb, Bb, Ob, Gb, Ub;
+       const Lb = bb[null !== (hb = ub.index) && void 0 !== hb ? hb : 0] ??= {
```

#### 285. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6538` → after: `L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6538) · [Before (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6538)

```diff
-       xq.name += null !== (Yq = null === (lq = Eq.function) || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : "", xq.args += null !== (Oq = null === (mq = Eq.function) || void 0 === mq ? void 0 : mq.arguments) && void 0 !== Oq ? Oq : ""
+       Lb.name += null !== (Bb = null === (Ob = ub.function) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Bb ? Bb : "", Lb.args += null !== (Gb = null === (Ub = ub.function) || void 0 === Ub ? void 0 : Ub.arguments) && void 0 !== Gb ? Gb : ""
```

#### 286. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6541-L6542` → after: `L6541-L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6541-L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6541-L6542) · [Before (L6541-L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6541-L6542)

```diff
-     function HO(qq) {
-       return "mcp" === qq ? "simple" : qq
+     function lG(bb) {
+       return "mcp" === bb ? "simple" : bb
```

#### 287. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6545-L6547` → after: `L6545-L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6545-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6545-L6547) · [Before (L6545-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6545-L6547)

```diff
-     function oO(qq, Eq, gq, Yq) {
-       let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return PO(qq, Eq, gq, HO(Yq), lq).answer
+     function KG(bb, ub, hb, Bb) {
+       let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return WG(bb, ub, hb, lG(Bb), Ob).answer
```

#### 288. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6550-L6553` → after: `L6550-L6553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6550-L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6550-L6553) · [Before (L6550-L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6550-L6553)

```diff
-     function PO(qq, Eq, gq, Yq, lq) {
-       const Oq = gq.flatMap((qq => {
-         const Eq = ug(qq.name, qq.args);
-         return null === Eq ? [] : [ql(Eg(Yq), Eq.name, Eq.args)]
+     function WG(bb, ub, hb, Bb, Ob) {
+       const Gb = hb.flatMap((bb => {
+         const ub = ah(bb.name, bb.args);
+         return null === ub ? [] : [bO(uh(Bb), ub.name, ub.args)]
```

#### 289. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6555-L6562` → after: `L6555-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6555-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6555-L6562) · [Before (L6555-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6555-L6562)

```diff
-       let mq = !1;
-       return 0 !== Oq.length || 0 !== Wg(qq, Yq).length || qq.includes("```") || (Oq.push(...lq ? [] : function(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const Yq = new Map;
-         for (const xq of Bg(qq, Eq)) {
-           const qq = Object.values(xq.args).some((qq => void 0 !== qq && gq.includes(qq.trim())));
-           var lq, Oq, mq;
-           "export_game" === xq.name || "switch_to_world_code" === xq.name || yE(xq.name) || qq || Yq.set(`${xq.name} ${null!==(lq=xq.args.path)&&void 0!==lq?lq:""} ${null!==(Oq=xq.args.search)&&void 0!==Oq?Oq:""} ${null!==(mq=xq.args.name)&&void 0!==mq?mq:""}`, xq.source)
+       let Ub = !1;
+       return 0 !== Gb.length || 0 !== wh(bb, Bb).length || bb.includes("```") || (Gb.push(...Ob ? [] : function(bb, ub) {
+         let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const Bb = new Map;
+         for (const Lb of Hh(bb, ub)) {
+           const bb = Object.values(Lb.args).some((bb => void 0 !== bb && hb.includes(bb.trim())));
+           var Ob, Gb, Ub;
+           "export_game" === Lb.name || "switch_to_world_code" === Lb.name || du(Lb.name) || bb || Bb.set(`${Lb.name} ${null!==(Ob=Lb.args.path)&&void 0!==Ob?Ob:""} ${null!==(Gb=Lb.args.search)&&void 0!==Gb?Gb:""} ${null!==(Ub=Lb.args.name)&&void 0!==Ub?Ub:""}`, Lb.source)
```

#### 290. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6564-L6567` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6564-L6567) · [Before (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6564-L6567)

```diff
-         return [...new Set(Yq.values())]
-       }(Eq, Yq, ul)), mq = Oq.length > 0), {
-         answer: [qq, ...Oq].join("\n\n").trim(),
-         hasCallsFromReasoning: mq
+         return [...new Set(Bb.values())]
+       }(ub, Bb, aO)), Ub = Gb.length > 0), {
+         answer: [bb, ...Gb].join("\n\n").trim(),
+         hasCallsFromReasoning: Ub
```

#### 291. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6570-L6573` → after: `L6570-L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6570-L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6570-L6573) · [Before (L6570-L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6570-L6573)

```diff
-     async function QO(qq, Eq) {
-       const gq = qq.getReader(),
-         Yq = new TextDecoder;
-       let lq = "";
+     async function CG(bb, ub) {
+       const hb = bb.getReader(),
+         Bb = new TextDecoder;
+       let Ob = "";
```

#### 292. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6576-L6580` → after: `L6576-L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6576-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6576-L6580) · [Before (L6576-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6576-L6580)

```diff
-           done: qq,
-           value: Oq
-         } = await gq.read();
-         if (qq) break;
-         lq += Yq.decode(Oq, {
+           done: bb,
+           value: Gb
+         } = await hb.read();
+         if (bb) break;
+         Ob += Bb.decode(Gb, {
```

#### 293. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6583-L6589` → after: `L6583-L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6583-L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6583-L6589) · [Before (L6583-L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6583-L6589)

```diff
-         let mq = lq.indexOf("\n");
-         for (; - 1 !== mq;) {
-           const qq = lq.slice(0, mq).trim();
-           if (lq = lq.slice(mq + 1), mq = lq.indexOf("\n"), !qq.startsWith("data:")) continue;
-           const gq = qq.slice(5).trim();
-           if ("[DONE]" === gq) return;
-           let Yq;
+         let Ub = Ob.indexOf("\n");
+         for (; - 1 !== Ub;) {
+           const bb = Ob.slice(0, Ub).trim();
+           if (Ob = Ob.slice(Ub + 1), Ub = Ob.indexOf("\n"), !bb.startsWith("data:")) continue;
+           const hb = bb.slice(5).trim();
+           if ("[DONE]" === hb) return;
+           let Bb;
```

#### 294. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6591` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6591) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6591)

```diff
-             Yq = JSON.parse(gq)
+             Bb = JSON.parse(hb)
```

#### 295. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6595` → after: `L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6595) · [Before (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6595)

```diff
-           Eq(Yq)
+           ub(Bb)
```

#### 296. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6600-L6601` → after: `L6600-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6600-L6601) · [Before (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6600-L6601)

```diff
-     function yO(qq) {
-       return qq.map((qq => ({
+     function dG(bb) {
+       return bb.map((bb => ({
```

#### 297. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6604-L6606` → after: `L6604-L6606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6604-L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6604-L6606) · [Before (L6604-L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6604-L6606)

```diff
-           name: qq.name,
-           description: qq.description,
-           parameters: qq.inputSchema
+           name: bb.name,
+           description: bb.description,
+           parameters: bb.inputSchema
```

#### 298. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6611-L6612` → after: `L6611-L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6611-L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6611-L6612) · [Before (L6611-L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6611-L6612)

```diff
-     function tO(qq) {
-       return "object" === typeof qq
+     function rG(bb) {
+       return "object" === typeof bb
```

#### 299. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6614-L6619` → after: `L6614-L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6614-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6614-L6619) · [Before (L6614-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6614-L6619)

```diff
-     async function rO(qq, Eq, gq, Yq) {
-       var lq;
-       let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       if (EO.freeAt(qq.name) > Date.now()) return "busy";
-       EO.record(qq.name);
-       const mq = await fetch(Zl, {
+     async function jG(bb, ub, hb, Bb) {
+       var Ob;
+       let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       if (uG.freeAt(bb.name) > Date.now()) return "busy";
+       uG.record(bb.name);
+       const Ub = await fetch(iO, {
```

#### 300. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6625-L6626` → after: `L6625-L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6625-L6626) · [Before (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6625-L6626)

```diff
-           model: qq.name,
-           messages: Eq,
+           model: bb.name,
+           messages: ub,
```

#### 301. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6628-L6629` → after: `L6628-L6629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6628-L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6628-L6629) · [Before (L6628-L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6628-L6629)

```diff
-           temperature: qq.temperature,
-           reasoning_effort: qq.reasoningEffort,
+           temperature: bb.temperature,
+           reasoning_effort: bb.reasoningEffort,
```

#### 302. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6634-L6635` → after: `L6634-L6635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6634-L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6634-L6635) · [Before (L6634-L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6634-L6635)

```diff
-           ...qq.nativeTools && Oq.length > 0 ? {
-             tools: yO(Oq)
+           ...bb.nativeTools && Gb.length > 0 ? {
+             tools: dG(Gb)
```

#### 303. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6640` → after: `L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6640) · [Before (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6640)

```diff
-         signal: gq
+         signal: hb
```

#### 304. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6642-L6650` → after: `L6642-L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6642-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6642-L6650) · [Before (L6642-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6642-L6650)

```diff
-       if (429 === mq.status) return EO.markFull(qq.name), "busy";
-       if (!mq.ok || !mq.body) return console.warn(`World Code AI: ${qq.name} answered ${mq.status}`), mq.ok ? "failed" : 429 === (xq = mq.status) ? "busy" : 400 === xq || 413 === xq ? "tooLarge" : 401 === xq || 403 === xq ? "turnedAway" : "failed";
-       var xq;
-       let Aq = "",
-         cq = "";
-       const uq = [];
-       let Bq = !1,
-         Wq = !1,
-         Nq = null;
+       if (429 === Ub.status) return uG.markFull(bb.name), "busy";
+       if (!Ub.ok || !Ub.body) return console.warn(`World Code AI: ${bb.name} answered ${Ub.status}`), Ub.ok ? "failed" : 429 === (Lb = Ub.status) ? "busy" : 400 === Lb || 413 === Lb ? "tooLarge" : 401 === Lb || 403 === Lb ? "turnedAway" : "failed";
+       var Lb;
+       let Yb = "",
+         Sb = "";
+       const ab = [];
+       let Hb = !1,
+         wb = !1,
+         Zb = null;
```

#### 305. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6652-L6658` → after: `L6652-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6652-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6652-L6658) · [Before (L6652-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6652-L6658)

```diff
-         await async function(qq, Eq, gq) {
-           await QO(qq, (qq => {
-             var Yq;
-             const lq = qq,
-               Oq = null === (Yq = lq.choices) || void 0 === Yq ? void 0 : Yq[0];
-             var mq, xq;
-             Oq && Eq(null !== (mq = Oq.delta) && void 0 !== mq ? mq : {}, null !== (xq = Oq.finish_reason) && void 0 !== xq ? xq : null), lq.usage && (null === gq || void 0 === gq || gq(lq.usage))
+         await async function(bb, ub, hb) {
+           await CG(bb, (bb => {
+             var Bb;
+             const Ob = bb,
+               Gb = null === (Bb = Ob.choices) || void 0 === Bb ? void 0 : Bb[0];
+             var Ub, Lb;
+             Gb && ub(null !== (Ub = Gb.delta) && void 0 !== Ub ? Ub : {}, null !== (Lb = Gb.finish_reason) && void 0 !== Lb ? Lb : null), Ob.usage && (null === hb || void 0 === hb || hb(Ob.usage))
```

#### 306. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6660-L6665` → after: `L6660-L6665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6660-L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6660-L6665) · [Before (L6660-L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6660-L6665)

```diff
-         }(mq.body, ((Eq, gq) => {
-           var lq, Oq, mq, xq;
-           Bq ||= "length" === gq, cq += null !== (lq = null !== (Oq = Eq.reasoning) && void 0 !== Oq ? Oq : Eq.reasoning_content) && void 0 !== lq ? lq : "", Aq += null !== (mq = Eq.content) && void 0 !== mq ? mq : "";
-           for (const qq of null !== (Nq = Eq.tool_calls) && void 0 !== Nq ? Nq : []) {
-             var Nq;
-             Wq ||= "" !== cq && "" === Aq.trim(), jO(uq, qq)
+         }(Ub.body, ((ub, hb) => {
+           var Ob, Gb, Ub, Lb;
+           Hb ||= "length" === hb, Sb += null !== (Ob = null !== (Gb = ub.reasoning) && void 0 !== Gb ? Gb : ub.reasoning_content) && void 0 !== Ob ? Ob : "", Yb += null !== (Ub = ub.content) && void 0 !== Ub ? Ub : "";
+           for (const bb of null !== (Zb = ub.tool_calls) && void 0 !== Zb ? Zb : []) {
+             var Zb;
+             wb ||= "" !== Sb && "" === Yb.trim(), AG(ab, bb)
```

#### 307. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6667-L6672` → after: `L6667-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6667-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6667-L6672) · [Before (L6667-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6667-L6672)

```diff
-           const aq = qq.nativeTools && Wq ? null !== (xq = lO(Aq)) && void 0 !== xq ? xq : "" : Aq;
-           null === Yq || void 0 === Yq || Yq({
-             model: qq.name,
-             reasoningChars: cq.length,
-             answer: aq,
-             isCalling: uq.length > 0
+           const Xb = bb.nativeTools && wb ? null !== (Lb = OG(Yb)) && void 0 !== Lb ? Lb : "" : Yb;
+           null === Bb || void 0 === Bb || Bb({
+             model: bb.name,
+             reasoningChars: Sb.length,
+             answer: Xb,
+             isCalling: ab.length > 0
```

#### 308. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6674-L6675` → after: `L6674-L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6674-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6674-L6675) · [Before (L6674-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6674-L6675)

```diff
-         }), (qq => {
-           Nq = qq
+         }), (bb => {
+           Zb = bb
```

#### 309. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6678` → after: `L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6678) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6678)

```diff
-         el(Nq, Eq, Aq + cq, 20 * uq.length)
+         QO(Zb, ub, Yb + Sb, 20 * ab.length)
```

#### 310. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6680` → after: `L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6680) · [Before (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6680)

```diff
-       return null !== (lq = vO(qq, Aq, cq, uq, Bq, Wq)) && void 0 !== lq ? lq : "failed"
+       return null !== (Ob = nG(bb, Yb, Sb, ab, Hb, wb)) && void 0 !== Ob ? Ob : "failed"
```

#### 311. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6683-L6696` → after: `L6683-L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6683-L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6683-L6696) · [Before (L6683-L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6683-L6696)

```diff
-     function vO(qq, Eq, gq, Yq, lq) {
-       var Oq;
-       let mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         xq = Eq;
-       var Aq;
-       qq.nativeTools && mq && (xq = null !== (Aq = lO(xq)) && void 0 !== Aq ? Aq : xq);
-       xq = xq.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const cq = PO(xq, gq, Yq, null !== (Oq = qq.callFormat) && void 0 !== Oq ? Oq : "simple", lq);
-       return "" === cq.answer ? null : {
-         model: qq.name,
-         answer: cq.answer,
-         reasoning: gq,
-         isCutShort: lq,
-         hasCallsFromReasoning: cq.hasCallsFromReasoning
+     function nG(bb, ub, hb, Bb, Ob) {
+       var Gb;
+       let Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Lb = ub;
+       var Yb;
+       bb.nativeTools && Ub && (Lb = null !== (Yb = OG(Lb)) && void 0 !== Yb ? Yb : Lb);
+       Lb = Lb.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const Sb = WG(Lb, hb, Bb, null !== (Gb = bb.callFormat) && void 0 !== Gb ? Gb : "simple", Ob);
+       return "" === Sb.answer ? null : {
+         model: bb.name,
+         answer: Sb.answer,
+         reasoning: hb,
+         isCutShort: Ob,
+         hasCallsFromReasoning: Sb.hasCallsFromReasoning
```

#### 312. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6700-L6701` → after: `L6700-L6701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6700-L6701) · [Before (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6700-L6701)

```diff
-     function hO(qq) {
-       return qq.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function DG(bb) {
+       return bb.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 313. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6704-L6705` → after: `L6704-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6704-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6704-L6705) · [Before (L6704-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6704-L6705)

```diff
-     function nO(qq) {
-       return tO(qq) && !qq.isCutShort
+     function xG(bb) {
+       return rG(bb) && !bb.isCutShort
```

#### 314. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6707-L6710` → after: `L6707-L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6707-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6707-L6710) · [Before (L6707-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6707-L6710)

```diff
-     async function bO(qq, Eq, gq, Yq, lq) {
-       const Oq = qq.map((() => new AbortController)),
-         mq = () => {
-           for (const qq of Oq) qq.abort()
+     async function zG(bb, ub, hb, Bb, Ob) {
+       const Gb = bb.map((() => new AbortController)),
+         Ub = () => {
+           for (const bb of Gb) bb.abort()
```

#### 315. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6712` → after: `L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6712) · [Before (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6712)

```diff
-       null !== gq && void 0 !== gq && gq.aborted && mq(), null === gq || void 0 === gq || gq.addEventListener("abort", mq, {
+       null !== hb && void 0 !== hb && hb.aborted && Ub(), null === hb || void 0 === hb || hb.addEventListener("abort", Ub, {
```

#### 316. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6715-L6729` → after: `L6715-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6715-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6715-L6729) · [Before (L6715-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6715-L6729)

```diff
-       const xq = qq.map((() => {})),
-         Aq = qq.map((() => {}));
-       let cq = null;
-       const uq = qq => void 0 !== qq && ("" !== hO(qq.answer).trim() || !0 === qq.isCalling);
-       let Bq = () => {};
-       qq.forEach(((qq, gq) => {
-         const mq = (0, Hq.d)(NO, Oq[gq].signal);
-         rO(qq, uO(Eq, qq), mq.signal, (qq => {
-           Aq[gq] = qq, null === cq && uq(qq) && (cq = gq), cq === gq && (null === Yq || void 0 === Yq || Yq(qq))
-         }), lq).catch((Eq => {
-           if (Oq[gq].signal.aborted) return "failed";
-           const Yq = mq.signal.aborted;
-           return console.warn(`World Code AI: ${qq.name} ${Yq?"took longer than 240 s":"couldn't be reached"}`, Eq), Yq ? "timeout" : "failed"
-         })).then((qq => {
-           mq.clear(), xq[gq] = qq, cq !== gq || nO(qq) || (cq = null), Bq()
+       const Lb = bb.map((() => {})),
+         Yb = bb.map((() => {}));
+       let Sb = null;
+       const ab = bb => void 0 !== bb && ("" !== DG(bb.answer).trim() || !0 === bb.isCalling);
+       let Hb = () => {};
+       bb.forEach(((bb, hb) => {
+         const Ub = (0, lb.d)(ZG, Gb[hb].signal);
+         jG(bb, aG(ub, bb), Ub.signal, (bb => {
+           Yb[hb] = bb, null === Sb && ab(bb) && (Sb = hb), Sb === hb && (null === Bb || void 0 === Bb || Bb(bb))
+         }), Ob).catch((ub => {
+           if (Gb[hb].signal.aborted) return "failed";
+           const Bb = Ub.signal.aborted;
+           return console.warn(`World Code AI: ${bb.name} ${Bb?"took longer than 240 s":"couldn't be reached"}`, ub), Bb ? "timeout" : "failed"
+         })).then((bb => {
+           Ub.clear(), Lb[hb] = bb, Sb !== hb || xG(bb) || (Sb = null), Hb()
```

#### 317. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6732-L6737` → after: `L6732-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6732-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6732-L6737) · [Before (L6732-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6732-L6737)

```diff
-       const Wq = () => {
-         var qq;
-         if (null !== cq) {
-           const qq = xq[cq];
-           return nO(qq) ? {
-             reply: qq
+       const wb = () => {
+         var bb;
+         if (null !== Sb) {
+           const bb = Lb[Sb];
+           return xG(bb) ? {
+             reply: bb
```

#### 318. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6740-L6742` → after: `L6740-L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6740-L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6740-L6742) · [Before (L6740-L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6740-L6742)

```diff
-         const Eq = xq.find(nO);
-         if (Eq) return {
-           reply: Eq
+         const ub = Lb.find(xG);
+         if (ub) return {
+           reply: ub
```

#### 319. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6744-L6745` → after: `L6744-L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6744-L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6744-L6745) · [Before (L6744-L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6744-L6745)

```diff
-         if (!xq.includes(void 0)) return {
-           reply: null !== (qq = xq.find(tO)) && void 0 !== qq ? qq : null
+         if (!Lb.includes(void 0)) return {
+           reply: null !== (bb = Lb.find(rG)) && void 0 !== bb ? bb : null
```

#### 320. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6748-L6752` → after: `L6748-L6752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6748-L6752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6748-L6752) · [Before (L6748-L6752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6748-L6752)

```diff
-           const qq = xq.findIndex(((qq, Eq) => void 0 === qq && uq(Aq[Eq])));
-           if (-1 !== qq) {
-             cq = qq;
-             const Eq = Aq[qq];
-             Eq && (null === Yq || void 0 === Yq || Yq(Eq))
+           const bb = Lb.findIndex(((bb, ub) => void 0 === bb && ab(Yb[ub])));
+           if (-1 !== bb) {
+             Sb = bb;
+             const ub = Yb[bb];
+             ub && (null === Bb || void 0 === Bb || Bb(ub))
```

#### 321. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6758-L6761` → after: `L6758-L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6758-L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6758-L6761) · [Before (L6758-L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6758-L6761)

```diff
-           if (null !== gq && void 0 !== gq && gq.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const qq = Wq();
-           if (qq) {
-             const Eq = xq.filter((qq => "string" === typeof qq));
+           if (null !== hb && void 0 !== hb && hb.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const bb = wb();
+           if (bb) {
+             const ub = Lb.filter((bb => "string" === typeof bb));
```

#### 322. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6763-L6764` → after: `L6763-L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6763-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6763-L6764) · [Before (L6763-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6763-L6764)

```diff
-               reply: qq.reply,
-               failures: Eq
+               reply: bb.reply,
+               failures: ub
```

#### 323. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6767-L6768` → after: `L6767-L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6767-L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6767-L6768) · [Before (L6767-L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6767-L6768)

```diff
-           await new Promise((qq => {
-             Bq = qq
+           await new Promise((bb => {
+             Hb = bb
```

#### 324. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6772` → after: `L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6772) · [Before (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6772)

```diff
-         null === gq || void 0 === gq || gq.removeEventListener("abort", mq), mq()
+         null === hb || void 0 === hb || hb.removeEventListener("abort", Ub), Ub()
```

#### 325. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6776-L6778` → after: `L6776-L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6776-L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6776-L6778) · [Before (L6776-L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6776-L6778)

```diff
-     function iO() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       return EO.firstFreeAt(OO.map((qq => qq.name)), qq)
+     function gG() {
+       let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       return uG.firstFreeAt(GG.map((bb => bb.name)), bb)
```

#### 326. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6780-L6790` → after: `L6780-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6780-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6780-L6790) · [Before (L6780-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6780-L6790)

```diff
-     async function ZO(qq) {
-       var Eq;
-       let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const Yq = Date.now(),
-         lq = null !== (Eq = gq.models) && void 0 !== Eq ? Eq : OO,
-         Oq = void 0 === gq.models ? function(qq, Eq) {
-           let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const Yq = qq.map((qq => ({
-               model: qq,
-               key: gq()
-             }))).sort(((qq, Eq) => qq.key - Eq.key)).map((qq => {
+     async function iG(bb) {
+       var ub;
+       let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const Bb = Date.now(),
+         Ob = null !== (ub = hb.models) && void 0 !== ub ? ub : GG,
+         Gb = void 0 === hb.models ? function(bb, ub) {
+           let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const Bb = bb.map((bb => ({
+               model: bb,
+               key: hb()
+             }))).sort(((bb, ub) => bb.key - ub.key)).map((bb => {
```

#### 327. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6792-L6794` → after: `L6792-L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6792-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6792-L6794) · [Before (L6792-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6792-L6794)

```diff
-                 model: Eq
-               } = qq;
-               return Eq
+                 model: ub
+               } = bb;
+               return ub
```

#### 328. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6796-L6807` → after: `L6796-L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6796-L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6796-L6807) · [Before (L6796-L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6796-L6807)

```diff
-             lq = [...Yq.filter((qq => Eq(qq))), ...Yq.filter((qq => !Eq(qq)))],
-             Oq = [];
-           for (let mq = 0; mq < lq.length; mq += 2) Oq.push(lq.slice(mq, mq + 2));
-           return Oq
-         }(lq, (qq => EO.freeAt(qq.name) <= Yq)) : lq.map((qq => [qq])),
-         mq = [];
-       for (const Aq of Oq) {
-         const Eq = await bO(Aq, qq, gq.signal, gq.onProgress, gq.tools);
-         if (null !== Eq.reply) {
-           const lq = Aq.find((qq => {
-             var gq;
-             return qq.name === (null === (gq = Eq.reply) || void 0 === gq ? void 0 : gq.model)
+             Ob = [...Bb.filter((bb => ub(bb))), ...Bb.filter((bb => !ub(bb)))],
+             Gb = [];
+           for (let Ub = 0; Ub < Ob.length; Ub += 2) Gb.push(Ob.slice(Ub, Ub + 2));
+           return Gb
+         }(Ob, (bb => uG.freeAt(bb.name) <= Bb)) : Ob.map((bb => [bb])),
+         Ub = [];
+       for (const Yb of Gb) {
+         const ub = await zG(Yb, bb, hb.signal, hb.onProgress, hb.tools);
+         if (null !== ub.reply) {
+           const Ob = Yb.find((bb => {
+             var hb;
+             return bb.name === (null === (hb = ub.reply) || void 0 === hb ? void 0 : hb.model)
```

#### 329. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6810-L6811` → after: `L6810-L6811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6810-L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6810-L6811) · [Before (L6810-L6811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6810-L6811)

```diff
-             ...lq && !1 !== gq.canNudge ? await TO(lq, uO(qq, lq), Eq.reply, gq.signal, gq.onProgress, gq.tools) : Eq.reply,
-             ms: Date.now() - Yq
+             ...Ob && !1 !== hb.canNudge ? await JG(Ob, aG(bb, Ob), ub.reply, hb.signal, hb.onProgress, hb.tools) : ub.reply,
+             ms: Date.now() - Bb
```

#### 330. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6814` → after: `L6814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6814) · [Before (L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6814)

```diff
-         mq.push(...Eq.failures)
+         Ub.push(...ub.failures)
```

#### 331. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6816-L6817` → after: `L6816-L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6816-L6817) · [Before (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6816-L6817)

```diff
-       const xq = aO.find((qq => mq.includes(qq)));
-       throw new VO(null !== xq && void 0 !== xq ? xq : "failed")
+       const Lb = XG.find((bb => Ub.includes(bb)));
+       throw new pG(null !== Lb && void 0 !== Lb ? Lb : "failed")
```

#### 332. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6819` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6819) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6819)

```diff
-     const fO = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const vG = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 333. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6821-L6823` → after: `L6821-L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6821-L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6821-L6823) · [Before (L6821-L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6821-L6823)

```diff
-     function MO(qq) {
-       const Eq = qq.trim();
-       return Eq.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(Eq) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(Eq) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function tG(bb) {
+       const ub = bb.trim();
+       return ub.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(ub) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(ub) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 334. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6825-L6831` → after: `L6825-L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6825-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6825-L6831) · [Before (L6825-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6825-L6831)

```diff
-     async function TO(qq, Eq, gq, Yq, lq, Oq) {
-       var mq;
-       let xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : NO;
-       if (! function(qq, Eq) {
-           return !qq.isCutShort && MO(qq.answer) && !qq.answer.includes("?") && 0 === Wg(qq.answer, Eq).length
-         }(gq, null !== (mq = qq.callFormat) && void 0 !== mq ? mq : "simple")) return gq;
-       const Aq = [...Eq, {
+     async function JG(bb, ub, hb, Bb, Ob, Gb) {
+       var Ub;
+       let Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ZG;
+       if (! function(bb, ub) {
+           return !bb.isCutShort && tG(bb.answer) && !bb.answer.includes("?") && 0 === wh(bb.answer, ub).length
+         }(hb, null !== (Ub = bb.callFormat) && void 0 !== Ub ? Ub : "simple")) return hb;
+       const Yb = [...ub, {
```

#### 335. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6833` → after: `L6833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6833) · [Before (L6833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6833)

```diff
-           content: gq.answer
+           content: hb.answer
```

#### 336. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6836` → after: `L6836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6836) · [Before (L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6836)

```diff
-           content: fO
+           content: vG
```

#### 337. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6838` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6838) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6838)

```diff
-         cq = (0, Hq.d)(xq, Yq);
+         Sb = (0, lb.d)(Lb, Bb);
```

#### 338. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6840-L6844` → after: `L6840-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6840-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6840-L6844) · [Before (L6840-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6840-L6844)

```diff
-         const Eq = await rO(qq, Aq, cq.signal, lq, Oq);
-         return tO(Eq) && "" !== Eq.answer.trim() ? Eq : gq
-       } catch (uq) {
-         if (null !== Yq && void 0 !== Yq && Yq.aborted) throw uq;
-         return gq
+         const ub = await jG(bb, Yb, Sb.signal, Ob, Gb);
+         return rG(ub) && "" !== ub.answer.trim() ? ub : hb
+       } catch (ab) {
+         if (null !== Bb && void 0 !== Bb && Bb.aborted) throw ab;
+         return hb
```

#### 339. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6846` → after: `L6846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6846) · [Before (L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6846)

```diff
-         cq.clear()
+         Sb.clear()
```

#### 340. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6850-L6852` → after: `L6850-L6852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6850-L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6850-L6852) · [Before (L6850-L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6850-L6852)

```diff
-     function zO(qq) {
-       const Eq = hO(qq);
-       return /too_complex/i.test(Eq) || /^\W*too[\s_-]*complex\W*$/i.test(Eq.trim())
+     function eG(bb) {
+       const ub = DG(bb);
+       return /too_complex/i.test(ub) || /^\W*too[\s_-]*complex\W*$/i.test(ub.trim())
```

#### 341. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6855-L6857` → after: `L6855-L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6855-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6855-L6857) · [Before (L6855-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6855-L6857)

```diff
-     function SO(qq) {
-       const Eq = hO(qq).trim();
-       return Eq.length > 19 && !/^\W*too[\s_-]*complex/i.test(Eq)
+     function NG(bb) {
+       const ub = DG(bb).trim();
+       return ub.length > 19 && !/^\W*too[\s_-]*complex/i.test(ub)
```

#### 342. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6860-L6864` → after: `L6860-L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6860-L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6860-L6864) · [Before (L6860-L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6860-L6864)

```diff
-     function pO(qq) {
-       return qq.map(((qq, Eq) => 0 === Eq && "system" === qq.role ? {
-         ...qq,
-         content: qq.content + WO
-       } : qq))
+     function sG(bb) {
+       return bb.map(((bb, ub) => 0 === ub && "system" === bb.role ? {
+         ...bb,
+         content: bb.content + wG
+       } : bb))
```

#### 343. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6866-L6869` → after: `L6866-L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6866-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6866-L6869) · [Before (L6866-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6866-L6869)

```diff
-     async function GO(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       for (const Yq of fl) {
-         const gq = await LO(Yq, [{
+     async function MG(bb, ub) {
+       let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       for (const Bb of vO) {
+         const hb = await mG(Bb, [{
```

#### 344. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6871-L6873` → after: `L6871-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6871-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6871-L6873) · [Before (L6871-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6871-L6873)

```diff
-           content: qq
-         }], Eq);
-         if (null !== gq && "busy" !== gq) return Sl(gq)
+           content: bb
+         }], ub);
+         if (null !== hb && "busy" !== hb) return NO(hb)
```

#### 345. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6875` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6875) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6875)

```diff
-       return gq ? "unchecked" : "ok"
+       return hb ? "unchecked" : "ok"
```

#### 346. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6877-L6879` → after: `L6877-L6879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6877-L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6877-L6879) · [Before (L6877-L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6877-L6879)

```diff
-     async function LO(qq, Eq, gq) {
-       const Yq = (0, Hq.d)(2e4, gq);
-       EO.record(qq);
+     async function mG(bb, ub, hb) {
+       const Bb = (0, lb.d)(2e4, hb);
+       uG.record(bb);
```

#### 347. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6881-L6882` → after: `L6881-L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6881-L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6881-L6882) · [Before (L6881-L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6881-L6882)

```diff
-         var lq, Oq, mq, xq;
-         const gq = await fetch(Zl, {
+         var Ob, Gb, Ub, Lb;
+         const hb = await fetch(iO, {
```

#### 348. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6888-L6889` → after: `L6888-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6888-L6889) · [Before (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6888-L6889)

```diff
-             model: qq,
-             messages: Eq,
+             model: bb,
+             messages: ub,
```

#### 349. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6894` → after: `L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6894) · [Before (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6894)

```diff
-           signal: Yq.signal
+           signal: Bb.signal
```

#### 350. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6896-L6905` → after: `L6896-L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6896-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6896-L6905) · [Before (L6896-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6896-L6905)

```diff
-         if (429 === gq.status) return EO.markFull(qq), "busy";
-         if (!gq.ok) return null;
-         const Aq = await gq.json(),
-           cq = String(null !== (lq = null === (Oq = Aq.choices) || void 0 === Oq || null === (mq = Oq[0]) || void 0 === mq || null === (xq = mq.message) || void 0 === xq ? void 0 : xq.content) && void 0 !== lq ? lq : "");
-         return el(Aq.usage, Eq, cq),
-           function(qq) {
-             return /Safety:/.test(qq)
-           }(cq) ? cq : null
-       } catch (Aq) {
-         if (null !== gq && void 0 !== gq && gq.aborted) throw Aq;
+         if (429 === hb.status) return uG.markFull(bb), "busy";
+         if (!hb.ok) return null;
+         const Yb = await hb.json(),
+           Sb = String(null !== (Ob = null === (Gb = Yb.choices) || void 0 === Gb || null === (Ub = Gb[0]) || void 0 === Ub || null === (Lb = Ub.message) || void 0 === Lb ? void 0 : Lb.content) && void 0 !== Ob ? Ob : "");
+         return QO(Yb.usage, ub, Sb),
+           function(bb) {
+             return /Safety:/.test(bb)
+           }(Sb) ? Sb : null
+       } catch (Yb) {
+         if (null !== hb && void 0 !== hb && hb.aborted) throw Yb;
```

#### 351. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6908` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6908) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6908)

```diff
-         Yq.clear()
+         Bb.clear()
```

#### 352. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6911-L6912` → after: `L6911-L6912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6911-L6912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6911-L6912) · [Before (L6911-L6912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6911-L6912)

```diff
-     var JO = gq(38);
-     const kO = "aiHelperDataSharing";
+     var IG = hb(29);
+     const PG = "aiHelperDataSharing";
```

#### 353. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6914-L6916` → after: `L6914-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6914-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6914-L6916) · [Before (L6914-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6914-L6916)

```diff
-     function RO() {
-       const qq = JO.i.getItem(kO);
-       return null !== qq && "object" === typeof qq ? qq : {}
+     function qG() {
+       const bb = IG.j.getItem(PG);
+       return null !== bb && "object" === typeof bb ? bb : {}
```

#### 354. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6918` → after: `L6918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6918) · [Before (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6918)

```diff
-     const UO = new class {
+     const EG = new class {
```

#### 355. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6920-L6921` → after: `L6920-L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6920-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6920-L6921) · [Before (L6920-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6920-L6921)

```diff
-         this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = qq => (this.listen(), this.listeners.add(qq), () => {
-           this.listeners.delete(qq)
+         this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = bb => (this.listen(), this.listeners.add(bb), () => {
+           this.listeners.delete(bb)
```

#### 356. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6925-L6926` → after: `L6925-L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6925-L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6925-L6926) · [Before (L6925-L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6925-L6926)

```diff
-         var qq, Eq;
-         return null === this.player ? null : null !== (qq = null !== (Eq = this.unsaved.get(this.player)) && void 0 !== Eq ? Eq : RO()[this.player]) && void 0 !== qq ? qq : null
+         var bb, ub;
+         return null === this.player ? null : null !== (bb = null !== (ub = this.unsaved.get(this.player)) && void 0 !== ub ? ub : qG()[this.player]) && void 0 !== bb ? bb : null
```

#### 357. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6933-L6934` → after: `L6933-L6934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6933-L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6933-L6934) · [Before (L6933-L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6933-L6934)

```diff
-         const qq = await async function() {
-           var qq, Eq;
+         const bb = await async function() {
+           var bb, ub;
```

#### 358. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6936-L6946` → after: `L6936-L6946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6936-L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6936-L6946) · [Before (L6936-L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6936-L6946)

```diff
-             userContextManager: Yq
-           } = await Promise.resolve().then((() => gq(1109)));
-           return null !== (qq = null === (Eq = Yq.peekCurrentUserContext()) || void 0 === Eq ? void 0 : Eq.whamm) && void 0 !== qq ? qq : null
-         }().catch((qq => (console.error("AI Helper: couldn't look up the player for sharing chats", qq), null)));
-         return qq !== this.player && (this.player = qq, this.notify()), this.get()
-       }
-       set(qq) {
-         null !== this.player && (JO.i.setItem(kO, {
-           ...RO(),
-           [this.player]: qq
-         }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, qq), this.notify())
+             userContextManager: Bb
+           } = await Promise.resolve().then((() => hb(1038)));
+           return null !== (bb = null === (ub = Bb.peekCurrentUserContext()) || void 0 === ub ? void 0 : ub.whamm) && void 0 !== bb ? bb : null
+         }().catch((bb => (console.error("AI Helper: couldn't look up the player for sharing chats", bb), null)));
+         return bb !== this.player && (this.player = bb, this.notify()), this.get()
+       }
+       set(bb) {
+         null !== this.player && (IG.j.setItem(PG, {
+           ...qG(),
+           [this.player]: bb
+         }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, bb), this.notify())
```

#### 359. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6954` → after: `L6954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6954) · [Before (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6954)

```diff
-         for (const qq of this.listeners) qq()
+         for (const bb of this.listeners) bb()
```

#### 360. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6957-L6985` → after: `L6957-L6985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6957-L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6957-L6985) · [Before (L6957-L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6957-L6985)

```diff
-     let FO = null,
-       sO = !1;
-     const XO = 4e5,
-       wO = 6e4,
-       KO = 12,
-       CO = 9e5;
- 
-     function IO(qq, Eq) {
-       if (qq.length <= Eq) return qq;
-       const gq = `\n[... ${qq.length-Eq} more characters cut]`;
-       let Yq = Math.max(0, Eq - gq.length);
-       const lq = qq.charCodeAt(Yq - 1);
-       return lq >= 55296 && lq <= 56319 && Yq--, qq.slice(0, Yq) + gq
-     }
-     var eO = gq(600),
-       DO = gq(4218);
- ... (13 more removed lines; see GitHub link above)
+     let yG = null,
+       VG = !1;
+     const FG = 4e5,
+       fG = 6e4,
+       kG = 12,
+       TG = 9e5;
+ 
+     function cG(bb, ub) {
+       if (bb.length <= ub) return bb;
+       const hb = `\n[... ${bb.length-ub} more characters cut]`;
+       let Bb = Math.max(0, ub - hb.length);
+       const Ob = bb.charCodeAt(Bb - 1);
+       return Ob >= 55296 && Ob <= 56319 && Bb--, bb.slice(0, Bb) + hb
+     }
+     var QG = hb(595),
+       RG = hb(4141);
+ ... (13 more added lines; see GitHub link above)
```

#### 361. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6988-L6989` → after: `L6988-L6989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6988-L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6988-L6989) · [Before (L6988-L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6988-L6989)

```diff
-       var lq;
-       return Yq.length > XO ? null : {
+       var Ob;
+       return Bb.length > FG ? null : {
```

#### 362. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6991-L6996` → after: `L6991-L6996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R6991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L6991-L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L6991-L6996) · [Before (L6991-L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L6991-L6996)

```diff
-         chatId: qq,
-         responder: Eq.responder,
-         promptVersion: Eq.promptVersion,
-         clientVersion: String(eO.e),
-         request: Yq,
-         responses: [gm(gq)]
+         chatId: bb,
+         responder: ub.responder,
+         promptVersion: ub.promptVersion,
+         clientVersion: String(QG.b),
+         request: Bb,
+         responses: [hU(hb)]
```

#### 363. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7000` → after: `L7000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7000) · [Before (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7000)

```diff
-     function gm(qq) {
+     function hU(bb) {
```

#### 364. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7002-L7003` → after: `L7002-L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7002-L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7002-L7003) · [Before (L7002-L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7002-L7003)

```diff
-         model: qq.model,
-         text: IO(qq.text, wO)
+         model: bb.model,
+         text: cG(bb.text, fG)
```

#### 365. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7006` → after: `L7006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7006) · [Before (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7006)

```diff
-     class Ym {
+     class BU {
```

#### 366. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7008-L7021` → after: `L7008-L7021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7008-L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7008-L7021) · [Before (L7008-L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7008-L7021)

```diff
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm;
-         this.SN = qq, this.chatId = (0, DO.d)(12), this.open = new Map
-       }
-       requestStarted(qq, Eq) {
-         const gq = this.open.get(qq);
-         gq && (clearTimeout(gq.timer), Eq || (this.open.delete(qq), this.send(gq.SN)))
-       }
-       answered(qq, Eq, gq) {
-         if ("" === gq.text.trim()) return;
-         const Yq = this.open.get(qq);
-         if (Yq) return void(Yq.SN.responses.length < KO && Yq.SN.responses.push(gm(gq)));
-         const lq = Em(this.chatId, Eq, gq);
-         lq && this.open.set(qq, {
-           SN: lq
+         let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LU;
+         this.iZ = bb, this.chatId = (0, RG.d)(12), this.open = new Map
+       }
+       requestStarted(bb, ub) {
+         const hb = this.open.get(bb);
+         hb && (clearTimeout(hb.timer), ub || (this.open.delete(bb), this.send(hb.iZ)))
+       }
+       answered(bb, ub, hb) {
+         if ("" === hb.text.trim()) return;
+         const Bb = this.open.get(bb);
+         if (Bb) return void(Bb.iZ.responses.length < kG && Bb.iZ.responses.push(hU(hb)));
+         const Ob = uU(this.chatId, ub, hb);
+         Ob && this.open.set(bb, {
+           iZ: Ob
```

#### 367. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7024-L7026` → after: `L7024-L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7024-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7024-L7026) · [Before (L7024-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7024-L7026)

```diff
-       drop(qq) {
-         var Eq;
-         clearTimeout(null === (Eq = this.open.get(qq)) || void 0 === Eq ? void 0 : Eq.timer), this.open.delete(qq)
+       drop(bb) {
+         var ub;
+         clearTimeout(null === (ub = this.open.get(bb)) || void 0 === ub ? void 0 : ub.timer), this.open.delete(bb)
```

#### 368. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7028-L7031` → after: `L7028-L7031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7028-L7031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7028-L7031) · [Before (L7028-L7031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7028-L7031)

```diff
-       requestEnded(qq) {
-         const Eq = this.open.get(qq);
-         Eq && (clearTimeout(Eq.timer), Eq.timer = setTimeout((() => {
-           this.open.delete(qq), this.send(Eq.SN)
+       requestEnded(bb) {
+         const ub = this.open.get(bb);
+         ub && (clearTimeout(ub.timer), ub.timer = setTimeout((() => {
+           this.open.delete(bb), this.send(ub.iZ)
```

#### 369. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7034-L7037` → after: `L7034-L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7034-L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7034-L7037) · [Before (L7034-L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7034-L7037)

```diff
-       send(qq) {
-         (function(qq) {
-           return (new TextEncoder).encode(JSON.stringify(qq)).length <= CO
-         })(qq) && this.SN(qq)
+       send(bb) {
+         (function(bb) {
+           return (new TextEncoder).encode(JSON.stringify(bb)).length <= TG
+         })(bb) && this.iZ(bb)
```

#### 370. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7040-L7042` → after: `L7040-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7040-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7040-L7042) · [Before (L7040-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7040-L7042)

```diff
-     const lm = [],
-       Om = 5;
-     let mm = !1;
+     const OU = [],
+       GU = 5;
+     let UU = !1;
```

#### 371. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7044` → after: `L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7044) · [Before (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7044)

```diff
-     function xm(qq) {
+     function LU(bb) {
```

#### 372. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7046-L7054` → after: `L7046-L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7046-L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7046-L7054) · [Before (L7046-L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7046-L7054)

```diff
-         const Eq = await UO.refresh(),
-           gq = UO.getPlayer();
-         "yes" === Eq ? await cm([qq]) : null === Eq && null !== gq && function(qq, Eq) {
-           mm || (mm = !0, UO.subscribe(Am));
-           lm.push({
-             player: qq,
-             SN: Eq
-           }), lm.length > Om && lm.shift()
-         }(gq, qq)
+         const ub = await EG.refresh(),
+           hb = EG.getPlayer();
+         "yes" === ub ? await SU([bb]) : null === ub && null !== hb && function(bb, ub) {
+           UU || (UU = !0, EG.subscribe(YU));
+           OU.push({
+             player: bb,
+             iZ: ub
+           }), OU.length > GU && OU.shift()
+         }(hb, bb)
```

#### 373. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7058-L7063` → after: `L7058-L7063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7058-L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7058-L7063) · [Before (L7058-L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7058-L7063)

```diff
-     function Am() {
-       const qq = UO.get();
-       if (null === qq) return;
-       const Eq = UO.getPlayer(),
-         gq = lm.splice(0).filter((qq => qq.player === Eq));
-       "yes" === qq && gq.length > 0 && cm(gq.map((qq => qq.SN)))
+     function YU() {
+       const bb = EG.get();
+       if (null === bb) return;
+       const ub = EG.getPlayer(),
+         hb = OU.splice(0).filter((bb => bb.player === ub));
+       "yes" === bb && hb.length > 0 && SU(hb.map((bb => bb.iZ)))
```

#### 374. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7065-L7067` → after: `L7065-L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7065-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7065-L7067) · [Before (L7065-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7065-L7067)

```diff
-     async function cm(qq) {
-       const Eq = Promise.resolve().then((() => gq(41222)));
-       for (const gq of qq) try {
+     async function SU(bb) {
+       const ub = Promise.resolve().then((() => hb(40924)));
+       for (const hb of bb) try {
```

#### 375. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7069-L7073` → after: `L7069-L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7069-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7069-L7073) · [Before (L7069-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7069-L7073)

```diff
-           postToGameServer: qq
-         } = await Eq;
-         await qq("/ai-helper/turn", gq)
-       } catch (Yq) {
-         console.warn("AI Helper: couldn't share a turn", Yq)
+           postToGameServer: bb
+         } = await ub;
+         await bb("/ai-helper/turn", hb)
+       } catch (Bb) {
+         console.warn("AI Helper: couldn't share a turn", Bb)
```

#### 376. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7076-L7078` → after: `L7076-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7076-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7076-L7078) · [Before (L7076-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7076-L7078)

```diff
-     var um = gq(307),
-       Bm = gq(163);
-     const Wm = {
+     var aU = hb(314),
+       HU = hb(148);
+     const wU = {
```

#### 377. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7134` → after: `L7134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7134) · [Before (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7134)

```diff
-       return "https:" !== Eq.protocol && ("http:" !== Eq.protocol || !gq) || Eq.username || Eq.password || Eq.search ? null : `${Eq.origin}${Eq.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== ub.protocol && ("http:" !== ub.protocol || !hb) || ub.username || ub.password || ub.search ? null : `${ub.origin}${ub.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 378. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7143` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7143) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7143)

```diff
-         super(`AI key request: ${qq}`), this.problem = qq, this.retryAfterMs = Eq, this.status = gq, this.detail = Yq
+         super(`AI key request: ${bb}`), this.problem = bb, this.retryAfterMs = ub, this.status = hb, this.detail = Bb
```

#### 379. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7148` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7148) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7148)

```diff
-       return ("" === Eq ? qq : qq.split(Eq).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === ub ? bb : bb.split(ub).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 380. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7155` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7155) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7155)

```diff
-           return `${gq} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${hb} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 381. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7159` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7159) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7159)

```diff
-           return `${gq} can't find that model. Check its name.`;
+           return `${hb} can't find that model. Check its name.`;
```

#### 382. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7161` → after: `L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7161) · [Before (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7161)

```diff
-           return "anthropic" === Eq ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Eq ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === ub ? "Claude didn't accept your key: check it, or make a new one." : "custom" === ub ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 383. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7163` → after: `L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7163) · [Before (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7163)

```diff
-           return "custom" === Eq ? "That server stopped your key for now: it has used all it can." : `${gq} stopped your key for now: it has used all it can. Check it on ${gq}'s website.`;
+           return "custom" === ub ? "That server stopped your key for now: it has used all it can." : `${hb} stopped your key for now: it has used all it can. Check it on ${hb}'s website.`;
```

#### 384. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7165` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7165) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7165)

```diff
-           return `${gq} doesn't work from where you are.`;
+           return `${hb} doesn't work from where you are.`;
```

#### 385. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7169` → after: `L7169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7169) · [Before (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7169)

```diff
-           return `${gq} had a problem with that. Try again in a minute.`
+           return `${hb} had a problem with that. Try again in a minute.`
```

#### 386. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7195` → after: `L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7195) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7195)

```diff
-         }(Eq)) throw new Error(`AI key request to an unknown host for ${qq}`);
+         }(ub)) throw new Error(`AI key request to an unknown host for ${bb}`);
```

#### 387. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7204` → after: `L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7204) · [Before (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7204)

```diff
-         throw console.warn(`AI key request: ${qq} answered ${lq.status}`), new om(function(qq, Eq, gq) {
+         throw console.warn(`AI key request: ${bb} answered ${Ob.status}`), new KU(function(bb, ub, hb) {
```

#### 388. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7211` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7211) · [Before (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7211)

```diff
-           return Number.isFinite(gq) ? 1e3 * gq : Math.max(0, Date.parse(Eq) - Date.now()) || void 0
+           return Number.isFinite(hb) ? 1e3 * hb : Math.max(0, Date.parse(ub) - Date.now()) || void 0
```

#### 389. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7218` → after: `L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7218) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7218)

```diff
-             gq = "string" === typeof lq ? lq : qq
+             hb = "string" === typeof Ob ? Ob : bb
```

#### 390. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7267` → after: `L7267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7267) · [Before (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7267)

```diff
-         TYq: mq,
+         lBb: Ub,
```

#### 391. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7275)

```diff
-         const mq = null !== (gq = null === (Yq = qq.match(/```/g)) || void 0 === Yq ? void 0 : Yq.length) && void 0 !== gq ? gq : 0,
+         const Ub = null !== (hb = null === (Bb = bb.match(/```/g)) || void 0 === Bb ? void 0 : Bb.length) && void 0 !== hb ? hb : 0,
```

#### 392. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7288` → after: `L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7288) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7288)

```diff
-         written: xq ? Bq : void 0,
+         written: Lb ? Hb : void 0,
```

#### 393. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7300` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7300) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7300)

```diff
-       const Yq = null !== (gq = Eq.tools) && void 0 !== gq ? gq : [];
+       const Bb = null !== (hb = ub.tools) && void 0 !== hb ? hb : [];
```

#### 394. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7351` → after: `L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7351) · [Before (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7351)

```diff
-             models: (null !== (Eq = (await gq.json()).data) && void 0 !== Eq ? Eq : []).map((qq => ({
+             models: (null !== (ub = (await hb.json()).data) && void 0 !== ub ? ub : []).map((bb => ({
```

#### 395. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7378` → after: `L7378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7378) · [Before (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7378)

```diff
-           return await QO(null !== (lq = Oq.body) && void 0 !== lq ? lq : new ReadableStream, (Eq => {
+           return await CG(null !== (Ob = Gb.body) && void 0 !== Ob ? Ob : new ReadableStream, (ub => {
```

#### 396. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7383-L7384` → after: `L7383-L7384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7383-L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7383-L7384) · [Before (L7383-L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7383-L7384)

```diff
-             xq += null !== (lq = null !== (Oq = null === jq || void 0 === jq || null === (Bq = jq.delta) || void 0 === Bq ? void 0 : Bq.reasoning) && void 0 !== Oq ? Oq : null === jq || void 0 === jq || null === (Wq = jq.delta) || void 0 === Wq ? void 0 : Wq.reasoning_content) && … [truncated]
-             for (const qq of null !== (Hq = null === jq || void 0 === jq || null === (oq = jq.delta) || void 0 === oq ? void 0 : oq.tool_calls) && void 0 !== Hq ? Hq : []) {
+             Lb += null !== (Ob = null !== (Gb = null === Ab || void 0 === Ab || null === (Hb = Ab.delta) || void 0 === Hb ? void 0 : Hb.reasoning) && void 0 !== Gb ? Gb : null === Ab || void 0 === Ab || null === (wb = Ab.delta) || void 0 === wb ? void 0 : wb.reasoning_content) && … [truncated]
+             for (const bb of null !== (lb = null === Ab || void 0 === Ab || null === (Kb = Ab.delta) || void 0 === Kb ? void 0 : Kb.tool_calls) && void 0 !== lb ? lb : []) {
```

#### 397. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7397` → after: `L7397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7397) · [Before (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7397)

```diff
-             TYq: Aq,
+             lBb: Yb,
```

#### 398. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7417` → after: `L7417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7417) · [Before (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7417)

```diff
-         return await bm(tm, qq, (async qq => nm("openrouter", `${Wm.openrouter.baseUrl}/key`, {
+         return await xU(rU, bb, (async bb => DU("openrouter", `${wU.openrouter.baseUrl}/key`, {
```

#### 399. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7438` → after: `L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7438) · [Before (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7438)

```diff
-             models: (null !== (Eq = (await gq.json()).data) && void 0 !== Eq ? Eq : []).map((qq => ({
+             models: (null !== (ub = (await hb.json()).data) && void 0 !== ub ? ub : []).map((bb => ({
```

#### 400. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7471` → after: `L7471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7471) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7471)

```diff
-           await QO(null !== (Oq = mq.body) && void 0 !== Oq ? Oq : new ReadableStream, (Eq => {
+           await CG(null !== (Gb = Ub.body) && void 0 !== Gb ? Gb : new ReadableStream, (ub => {
```

#### 401. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7476-L7477` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7476-L7477) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7476-L7477)

```diff
-             if ("content_block_start" === Oq.type && "tool_use" === (null === (Yq = Oq.content_block) || void 0 === Yq ? void 0 : Yq.type)) Bq.set(null !== (Nq = Oq.index) && void 0 !== Nq ? Nq : Bq.size, {
-               name: null !== (aq = Oq.content_block.name) && void 0 !== aq ? aq : "",
+             if ("content_block_start" === Gb.type && "tool_use" === (null === (Bb = Gb.content_block) || void 0 === Bb ? void 0 : Bb.type)) Hb.set(null !== (Zb = Gb.index) && void 0 !== Zb ? Zb : Hb.size, {
+               name: null !== (Xb = Gb.content_block.name) && void 0 !== Xb ? Xb : "",
```

#### 402. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7482-L7483` → after: `L7482-L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7482-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7482-L7483) · [Before (L7482-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7482-L7483)

```diff
-               xq += null !== (Vq = null === (dq = Oq.delta) || void 0 === dq ? void 0 : dq.text) && void 0 !== Vq ? Vq : "", Aq += null !== (jq = null === (Hq = Oq.delta) || void 0 === Hq ? void 0 : Hq.thinking) && void 0 !== jq ? jq : "";
-               const qq = Bq.get(null !== (oq = Oq.index) && void 0 !== oq ? oq : -1);
+               Lb += null !== (pb = null === (ob = Gb.delta) || void 0 === ob ? void 0 : ob.text) && void 0 !== pb ? pb : "", Yb += null !== (Ab = null === (lb = Gb.delta) || void 0 === lb ? void 0 : lb.thinking) && void 0 !== Ab ? Ab : "";
+               const bb = Hb.get(null !== (Kb = Gb.index) && void 0 !== Kb ? Kb : -1);
```

#### 403. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7485` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7485) · [Before (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7485)

```diff
-               if (qq && "input_json_delta" === (null === (Pq = Oq.delta) || void 0 === Pq ? void 0 : Pq.type)) qq.args += null !== (Qq = Oq.delta.partial_json) && void 0 !== Qq ? Qq : ""
+               if (bb && "input_json_delta" === (null === (Wb = Gb.delta) || void 0 === Wb ? void 0 : Wb.type)) bb.args += null !== (Cb = Gb.delta.partial_json) && void 0 !== Cb ? Cb : ""
```

#### 404. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7501` → after: `L7501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7501) · [Before (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7501)

```diff
-             TYq: cq,
+             lBb: Sb,
```

#### 405. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7527` → after: `L7527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7527) · [Before (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7527)

```diff
-             models: (null !== (Eq = (await gq.json()).models) && void 0 !== Eq ? Eq : []).filter((qq => {
+             models: (null !== (ub = (await hb.json()).models) && void 0 !== ub ? ub : []).filter((bb => {
```

#### 406. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7550` → after: `L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7550) · [Before (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7550)

```diff
-           const mq = await nm("gemini", `${this.baseUrl}/models/${encodeURIComponent(qq)}:streamGenerateContent?alt=sse`, {
+           const Ub = await DU("gemini", `${this.baseUrl}/models/${encodeURIComponent(bb)}:streamGenerateContent?alt=sse`, {
```

#### 407. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7569` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7569) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7569)

```diff
-           return await QO(null !== (Oq = mq.body) && void 0 !== Oq ? Oq : new ReadableStream, (Eq => {
+           return await CG(null !== (Gb = Ub.body) && void 0 !== Gb ? Gb : new ReadableStream, (ub => {
```

#### 408. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7573` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7573) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7573)

```diff
-             for (const qq of null !== (Nq = null === Wq || void 0 === Wq || null === (aq = Wq.content) || void 0 === aq ? void 0 : aq.parts) && void 0 !== Nq ? Nq : []) {
+             for (const bb of null !== (Zb = null === wb || void 0 === wb || null === (Xb = wb.content) || void 0 === Xb ? void 0 : Xb.parts) && void 0 !== Zb ? Zb : []) {
```

#### 409. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7576-L7577` → after: `L7576-L7577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7576-L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7576-L7577) · [Before (L7576-L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7576-L7577)

```diff
-                 name: null !== (Vq = qq.functionCall.name) && void 0 !== Vq ? Vq : "",
-                 args: JSON.stringify(null !== (dq = qq.functionCall.args) && void 0 !== dq ? dq : {})
+                 name: null !== (pb = bb.functionCall.name) && void 0 !== pb ? pb : "",
+                 args: JSON.stringify(null !== (ob = bb.functionCall.args) && void 0 !== ob ? ob : {})
```

#### 410. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7581` → after: `L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7581) · [Before (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7581)

```diff
-                 Aq += null !== (jq = qq.text) && void 0 !== jq ? jq : ""
+                 Yb += null !== (Ab = bb.text) && void 0 !== Ab ? Ab : ""
```

#### 411. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7584)

```diff
-                 xq += null !== (Hq = qq.text) && void 0 !== Hq ? Hq : ""
+                 Lb += null !== (lb = bb.text) && void 0 !== lb ? lb : ""
```

#### 412. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7596` → after: `L7596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7596) · [Before (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7596)

```diff
-             TYq: cq,
+             lBb: Sb,
```

#### 413. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7621` → after: `L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7621) · [Before (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7621)

```diff
-           return new Tm("custom", null !== gq && void 0 !== gq ? gq : "", Eq)
+           return new tU("custom", null !== hb && void 0 !== hb ? hb : "", ub)
```

#### 414. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7749` → after: `L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7749) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7749)

```diff
-         name: null !== (Yq = null === lq || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : Eq,
+         name: null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Bb ? Bb : ub,
```

#### 415. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7773)

```diff
-       return null !== (Eq = qq.find((qq => "smart" === qq.tier))) && void 0 !== Eq ? Eq : qq[0]
+       return null !== (ub = bb.find((bb => "smart" === bb.tier))) && void 0 !== ub ? ub : bb[0]
```

#### 416. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7779)

```diff
-       return null !== (Eq = qq.name) && void 0 !== Eq ? Eq : Hm(qq.provider, qq.baseUrl, gq)
+       return null !== (ub = bb.name) && void 0 !== ub ? ub : lU(bb.provider, bb.baseUrl, hb)
```

#### 417. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7796)

```diff
-         return new URL(null !== (Eq = qq.baseUrl) && void 0 !== Eq ? Eq : "").protocol.startsWith("http")
+         return new URL(null !== (ub = bb.baseUrl) && void 0 !== ub ? ub : "").protocol.startsWith("http")
```

#### 418. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7806` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7806) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7806)

```diff
-         return console.warn(`AI Helper: no ${qq}`, Eq), null
+         return console.warn(`AI Helper: no ${bb}`, ub), null
```

#### 419. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7818` → after: `L7818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7818) · [Before (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7818)

```diff
-         this.state = null !== Yq && void 0 !== Yq && Yq.remember ? null !== lq && void 0 !== lq && lq.remember ? lq : {
+         this.state = null !== Bb && void 0 !== Bb && Bb.remember ? null !== Ob && void 0 !== Ob && Ob.remember ? Ob : {
```

#### 420. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7821` → after: `L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7821) · [Before (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7821)

```diff
-         } : null !== (gq = null !== Yq && void 0 !== Yq ? Yq : lq) && void 0 !== gq ? gq : Km, this.ownsRemembered = this.state.remember && null !== lq
+         } : null !== (hb = null !== Bb && void 0 !== Bb ? Bb : Ob) && void 0 !== hb ? hb : fU, this.ownsRemembered = this.state.remember && null !== Ob
```

#### 421. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7838-L7839` → after: `L7838-L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7838-L7839) · [Before (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7838-L7839)

```diff
-           xq = "custom" !== qq.provider ? qq.provider : null !== (Yq = null === mq || void 0 === mq ? void 0 : mq.id) && void 0 !== Yq ? Yq : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           Aq = void 0 === Eq ? sm(qq.models) : null !== (lq = qq.models.find((qq => qq.id === Eq))) && void 0 !== lq ? lq : qq.models[0],
+           Lb = "custom" !== bb.provider ? bb.provider : null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.id) && void 0 !== Bb ? Bb : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           Yb = void 0 === ub ? yU(bb.models) : null !== (Ob = bb.models.find((bb => bb.id === ub))) && void 0 !== Ob ? Ob : bb.models[0],
```

#### 422. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7854` → after: `L7854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7854) · [Before (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7854)

```diff
-           Nq = Wq ? this.state.keys.filter((qq => qq.id !== xq)).map((qq => qq.id === gq ? uq : qq)) : Bq ? [...this.state.keys, uq] : this.state.keys.map((qq => qq.id === xq ? uq : qq)),
+           Zb = wb ? this.state.keys.filter((bb => bb.id !== Lb)).map((bb => bb.id === hb ? ab : bb)) : Hb ? [...this.state.keys, ab] : this.state.keys.map((bb => bb.id === Lb ? ab : bb)),
```

#### 423. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7873)

```diff
-             return "" === gq ? lq : {
+             return "" === hb ? Ob : {
```

#### 424. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7968` → after: `L7968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L7968) · [Before (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L7968)

```diff
-           Yq = (null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.keys) && void 0 !== Eq ? Eq : []).filter((qq => this.state.keys.every((Eq => !Cm(Eq, qq)))));
+           Bb = (null !== (ub = null === hb || void 0 === hb ? void 0 : hb.keys) && void 0 !== ub ? ub : []).filter((bb => this.state.keys.every((ub => !kU(ub, bb)))));
```

#### 425. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8012` → after: `L8012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8012) · [Before (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8012)

```diff
-           return Array.isArray(Eq.keys) && Eq.keys.every(Im) ? Eq : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(ub.keys) && ub.keys.every(TU) ? ub : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 426. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8054` → after: `L8054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8054) · [Before (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8054)

```diff
-       const xq = null !== (gq = null === mq || void 0 === mq ? void 0 : mq.trim()) && void 0 !== gq ? gq : "";
+       const Lb = null !== (hb = null === Ub || void 0 === Ub ? void 0 : Ub.trim()) && void 0 !== hb ? hb : "";
```

#### 427. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8084` → after: `L8084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8084) · [Before (L8084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8084)

```diff
-               return 0 !== (null !== (gq = null === (Yq = Eq.tools) || void 0 === Yq ? void 0 : Yq.length) && void 0 !== gq ? gq : 0) && qq instanceof om && "failed" === qq.problem && (400 === qq.status || 404 === qq.status && /\btool/i.test(null !== (lq = qq.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (hb = null === (Bb = ub.tools) || void 0 === Bb ? void 0 : Bb.length) && void 0 !== hb ? hb : 0) && bb instanceof KU && "failed" === bb.problem && (400 === bb.status || 404 === bb.status && /\btool/i.test(null !== (Ob = bb.detail) && void 0 != … [truncated]
```

#### 428. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8099` → after: `L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8099) · [Before (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8099)

```diff
-         return await (Aq = Math.min(null !== (mq = null !== (xq = Bq.retryAfterMs) && void 0 !== xq ? xq : gq.retryWaitMs) && void 0 !== mq ? mq : 3e3, 2e4), cq = gq.signal, new Promise(((qq, Eq) => {
+         return await (Yb = Math.min(null !== (Ub = null !== (Lb = Hb.retryAfterMs) && void 0 !== Lb ? Lb : hb.retryWaitMs) && void 0 !== Ub ? Ub : 3e3, 2e4), Sb = hb.signal, new Promise(((bb, ub) => {
```

#### 429. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8111` → after: `L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8111) · [Before (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8111)

```diff
-     var Yx = gq(3504);
+     var hL = hb(3425);
```

#### 430. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8228` → after: `L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8228) · [Before (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8228)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${Px((null!==(Eq=qq.availableFrom)&&void 0!==Eq?Eq:gq)-gq)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${KL((null!==(ub=bb.availableFrom)&&void 0!==ub?ub:hb)-hb)} to go.`;
```

#### 431. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8230` → after: `L8230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8230) · [Before (L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8230)

```diff
-           return qq.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(qq,Eq){const gq=Math.ceil((qq-Eq)/36e5);if(gq<=24)return gq<=1?"within the hour":`in ${gq} hours`;return`in ${Px(qq-Eq)}`}(qq.resetsAt,gq)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return bb.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(bb,ub){const hb=Math.ceil((bb-ub)/36e5);if(hb<=24)return hb<=1?"within the hour":`in ${hb} hours`;return`in ${KL(bb-ub)}`}(bb.resetsAt,hb)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 432. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8261` → after: `L8261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8261) · [Before (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8261)

```diff
-       return `Usage left: ${qq.left}`
+       return `Usage left: ${bb.left}`
```

#### 433. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8265-L8266` → after: `L8265-L8266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8265-L8266) · [Before (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8265-L8266)

```diff
-       const Eq = Math.max(1, Math.ceil(qq / um.k));
-       return 1 === Eq ? "1 day" : `${Eq} days`
+       const ub = Math.max(1, Math.ceil(bb / aU.g));
+       return 1 === ub ? "1 day" : `${ub} days`
```

#### 434. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8271` → after: `L8271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8271) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8271)

```diff
-       if (gq) return `${gq} Bot.xd is answering instead.`;
+       if (hb) return `${hb} Bot.xd is answering instead.`;
```

#### 435. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8290` → after: `L8290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8290) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8290)

```diff
-           return qq.messages.length > 12 || qq.messages.some((qq => qq.content.length > Fl)) || (null !== (Eq = null === (gq = qq.toolsJson) || void 0 === gq ? void 0 : gq.length) && void 0 !== Eq ? Eq : 0) > 1e5 || (null !== (Yq = null === (lq = qq.request) || void 0 === lq ? vo … [truncated]
+           return bb.messages.length > 12 || bb.messages.some((bb => bb.content.length > yO)) || (null !== (ub = null === (hb = bb.toolsJson) || void 0 === hb ? void 0 : hb.length) && void 0 !== ub ? ub : 0) > 1e5 || (null !== (Bb = null === (Ob = bb.request) || void 0 === Ob ? vo … [truncated]
```

#### 436. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8315-L8317` → after: `L8315-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8315-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8315-L8317) · [Before (L8315-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8315-L8317)

```diff
-     var rx = gq(31),
-       vx = gq(24),
-       hx = gq(2235);
+     var rL = hb(16),
+       jL = hb(13),
+       nL = hb(2142);
```

#### 437. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8321` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8321) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8321)

```diff
-       nx ??= Promise.resolve().then((() => gq(2250))), nx.then((qq => {
+       DL ??= Promise.resolve().then((() => hb(2155))), DL.then((bb => {
```

#### 438. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8343` → after: `L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8343) · [Before (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8343)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => gq(1336))), gq.e(347).then((() => gq(61153)))]);
+         }] = await Promise.all([Promise.resolve().then((() => hb(1249))), hb.e(347).then((() => hb(60614)))]);
```

#### 439. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8350` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8350) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8350)

```diff
-                   rx.i.TV("OpenStoreFromCodeEditor"), (0, hx.n)({
+                   rL.i.vp("OpenStoreFromCodeEditor"), (0, nL.o)({
```

#### 440. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8356` → after: `L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8356) · [Before (L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8356)

```diff
-                     null === vx.b.get("openEverythingMenuName") && (rx.i.unsubscribe(qq), ux.refresh())
+                     null === jL.d.get("openEverythingMenuName") && (rL.i.unsubscribe(bb), SL.refresh())
```

#### 441. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8539` → after: `L8539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8539) · [Before (L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8539)

```diff
-       return qq.length > 4 && qq.endsWith("ies") ? `${qq.slice(0,-3)}y` : qq.length > 3 && qq.endsWith("s") && !qq.endsWith("ss") ? qq.slice(0, -1) : qq
+       return bb.length > 4 && bb.endsWith("ies") ? `${bb.slice(0,-3)}y` : bb.length > 3 && bb.endsWith("s") && !bb.endsWith("ss") ? bb.slice(0, -1) : bb
```

#### 442. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8555` → after: `L8555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8555) · [Before (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8555)

```diff
-         lq = Rx(Eq ? qq : (0, NE.t)(qq, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, NE.l, (() => "projectRequire"))),
+         Ob = PL(ub ? bb : (0, Zu.v)(bb, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, Zu.m, (() => "projectRequire"))),
```

#### 443. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8558` → after: `L8558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8558) · [Before (L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8558)

```diff
-         for (const lq of (0, NE.d)(qq, /(global|window|document|process|require)\b\s*[.([]/g, NE.l)) Yq.has(lq[1]) || Oq.has(lq[1]) || (Yq.add(lq[1]), gq.push(`Line ${Eq+1} uses "${lq[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const Ob of (0, Zu.f)(bb, /(global|window|document|process|require)\b\s*[.([]/g, Zu.m)) Bb.has(Ob[1]) || Gb.has(Ob[1]) || (Bb.add(Ob[1]), hb.push(`Line ${ub+1} uses "${Ob[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 444. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8573` → after: `L8573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8573) · [Before (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8573)

```diff
-         const Nq = [null !== (Oq = Eq[Yq - 2]) && void 0 !== Oq ? Oq : "", null !== (mq = Eq[Yq - 1]) && void 0 !== mq ? mq : "", qq.slice(0, cq)].join(" ");
+         const Zb = [null !== (Gb = ub[Bb - 2]) && void 0 !== Gb ? Gb : "", null !== (Ub = ub[Bb - 1]) && void 0 !== Ub ? Ub : "", bb.slice(0, Sb)].join(" ");
```

#### 445. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8575-L8576` → after: `L8575-L8576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8575-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8575-L8576) · [Before (L8575-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8575-L8576)

```diff
-         const aq = null !== (xq = null === (Aq = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Bq)) || void 0 === Aq ? void 0 : Aq[1]) && void 0 !== xq ? xq : "coins";
-         gq.push(`Line ${Yq+1} sets the saved "${aq}" back to ${Wq} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${aq}") is null.`)
+         const Xb = null !== (Lb = null === (Yb = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Hb)) || void 0 === Yb ? void 0 : Yb[1]) && void 0 !== Lb ? Lb : "coins";
+         hb.push(`Line ${Bb+1} sets the saved "${Xb}" back to ${wb} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${Xb}") is null.`)
```

#### 446. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8582` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8582) · [Before (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8582)

```diff
-       const Yq = null !== (Eq = null === (gq = qq.split("### Parameters:")[1]) || void 0 === gq ? void 0 : gq.split("###")[0]) && void 0 !== Eq ? Eq : "",
+       const Bb = null !== (ub = null === (hb = bb.split("### Parameters:")[1]) || void 0 === hb ? void 0 : hb.split("###")[0]) && void 0 !== ub ? ub : "",
```

#### 447. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8630-L8632` → after: `L8630-L8632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8630-L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8630-L8632) · [Before (L8630-L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8630-L8632)

```diff
-         lq = `\\((?:[^()]*[\\s,])?${Yq}(?![\\w$])[^()]*\\)`,
-         Oq = new RegExp(`(?:const|let|var)\\s+${Yq}(?![\\w$])|${Yq}\\s*(?:\\+?=(?![=>])|=>)|${lq}\\s*=>|function\\s*[\\w$]*\\s*${lq}`, "g");
-       return 1 === (0, NE.d)(qq, Oq, NE.l).length ? null === (gq = new RegExp(`\\b(?:const|let|var)\\s+${Yq}\\s*=\\s*${wx}\\s*(?:;|//|$)`, "m").exec(qq)) || void 0 === gq ? void 0 : gq[1] : void 0
+         Ob = `\\((?:[^()]*[\\s,])?${Bb}(?![\\w$])[^()]*\\)`,
+         Gb = new RegExp(`(?:const|let|var)\\s+${Bb}(?![\\w$])|${Bb}\\s*(?:\\+?=(?![=>])|=>)|${Ob}\\s*=>|function\\s*[\\w$]*\\s*${Ob}`, "g");
+       return 1 === (0, Zu.f)(bb, Gb, Zu.m).length ? null === (hb = new RegExp(`\\b(?:const|let|var)\\s+${Bb}\\s*=\\s*${FL}\\s*(?:;|//|$)`, "m").exec(bb)) || void 0 === hb ? void 0 : hb[1] : void 0
```

#### 448. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8641-L8642` → after: `L8641-L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8641-L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8641-L8642) · [Before (L8641-L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8641-L8642)

```diff
-           Yq = -1 === gq ? Eq : Eq.slice(0, gq + 1);
-         return Yq.length > 110 ? `${Yq.slice(0,107)}...` : Yq
+           Bb = -1 === hb ? ub : ub.slice(0, hb + 1);
+         return Bb.length > 110 ? `${Bb.slice(0,107)}...` : Bb
```

#### 449. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8644` → after: `L8644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8644) · [Before (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8644)

```diff
-       return Yq = "api" === qq ? `api.${Eq}(${Xx(gq).join(", ")})${lq?` \u2014 ${lq}`:""}` : "callback" === qq ? `${Eq}(${Xx(gq).join(", ")})${lq?` \u2014 ${lq}`:""}` : "clientOption" === qq ? `${Eq}: ${function(qq){var Eq,gq;return null!==(Eq=null===(gq=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return Bb = "api" === bb ? `api.${ub}(${VL(hb).join(", ")})${Ob?` \u2014 ${Ob}`:""}` : "callback" === bb ? `${ub}(${VL(hb).join(", ")})${Ob?` \u2014 ${Ob}`:""}` : "clientOption" === bb ? `${ub}: ${function(bb){var ub,hb;return null!==(ub=null===(hb=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 450. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8646)

```diff
-         Eq.map((qq => `"${qq}"`)).join(" or ")
+         ub.map((bb => `"${bb}"`)).join(" or ")
```

#### 451. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8648` → after: `L8648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8648) · [Before (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8648)

```diff
-       The closest name is "${Eq[0]}", which may be something
+       The closest name is "${ub[0]}", which may be something
```

#### 452. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8650)

```diff
-       `}function EA(qq){return qq.split("\n").slice(1).map((qq=>qq.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((qq=>""!==qq&&!qq.startsWith("#")))}class gA{constructor(qq){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function bY(bb){return bb.split("\n").slice(1).map((bb=>bb.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((bb=>""!==bb&&!bb.startsWith("#")))}class uY{constructor(bb){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 453. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8654)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Eq.push({name:gq,text:lq})}return Eq}(gq))Eq.push(Ix(qq,Yq,lq))};gq("api",qq.apiReference),gq("callback",qq.callbacks),gq("clientOption",qq.clientOptions),gq("snippet",qq.snippets),gq("howTo",qq.howTo);const Yq=function(){const qq … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();ub.push({name:hb,text:Ob})}return ub}(hb))ub.push(TL(bb,Bb,Ob))};hb("api",bb.apiReference),hb("callback",bb.callbacks),hb("clientOption",bb.clientOptions),hb("snippet",bb.snippets),hb("howTo",bb.howTo);const Bb=function(){const bb … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8665-L8666` → after: `L8665-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8665-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8665-L8666) · [Before (L8665-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8665-L8666)

```diff
-       n\ nUsage: \`${qq.signature}\`\n\n\`\`\`js\n${qq.example}\n\`\`\``)),
-   Eq = WY.map((qq => `## ${qq.name}\nPrefab (${qq.kind}, ${qq.category}): put in with use_prefab. ${nY(qq,!1)}`));
+       n\ nUsage: \`${bb.signature}\`\n\n\`\`\`js\n${bb.example}\n\`\`\``)),
+   ub = wB.map((bb => `## ${bb.name}\nPrefab (${bb.kind}, ${bb.category}): put in with use_prefab. ${xB(bb,!1)}`));
```

#### 455. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8668-L8669` → after: `L8668-L8669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8668-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8668-L8669) · [Before (L8668-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8668-L8669)

```diff
-     helpers: `# Ready-made functions\n\n${qq.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${Eq.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${bb.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${ub.join("\n\n")}\n`
```

#### 456. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8677` → after: `L8677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8677) · [Before (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8677)

```diff
-     this.wordCounts.set(qq, (null !== (lq = this.wordCounts.get(qq)) && void 0 !== lq ? lq : 0) + 1)
+     this.wordCounts.set(bb, (null !== (Ob = this.wordCounts.get(bb)) && void 0 !== Ob ? Ob : 0) + 1)
```

#### 457. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8682` → after: `L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8682) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8682)

```diff
-   const Yq = null !== (Eq = null === (gq = qq.split("## Mob Variations")[1]) || void 0 === gq ? void 0 : gq.split("```")[1]) && void 0 !== Eq ? Eq : "",
+   const Bb = null !== (ub = null === (hb = bb.split("## Mob Variations")[1]) || void 0 === hb ? void 0 : hb.split("```")[1]) && void 0 !== ub ? ub : "",
```

#### 458. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8705)

```diff
-       return null !== (Eq = qq[1]) && void 0 !== Eq ? Eq : qq[2]
+       return null !== (ub = bb[1]) && void 0 !== ub ? ub : bb[2]
```

#### 459. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8712)

```diff
-     for (const lq of (0, NE.d)(qq, /([\w$]+)\s*\(/g, NE.l)) {
+     for (const Ob of (0, Zu.f)(bb, /([\w$]+)\s*\(/g, Zu.m)) {
```

#### 460. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8716)

```diff
-       Oq.has(mq) || Yq.has(mq) || xq || "api" !== (null === (gq = this.byName.get(mq)) || void 0 === gq ? void 0 : gq.kind) || Oq.set(mq, `Line ${Eq+1} calls ${mq} without "api.", so it throws there. Did you mean api.${mq}?`)
+       Gb.has(Ub) || Bb.has(Ub) || Lb || "api" !== (null === (hb = this.byName.get(Ub)) || void 0 === hb ? void 0 : hb.kind) || Gb.set(Ub, `Line ${ub+1} calls ${Ub} without "api.", so it throws there. Did you mean api.${Ub}?`)
```

#### 461. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8725-L8726` → after: `L8725-L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8725-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8725-L8726) · [Before (L8725-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8725-L8726)

```diff
-     const Eq = this.find(qq.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((qq => "api" === qq.kind)).slice(0, 2).map((qq => `api.${qq.name}`));
-     return `api.${qq} doesn't exist.${Eq.length?` Did you mean ${Eq.join(" or ")}?`:""}`
+     const ub = this.find(bb.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((bb => "api" === bb.kind)).slice(0, 2).map((bb => `api.${bb.name}`));
+     return `api.${bb} doesn't exist.${ub.length?` Did you mean ${ub.join(" or ")}?`:""}`
```

#### 462. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8746` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8746) · [Before (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8746)

```diff
-         Wq = Bq ? null === (Aq = new RegExp(`(?:^|[{,])\\s*${Bq.replaceAll("$","\\$")}\\s*:\\s*${wx}`, "m").exec(qq)) || void 0 === Aq ? void 0 : Aq[1] : void 0,
+         wb = Hb ? null === (Yb = new RegExp(`(?:^|[{,])\\s*${Hb.replaceAll("$","\\$")}\\s*:\\s*${FL}`, "m").exec(bb)) || void 0 === Yb ? void 0 : Yb[1] : void 0,
```

#### 463. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8748-L8749` → after: `L8748-L8749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8748-L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8748-L8749) · [Before (L8748-L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8748-L8749)

```diff
-         aq = null !== (cq = null === (uq = new RegExp(`\\?\\s*${wx}\\s*:\\s*${wx}$`).exec(Yq)) || void 0 === uq ? void 0 : uq.slice(1)) && void 0 !== cq ? cq : [];
-       for (const qq of [null !== (Vq = null !== Wq && void 0 !== Wq ? Wq : Nq) && void 0 !== Vq ? Vq : Yq, ...aq]) {
+         Xb = null !== (Sb = null === (ab = new RegExp(`\\?\\s*${FL}\\s*:\\s*${FL}$`).exec(Bb)) || void 0 === ab ? void 0 : ab.slice(1)) && void 0 !== Sb ? Sb : [];
+       for (const bb of [null !== (pb = null !== wb && void 0 !== wb ? wb : Zb) && void 0 !== pb ? pb : Bb, ...Xb]) {
```

#### 464. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8757` → after: `L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8757) · [Before (L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8757)

```diff
-   return [...gq].map((qq => `"${qq}" isn't an item or block name.${qA(this.suggestNames(qq))}`))
+   return [...hb].map((bb => `"${bb}" isn't an item or block name.${RL(this.suggestNames(bb))}`))
```

#### 465. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8772` → after: `L8772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8772) · [Before (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8772)

```diff
-       return `"${Eq}" isn't a block or item name, so comparing with it is never true. Did you mean "${gq}"?`
+       return `"${ub}" isn't a block or item name, so comparing with it is never true. Did you mean "${hb}"?`
```

#### 466. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8777-L8778` → after: `L8777-L8778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8777-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8777-L8778) · [Before (L8777-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8777-L8778)

```diff
-       gq = this.blockNames.has(Eq) || !this.itemAndBlockNames.includes(Eq) ? void 0 : [`Block of ${Eq}`, `${Eq} Block`].find((qq => this.blockNames.has(qq)));
-     !gq || qq.includes(`"${gq}"`) || qq.includes(`'${gq}'`) || mq.set(Eq, gq)
+       hb = this.blockNames.has(ub) || !this.itemAndBlockNames.includes(ub) ? void 0 : [`Block of ${ub}`, `${ub} Block`].find((bb => this.blockNames.has(bb)));
+     !hb || bb.includes(`"${hb}"`) || bb.includes(`'${hb}'`) || Ub.set(ub, hb)
```

#### 467. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8782` → after: `L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8782) · [Before (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8782)

```diff
-     return `"${Eq}" is an item, not a block, so no block is ever called that. Did you mean "${gq}"?`
+     return `"${ub}" is an item, not a block, so no block is ever called that. Did you mean "${hb}"?`
```

#### 468. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8799-L8800` → after: `L8799-L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8799-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8799-L8800) · [Before (L8799-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8799-L8800)

```diff
-       } : Yq.names.length > 0 || Yq.isDecided ? Yq : {
-         names: gq.length <= 2 ? gq : [],
+       } : Bb.names.length > 0 || Bb.isDecided ? Bb : {
+         names: hb.length <= 2 ? hb : [],
```

#### 469. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8804)

```diff
-     return `"${qq}" isn't a block or item name, so comparing a block with it is never true.${qA(lq)}`
+     return `"${bb}" isn't a block or item name, so comparing a block with it is never true.${RL(Ob)}`
```

#### 470. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8819-L8820` → after: `L8819-L8820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8819-L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8819-L8820) · [Before (L8819-L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8819-L8820)

```diff
-           name: null !== (lq = gq[1]) && void 0 !== lq ? lq : gq[2],
-           body: qq.slice(gq.index, null !== (Oq = null === (mq = Eq[Yq + 1]) || void 0 === mq ? void 0 : mq.index) && void 0 !== Oq ? Oq : qq.length)
+           name: null !== (Ob = hb[1]) && void 0 !== Ob ? Ob : hb[2],
+           body: bb.slice(hb.index, null !== (Gb = null === (Ub = ub[Bb + 1]) || void 0 === Ub ? void 0 : Ub.index) && void 0 !== Gb ? Gb : bb.length)
```

#### 471. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8828` → after: `L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8828) · [Before (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8828)

```diff
-         if (qq.text.includes(`"${Yq}"`)) continue;
+         if (bb.text.includes(`"${Bb}"`)) continue;
```

#### 472. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8830-L8831` → after: `L8830-L8831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8830-L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8830-L8831) · [Before (L8830-L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8830-L8831)

```diff
-           mq = Oq.length > 0 ? `Did you mean ${Oq.map((qq=>`"${qq}"`)).join(" or ")}?` : /Return false/i.test(qq.text) ? `To stop it, return false instead of "${Yq}".` : "Check Show Docs for what it can return.";
-         Eq.add(`${gq} can't use "${Yq}" to stop anything. ${mq}`)
+           Ub = Gb.length > 0 ? `Did you mean ${Gb.map((bb=>`"${bb}"`)).join(" or ")}?` : /Return false/i.test(bb.text) ? `To stop it, return false instead of "${Bb}".` : "Check Show Docs for what it can return.";
+         ub.add(`${hb} can't use "${Bb}" to stop anything. ${Ub}`)
```

#### 473. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8853` → after: `L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8853) · [Before (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8853)

```diff
-     Oq = null !== (Eq = this.namesByLowerCase.get(gq)) && void 0 !== Eq ? Eq : this.namesByLowerCase.get(lq);
+     Gb = null !== (ub = this.namesByLowerCase.get(hb)) && void 0 !== ub ? ub : this.namesByLowerCase.get(Ob);
```

#### 474. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8885` → after: `L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8885) · [Before (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8885)

```diff
-       qq && Yq.set(qq, (null !== (gq = Yq.get(qq)) && void 0 !== gq ? gq : 0) + Eq)
+       bb && Bb.set(bb, (null !== (hb = Bb.get(bb)) && void 0 !== hb ? hb : 0) + ub)
```

#### 475. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8891` → after: `L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8891) · [Before (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8891)

```diff
-   for (const Bq of `${qq}\n${Eq}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const Hb of `${bb}\n${ub}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 476. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8893` → after: `L8893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8893) · [Before (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8893)

```diff
-     lq(this.byName.get(null !== (xq = null !== (Aq = Bq[1]) && void 0 !== Aq ? Aq : Bq[2]) && void 0 !== xq ? xq : Bq[3]), Bq[1] || Bq[2] ? 4 : 2)
+     Ob(this.byName.get(null !== (Lb = null !== (Yb = Hb[1]) && void 0 !== Yb ? Yb : Hb[2]) && void 0 !== Lb ? Lb : Hb[3]), Hb[1] || Hb[2] ? 4 : 2)
```

#### 477. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8895` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8895) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8895)

```diff
-   for (const Bq of (0, NE.d)(Eq, /([A-Za-z_$][\w$]*)\s*\(/g, NE.l)) {
+   for (const Hb of (0, Zu.f)(ub, /([A-Za-z_$][\w$]*)\s*\(/g, Zu.m)) {
```

#### 478. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8904-L8905` → after: `L8904-L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8904-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8904-L8905) · [Before (L8904-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8904-L8905)

```diff
-       const gq = 1 / Math.log2(2 + (null !== (uq = this.wordCounts.get(Eq)) && void 0 !== uq ? uq : 0));
-       Bq.nameWords.has(Eq) ? qq += 3 * gq : Bq.textWords.has(Eq) && (qq += gq)
+       const hb = 1 / Math.log2(2 + (null !== (ab = this.wordCounts.get(ub)) && void 0 !== ab ? ab : 0));
+       Hb.nameWords.has(ub) ? bb += 3 * hb : Hb.textWords.has(ub) && (bb += hb)
```

#### 479. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8921` → after: `L8921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8921) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8921)

```diff
-   return null !== (Eq = null !== (gq = this.byName.get(Yq)) && void 0 !== gq ? gq : this.sections.find((qq => qq.name.toLowerCase() === lq))) && void 0 !== Eq ? Eq : null
+   return null !== (ub = null !== (hb = this.byName.get(Bb)) && void 0 !== hb ? hb : this.sections.find((bb => bb.name.toLowerCase() === Ob))) && void 0 !== ub ? ub : null
```

#### 480. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8958` → after: `L8958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8958) · [Before (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8958)

```diff
-         Yq = new RegExp(`(^|[^\\w$.])${gq}\\s*\\(`),
+         Bb = new RegExp(`(^|[^\\w$.])${hb}\\s*\\(`),
```

#### 481. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8984` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8984) · [Before (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8984)

```diff
-         when: `in ${gq[1]}`,
+         when: `in ${hb[1]}`,
```

#### 482. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8991` → after: `L8991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8991) · [Before (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8991)

```diff
-     xq = Oq && Eq ? ` ${Oq}` : "",
+     Lb = Gb && ub ? ` ${Gb}` : "",
```

#### 483. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8995-L8996` → after: `L8995-L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8995-L8996) · [Before (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8995-L8996)

```diff
-     const qq = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (cq = null === (uq = lq[0]) || void 0 === uq ? void 0 : uq.trim()) && void 0 !== cq ? cq : ""),
-       Eq = null === (Bq = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (Wq = null === (Nq = lq[1]) || void 0 === Nq ? void 0 : Nq.trim()) && void 0 !== Wq ? Wq : "")) || void 0 === Bq ? void 0 : Bq[1],
+     const bb = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Sb = null === (ab = Ob[0]) || void 0 === ab ? void 0 : ab.trim()) && void 0 !== Sb ? Sb : ""),
+       ub = null === (Hb = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (wb = null === (Zb = Ob[1]) || void 0 === Zb ? void 0 : Zb.trim()) && void 0 !== wb ? wb : "")) || void 0 === Hb ? void 0 : Hb[1],
```

#### 484. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L8999)

```diff
-         return /^(a|an|the)\s/i.test(Eq) || !/^[a-z]/i.test(Eq) ? Eq : `${/^[aeiou]/i.test(Eq)?"an":"a"} ${Eq}`
+         return /^(a|an|the)\s/i.test(ub) || !/^[a-z]/i.test(ub) ? ub : `${/^[aeiou]/i.test(ub)?"an":"a"} ${ub}`
```

#### 485. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9001` → after: `L9001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L9001) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L9001)

```diff
-     return gq && null !== qq && void 0 !== qq && qq[3] ? `api.${Aq[1]} needs ${gq}, but it got ${qq[3]}${xq}.` : qq ? `api.${Aq[1]} couldn't use its ${aq=Number(qq[1]),1===aq?"first":2===aq?"second":3===aq?"third":4===aq?"fourth":`#${aq}`} argument${xq}.${gq?` It needs ${gq}.`:"" … [truncated]
+     return hb && null !== bb && void 0 !== bb && bb[3] ? `api.${Yb[1]} needs ${hb}, but it got ${bb[3]}${Lb}.` : bb ? `api.${Yb[1]} couldn't use its ${Xb=Number(bb[1]),1===Xb?"first":2===Xb?"second":3===Xb?"third":4===Xb?"fourth":`#${Xb}`} argument${Lb}.${hb?` It needs ${hb}.`:"" … [truncated]
```

#### 486. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L9005)

```diff
-   if (Vq) return Vq[1] ? `${Vq[1]} isn't a function${xq}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${xq}. Check each name it calls is spelt exactly right.`;
+   if (pb) return pb[1] ? `${pb[1]} isn't a function${Lb}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${Lb}. Check each name it calls is spelt exactly right.`;
```

#### 487. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9007` → after: `L9007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L9007) · [Before (L9007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L9007)

```diff
-   if (dq) return `${dq[1]} isn't defined${xq}. Check the spelling, or create it before using it.`;
+   if (ob) return `${ob[1]} isn't defined${Lb}. Check the spelling, or create it before using it.`;
```

#### 488. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9011-L9012` → after: `L9011-L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9011-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L9011-L9012) · [Before (L9011-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L9011-L9012)

```diff
-     const qq = null !== (Hq = jq[1]) && void 0 !== Hq ? Hq : jq[3];
-     return `Your code tried to read${qq?` .${qq}`:" something"} from ${jq[2]}${xq}: a value it expected wasn't there.`
+     const bb = null !== (lb = Ab[1]) && void 0 !== lb ? lb : Ab[3];
+     return `Your code tried to read${bb?` .${bb}`:" something"} from ${Ab[2]}${Lb}: a value it expected wasn't there.`
```

#### 489. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9014` → after: `L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L9014) · [Before (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L9014)

```diff
-   return `Your code hit an error${xq}: ${mq.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${Lb}: ${Ub.replace(/^\w*Error:\s*/,"")}`
```

#### 490. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9093` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L9093) · [Before (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L9093)

```diff
-   return qq.replaceAll(`"${Eq}"`, `"${gq}"`).replaceAll(`'${Eq}'`, `'${gq}'`)
+   return bb.replaceAll(`"${ub}"`, `"${hb}"`).replaceAll(`'${ub}'`, `'${hb}'`)
```

#### 491. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9097` → after: `L9097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/89.js#L9097) · [Before (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/89.js#L9097)

```diff
-   const gq = qq => vq().isIdentifier(qq) ? qq.text === Eq : qq.elements.some((qq => !vq().isOmittedExpression(qq) && gq(qq.name))),
+   const hb = bb => nb().isIdentifier(bb) ? bb.text === ub : bb.elements.some((bb => !nb().isOmittedExpression(bb) && hb(bb.name))),
```
