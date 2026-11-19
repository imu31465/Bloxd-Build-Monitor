export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39380: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => bD
    });
    var ID = cD(38048),
      pD = cD(39174),
      iD = cD(39351),
      fD = {};
    class bD {
      constructor(DD) {
        this.attachedToElement = !1, this.attached = {}, this.camera = DD, this.checkInputs = () => {}
      }
      add(DD) {
        const CD = DD.getSimpleName();
        this.attached[CD] ? ID.e.Warn("camera input of type " + CD + " already exists on camera") : (this.attached[CD] = DD, DD.camera = this.camera, DD.checkInputs && (this.checkInputs = this._addCheckInputs(DD.checkInputs.bind(DD))), this.attachedToElement && DD.attachControl(this.noPreventDefault))
      }
      remove(DD) {
        for (const CD in this.attached) {
          const cD = this.attached[CD];
          if (cD === DD) return cD.detachControl(), cD.camera = null, delete this.attached[CD], void this.rebuildInputCheck()
        }
      }
      removeByType(DD) {
        for (const CD in this.attached) {
          const cD = this.attached[CD];
          cD.getClassName() === DD && (cD.detachControl(), cD.camera = null, delete this.attached[CD], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(DD) {
        const CD = this.checkInputs;
        return () => {
          CD(), DD()
        }
      }
      attachInput(DD) {
        this.attachedToElement && DD.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          DD = !iD.c.ForceAttachControlToAlwaysPreventDefault && DD, this.attachedToElement = !0, this.noPreventDefault = DD;
          for (const CD in this.attached) this.attached[CD].attachControl(DD)
        }
      }
      detachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const CD in this.attached) this.attached[CD].detachControl(), DD && (this.attached[CD].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const DD in this.attached) {
          const CD = this.attached[DD];
          CD.checkInputs && (this.checkInputs = this._addCheckInputs(CD.checkInputs.bind(CD)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(DD) {
        const CD = {};
        for (const cD in this.attached) {
          const DD = this.attached[cD],
            ID = pD.d.Serialize(DD);
          CD[DD.getClassName()] = ID
        }
        DD.inputsmgr = CD
      }
      parse(DD) {
        const CD = DD.inputsmgr;
        if (CD) {
          this.clear();
          for (const DD in CD) {
            const cD = fD[DD];
            if (cD) {
              const ID = CD[DD],
                iD = pD.d.Parse((() => new cD), ID, null);
              this.add(iD)
            }
          }
        } else
          for (const cD in this.attached) {
            const CD = fD[this.attached[cD].getClassName()];
            if (CD) {
              const ID = pD.d.Parse((() => new CD), DD, null);
              this.remove(this.attached[cD]), this.add(ID)
            }
          }
      }
    }
  },
  39382: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.b
    });
    var ID = cD(39388);
    (0, ID.c)()
  },
  39388: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      c: () => yD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36446),
      fD = cD(36622),
      bD = cD(39392),
      QD = cD(39356),
      wD = cD(36488);
    let SD = (() => {
        var DD;
        let CD, cD, QD = bD.b,
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        return DD = class extends QD {
          constructor(DD, CD, cD, pD) {
            super(DD, cD, pD), this.groundColor = (0, ID.m)(this, wD, new fD.d(0, 0, 0)), this.direction = ((0, ID.m)(this, SD), (0, ID.m)(this, BD, void 0)), (0, ID.m)(this, yD), this.direction = CD || iD.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(DD) {
            return this.direction = iD.p.Normalize(DD.subtract(iD.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(DD, CD) {
            const cD = iD.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cD.x, cD.y, cD.z, 0, CD), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), CD), this
          }
          transferToNodeMaterialEffect(DD, CD) {
            const cD = iD.p.Normalize(this.direction);
            return DD.setFloat3(CD, cD.x, cD.y, cD.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = iD.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bD.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(DD, CD) {
            DD["HEMILIGHT" + CD] = !0
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(QD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.l)()], cD = [(0, pD.C)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "groundColor" in DD,
              get: DD => DD.groundColor,
              set: (DD, CD) => {
                DD.groundColor = CD
              }
            },
            metadata: iD
          }, wD, SD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: DD => "direction" in DD,
              get: DD => DD.direction,
              set: (DD, CD) => {
                DD.direction = CD
              }
            },
            metadata: iD
          }, BD, yD), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD
      })(),
      BD = !1;

    function yD() {
      BD || (BD = !0, QD.b.AddNodeConstructor("Light_Type_3", ((DD, CD) => () => new SD(DD, iD.p.Zero(), CD))), (0, wD.d)("BABYLON.HemisphericLight", SD))
    }
  },
  36613: (DD, CD, cD) => {
    cD.d(CD, {
      Color3: () => ID.d,
      c: () => ID.e
    });
    var ID = cD(36622);
    (0, ID.h)()
  },
  37159: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(37167);
    class pD {
      static GetPlanes(DD) {
        const CD = [];
        for (let cD = 0; cD < 6; cD++) CD.push(new ID.c(0, 0, 0, 0));
        return pD.GetPlanesToRef(DD, CD), CD
      }
      static GetNearPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[2], CD.normal.y = cD[7] + cD[6], CD.normal.z = cD[11] + cD[10], CD.d = cD[15] + cD[14], CD.normalize()
      }
      static GetFarPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[2], CD.normal.y = cD[7] - cD[6], CD.normal.z = cD[11] - cD[10], CD.d = cD[15] - cD[14], CD.normalize()
      }
      static GetLeftPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[0], CD.normal.y = cD[7] + cD[4], CD.normal.z = cD[11] + cD[8], CD.d = cD[15] + cD[12], CD.normalize()
      }
      static GetRightPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[0], CD.normal.y = cD[7] - cD[4], CD.normal.z = cD[11] - cD[8], CD.d = cD[15] - cD[12], CD.normalize()
      }
      static GetTopPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[1], CD.normal.y = cD[7] - cD[5], CD.normal.z = cD[11] - cD[9], CD.d = cD[15] - cD[13], CD.normalize()
      }
      static GetBottomPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[1], CD.normal.y = cD[7] + cD[5], CD.normal.z = cD[11] + cD[9], CD.d = cD[15] + cD[13], CD.normalize()
      }
      static GetPlanesToRef(DD, CD) {
        pD.GetNearPlaneToRef(DD, CD[0]), pD.GetFarPlaneToRef(DD, CD[1]), pD.GetLeftPlaneToRef(DD, CD[2]), pD.GetRightPlaneToRef(DD, CD[3]), pD.GetTopPlaneToRef(DD, CD[4]), pD.GetBottomPlaneToRef(DD, CD[5])
      }
      static IsPointInFrustum(DD, CD) {
        for (let cD = 0; cD < 6; cD++)
          if (CD[cD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37167: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(36446);
    class pD {
      constructor(DD, CD, cD, pD) {
        this.normal = new ID.p(DD, CD, cD), this.d = pD
      }
      XcD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let CD = 0;
        return 0 !== DD && (CD = 1 / DD), this.normal.x *= CD, this.normal.y *= CD, this.normal.z *= CD, this.d *= CD, this
      }
      transform(DD) {
        const CD = pD._TmpMatrix;
        DD.invertToRef(CD);
        const cD = CD.m,
          ID = this.normal.x,
          iD = this.normal.y,
          fD = this.normal.z,
          bD = this.d,
          QD = ID * cD[0] + iD * cD[1] + fD * cD[2] + bD * cD[3],
          wD = ID * cD[4] + iD * cD[5] + fD * cD[6] + bD * cD[7],
          SD = ID * cD[8] + iD * cD[9] + fD * cD[10] + bD * cD[11],
          BD = ID * cD[12] + iD * cD[13] + fD * cD[14] + bD * cD[15];
        return new pD(QD, wD, SD, BD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, CD, cD) {
        const ID = CD.x - DD.x,
          pD = CD.y - DD.y,
          iD = CD.z - DD.z,
          fD = cD.x - DD.x,
          bD = cD.y - DD.y,
          QD = cD.z - DD.z,
          wD = pD * QD - iD * bD,
          SD = iD * fD - ID * QD,
          BD = ID * bD - pD * fD,
          yD = Math.sqrt(wD * wD + SD * SD + BD * BD);
        let MD;
        return MD = 0 !== yD ? 1 / yD : 0, this.normal.x = wD * MD, this.normal.y = SD * MD, this.normal.z = BD * MD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, CD) {
        return ID.p.Dot(this.normal, DD) <= CD
      }
      signedDistanceTo(DD) {
        return ID.p.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new pD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, CD, cD) {
        const ID = new pD(0, 0, 0, 0);
        return ID.copyFromPoints(DD, CD, cD), ID
      }
      static FromPositionAndNormal(DD, CD) {
        const cD = new pD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, CD, cD)
      }
      static FromPositionAndNormalToRef(DD, CD, cD) {
        return cD.normal.YCD(CD), cD.normal.normalize(), cD.d = -DD.dot(cD.normal), cD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, CD, cD) {
        const pD = -(CD.x * DD.x + CD.y * DD.y + CD.z * DD.z);
        return ID.p.Dot(cD, CD) + pD
      }
    }
    pD._TmpMatrix = ID.d.Identity()
  },
  36440: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Matrix: () => ID.d,
      Quaternion: () => ID.h,
      RegisterMathVector: () => ID.k,
      TmpVectors: () => ID.l,
      Vector2: () => ID.n,
      cZ: () => ID.p,
      Vector4: () => ID.s
    });
    var ID = cD(36446);
    (0, ID.k)()
  },
  37479: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      constructor(DD, CD, cD, ID) {
        this.x = DD, this.y = CD, this.width = cD, this.height = ID
      }
      toGlobal(DD, CD) {
        return new ID(this.x * DD, this.y * CD, this.width * DD, this.height * CD)
      }
      toGlobalToRef(DD, CD, cD) {
        return cD.x = this.x * DD, cD.y = this.y * CD, cD.width = this.width * DD, cD.height = this.height * CD, this
      }
      clone() {
        return new ID(this.x, this.y, this.width, this.height)
      }
    }
  },
  39526: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(36446),
      pD = cD(36622),
      iD = cD(39531),
      fD = cD(39545),
      bD = cD(39560);

    function QD(DD) {
      let CD = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const cD = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        iD = [],
        QD = DD.width || DD.size || 1,
        wD = DD.height || DD.size || 1,
        SD = DD.depth || DD.size || 1,
        BD = DD.wrap || !1;
      let yD = void 0 === DD.topBaseAt ? 1 : DD.topBaseAt,
        MD = void 0 === DD.bottomBaseAt ? 0 : DD.bottomBaseAt;
      yD = (yD + 4) % 4, MD = (MD + 4) % 4;
      let tD = [2, 0, 3, 1][yD],
        ZD = [2, 0, 1, 3][MD],
        oD = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (BD) {
        CD = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], oD = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let DD = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          cD = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const ID = [17, 18, 19, 16],
          pD = [22, 23, 20, 21];
        for (; tD > 0;) DD.unshift(DD.pop()), ID.unshift(ID.pop()), tD--;
        for (; ZD > 0;) cD.unshift(cD.pop()), pD.unshift(pD.pop()), ZD--;
        DD = DD.flat(), cD = cD.flat(), oD = oD.concat(DD).concat(cD), CD.push(ID[0], ID[2], ID[3], ID[0], ID[1], ID[2]), CD.push(pD[0], pD[2], pD[3], pD[0], pD[1], pD[2])
      }
      const vD = [QD / 2, wD / 2, SD / 2],
        ND = oD.reduce(((DD, CD, cD) => DD.concat(CD * vD[cD % 3])), []),
        gD = 0 === DD.sideOrientation ? 0 : DD.sideOrientation || fD.c.DEFAULTSIDE,
        XD = DD.faceUV || new Array(6),
        mD = DD.faceColors,
        nD = [];
      for (let fD = 0; fD < 6; fD++) void 0 === XD[fD] && (XD[fD] = new ID.s(0, 0, 1, 1)), mD && void 0 === mD[fD] && (mD[fD] = new pD.e(1, 1, 1, 1));
      for (let ID = 0; ID < 6; ID++)
        if (iD.push(XD[ID].z, bD.c ? 1 - XD[ID].w : XD[ID].w), iD.push(XD[ID].x, bD.c ? 1 - XD[ID].w : XD[ID].w), iD.push(XD[ID].x, bD.c ? 1 - XD[ID].y : XD[ID].y), iD.push(XD[ID].z, bD.c ? 1 - XD[ID].y : XD[ID].y), mD)
          for (let DD = 0; DD < 4; DD++) nD.push(mD[ID].r, mD[ID].g, mD[ID].b, mD[ID].a);
      fD.c._ComputeSides(gD, ND, CD, cD, iD, DD.frontUVs, DD.backUVs);
      const OD = new fD.c;
      if (OD.indices = CD, OD.positions = ND, OD.normals = cD, OD.uvs = iD, mD) {
        const DD = gD === fD.c.DOUBLESIDE ? nD.concat(nD) : nD;
        OD.colors = DD
      }
      return OD
    }

    function wD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ID = new iD.d(DD, cD);
      CD.sideOrientation = iD.d._GetDefaultSideOrientation(CD.sideOrientation), ID._originalBuilderSideOrientation = CD.sideOrientation;
      return QD(CD).applyToMesh(ID, CD.updatable), ID
    }
    let SD = !1;
    SD || (SD = !0, fD.c.CreateBox = QD, iD.d.CreateBox = function(DD, CD) {
      return wD(DD, {
        size: CD,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39576: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => BD
    });
    var ID = cD(36446),
      pD = cD(39531),
      iD = cD(39545),
      fD = cD(39579),
      bD = cD(39286),
      QD = cD(38048);

    function wD(DD) {
      const CD = [],
        cD = [],
        ID = DD.lines,
        pD = DD.colors,
        fD = [];
      let bD = 0;
      for (let iD = 0; iD < ID.length; iD++) {
        const DD = ID[iD];
        for (let ID = 0; ID < DD.length; ID++) {
          const {
            x: QD,
            y: wD,
            z: SD
          } = DD[ID];
          if (cD.push(QD, wD, SD), pD) {
            const DD = pD[iD],
              {
                r: CD,
                g: cD,
                b: bD,
                a: QD
              } = DD[ID];
            fD.push(CD, cD, bD, QD)
          }
          ID > 0 && (CD.push(bD - 1), CD.push(bD)), bD++
        }
      }
      const QD = new iD.c;
      return QD.indices = CD, QD.positions = cD, pD && (QD.colors = fD), QD
    }

    function SD(DD) {
      const CD = DD.dashSize || 3,
        cD = DD.gapSize || 1,
        pD = DD.dashNb || 200,
        fD = DD.points,
        bD = [],
        QD = [],
        wD = ID.p.Zero();
      let SD, BD, yD, MD = 0,
        tD = 0;
      for (yD = 0; yD < fD.length - 1; yD++) fD[yD + 1].subtractToRef(fD[yD], wD), MD += wD.length();
      const ZD = MD / pD,
        oD = CD * ZD / (CD + cD);
      for (yD = 0; yD < fD.length - 1; yD++) {
        fD[yD + 1].subtractToRef(fD[yD], wD), SD = Math.floor(wD.length() / ZD), wD.normalize();
        for (let DD = 0; DD < SD; DD++) BD = ZD * DD, bD.push(fD[yD].x + BD * wD.x, fD[yD].y + BD * wD.y, fD[yD].z + BD * wD.z), bD.push(fD[yD].x + (BD + oD) * wD.x, fD[yD].y + (BD + oD) * wD.y, fD[yD].z + (BD + oD) * wD.z), QD.push(tD, tD + 1), tD += 2
      }
      const vD = new iD.c;
      return vD.positions = bD, vD.indices = QD, vD
    }

    function BD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ID = CD.instance,
        pD = CD.lines,
        iD = CD.colors;
      if (ID) {
        const DD = ID.getVerticesData(bD.k.PositionKind);
        let CD, cD;
        iD && (CD = ID.getVerticesData(bD.k.ColorKind));
        let fD = 0,
          QD = 0;
        for (let ID = 0; ID < pD.length; ID++) {
          const bD = pD[ID];
          for (let pD = 0; pD < bD.length; pD++) DD[fD] = bD[pD].x, DD[fD + 1] = bD[pD].y, DD[fD + 2] = bD[pD].z, iD && CD && (cD = iD[ID], CD[QD] = cD[pD].r, CD[QD + 1] = cD[pD].g, CD[QD + 2] = cD[pD].b, CD[QD + 3] = cD[pD].a, QD += 4), fD += 3
        }
        return ID.updateVerticesData(bD.k.PositionKind, DD, !1, !1), iD && CD && ID.updateVerticesData(bD.k.ColorKind, CD, !1, !1), ID.refreshBoundingInfo(), ID
      }
      const QD = !!iD,
        SD = new fD.c(DD, cD, null, void 0, void 0, QD, CD.useVertexAlpha, CD.material);
      return wD(CD).applyToMesh(SD, CD.updatable), SD
    }

    function yD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ID = CD.colors ? [CD.colors] : null;
      return BD(DD, {
        lines: [CD.points],
        updatable: CD.updatable,
        instance: CD.instance,
        colors: ID,
        useVertexAlpha: CD.useVertexAlpha,
        material: CD.material
      }, cD)
    }

    function MD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const iD = CD.points,
        bD = CD.instance,
        wD = CD.gapSize || 1,
        BD = CD.dashSize || 3;
      if (bD) {
        const DD = DD => {
          const CD = ID.p.Zero(),
            cD = DD.length / 6;
          let pD, fD, QD, wD, SD = 0,
            BD = 0;
          for (QD = 0; QD < iD.length - 1; QD++) iD[QD + 1].subtractToRef(iD[QD], CD), SD += CD.length();
          const yD = SD / cD,
            MD = bD._creationDataStorage.dashSize,
            tD = MD * yD / (MD + bD._creationDataStorage.gapSize);
          for (QD = 0; QD < iD.length - 1; QD++)
            for (iD[QD + 1].subtractToRef(iD[QD], CD), pD = Math.floor(CD.length() / yD), CD.normalize(), wD = 0; wD < pD && BD < DD.length;) fD = yD * wD, DD[BD] = iD[QD].x + fD * CD.x, DD[BD + 1] = iD[QD].y + fD * CD.y, DD[BD + 2] = iD[QD].z + fD * CD.z, DD[BD + 3] = iD[QD].x + (fD + tD) * CD.x, DD[BD + 4] = iD[QD].y + (fD + tD) * CD.y, DD[BD + 5] = iD[QD].z + (fD + tD) * CD.z, BD += 6, wD++;
          for (; BD < DD.length;) DD[BD] = iD[QD].x, DD[BD + 1] = iD[QD].y, DD[BD + 2] = iD[QD].z, BD += 3
        };
        return (CD.dashNb || CD.dashSize || CD.gapSize || CD.useVertexAlpha || CD.material) && QD.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), bD.updateMeshPositions(DD, !1), bD
      }
      const yD = new fD.c(DD, cD, null, void 0, void 0, void 0, CD.useVertexAlpha, CD.material);
      return SD(CD).applyToMesh(yD, CD.updatable), yD._creationDataStorage = new pD.j, yD._creationDataStorage.dashSize = BD, yD._creationDataStorage.gapSize = wD, yD
    }
    let tD = !1;
    tD || (tD = !0, iD.c.CreateLineSystem = wD, iD.c.CreateDashedLines = SD, pD.d.CreateLines = function(DD, CD) {
      return yD(DD, {
        points: CD,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, pD.d.CreateDashedLines = function(DD, CD, cD, ID, pD) {
      return MD(DD, {
        points: CD,
        dashSize: cD,
        gapSize: ID,
        dashNb: pD,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39579: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => yD,
      g: () => ZD
    });
    var ID, pD, iD = cD(36622),
      fD = cD(39286),
      bD = cD(39531),
      QD = cD(39586),
      wD = cD(39416),
      SD = cD(39590),
      BD = cD(39027);
    class yD extends bD.d {
      _isShaderMaterial(DD) {
        return !!DD && "ShaderMaterial" === DD.getClassName()
      }
      constructor(DD) {
        let CD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ID = arguments.length > 5 ? arguments[5] : void 0,
          pD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 ? arguments[7] : void 0;
        super(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, CD, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = ID, this.useVertexAlpha = pD, this.color = new iD.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, CD && (this.color = CD.color.clone(), this.alpha = CD.alpha, this.useVertexColor = CD.useVertexColor, this.useVertexAlpha = CD.useVertexAlpha), this.intersectionThreshold = .1;
        const QD = {
          attributes: [fD.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? QD.defines.push("#define VERTEXALPHA") : QD.needAlphaBlending = !1, this.useVertexColor ? (QD.defines.push("#define VERTEXCOLOR"), QD.attributes.push(fD.k.ColorKind)) : (QD.uniforms.push("color"), this._color4 = new iD.e), bD) this.material = bD;
        else {
          this.hq().DZ().isWebGPU && !yD.ForceGLSL && (this._shaderLanguage = 1), QD.shaderLanguage = this._shaderLanguage, QD.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([cD.e(334).then((() => cD(41708))), cD.e(340).then((() => cD(41711)))]) : await Promise.all([cD.e(316).then((() => cD(41713))), cD.e(322).then((() => cD(41722)))])
          };
          const DD = new SD.p("colorShader", this.hq(), "color", QD, !1);
          DD.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(DD)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(DD) {
        const CD = this.material;
        if (CD === DD) return;
        const cD = CD && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(DD), cD && CD?.dispose()
      }
      _setInternalMaterial(DD) {
        this._setMaterial(DD), this.material && (this.material.fillMode = wD.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(DD) {}
      _bind(DD, CD) {
        if (!this._geometry) return this;
        const cD = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(CD, cD) : this._geometry._bind(CD, cD, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: DD,
            g: CD,
            b: cD
          } = this.color;
          this._color4.set(DD, CD, cD, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(DD, CD, cD) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const ID = this.hq().DZ();
        return this._unIndexed ? ID.drawArraysType(wD.d.LineListDrawMode, DD.verticesStart, DD.verticesCount, cD) : ID.drawElementsType(wD.d.LineListDrawMode, DD.indexStart, DD.indexCount, cD), this
      }
      dispose(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || CD) && this.material?.dispose(!1, !1, !0), super.dispose(DD)
      }
      clone(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (CD && void 0 === CD._addToSceneRootNodes) {
          const cD = CD;
          return cD.source = this, new yD(DD, this.hq(), cD.parent, cD.source, cD.doNotCloneChildren)
        }
        return new yD(DD, this.hq(), CD, this, cD)
      }
      createInstance(DD) {
        const CD = new MD(DD, this);
        if (this.qJ) {
          CD.qJ = {};
          for (const DD in this.qJ) CD.qJ[DD] = this.qJ[DD]
        }
        return CD
      }
      serialize(DD) {
        super.serialize(DD), DD.color = this.color.XcD(), DD.alpha = this.alpha
      }
      static Parse(DD, CD) {
        const cD = new yD(DD.name, CD);
        return cD.color = iD.d.FromArray(DD.color), cD.alpha = DD.alpha, cD
      }
    }
    yD.ForceGLSL = !1;
    class MD extends QD.c {
      constructor(DD, CD) {
        super(DD, CD), this.intersectionThreshold = CD.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let tD = !1;

    function ZD() {
      tD || (tD = !0, bD.d._LinesMeshParser = (DD, CD) => yD.Parse(DD, CD))
    }(ID = yD.prototype).enableEdgesRendering ?? (ID.enableEdgesRendering = (0, BD.j)("LinesMesh", "enableEdgesRendering")), (pD = MD.prototype).enableEdgesRendering ?? (pD.enableEdgesRendering = (0, BD.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38045: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(38048);
    const pD = (DD, CD, cD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : cD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(CD) : null;
    class iD {
      static DeepCopy(DD, CD, cD, iD) {
        let fD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bD = function(DD) {
          const CD = [];
          do {
            const cD = Object.getOwnPropertyNames(DD);
            for (const DD of cD) - 1 === CD.indexOf(DD) && CD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return CD
        }(DD);
        for (const wD of bD) {
          if ("_" === wD[0] && (!iD || -1 === iD.indexOf(wD))) continue;
          if (wD.endsWith("Observable")) continue;
          if (cD && -1 !== cD.indexOf(wD)) continue;
          const bD = DD[wD],
            SD = typeof bD;
          if ("function" !== SD) try {
            if ("object" === SD)
              if (bD instanceof Uint8Array) CD[wD] = Uint8Array.from(bD);
              else if (bD instanceof Array) {
              if (CD[wD] = [], bD.length > 0)
                if ("object" == typeof bD[0])
                  for (let DD = 0; DD < bD.length; DD++) {
                    const cD = pD(bD[DD], CD, fD); - 1 === CD[wD].indexOf(cD) && CD[wD].push(cD)
                  } else CD[wD] = bD.slice(0)
            } else CD[wD] = pD(bD, CD, fD);
            else CD[wD] = bD
          } catch (QD) {
            ID.e.Warn(QD.message)
          }
        }
      }
    }
  },
  37290: (DD, CD, cD) => {
    function ID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const CD = 16 * Math.random() | 0;
        return ("x" === DD ? CD : 3 & CD | 8).toString(16)
      }))
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  38048: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static _CheckLimit(DD, CD) {
        let cD = ID._LogLimitOutputs[DD];
        return cD ? cD.current++ : (cD = {
          limit: CD,
          current: 1
        }, ID._LogLimitOutputs[DD] = cD), cD.current <= cD.limit
      }
      static _GenerateLimitMessage(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cD = ID._LogLimitOutputs[DD];
        if (!cD || !ID.MessageLimitReached) return;
        const pD = this._Levels[CD];
        cD.current === cD.limit && ID[pD.name](ID.MessageLimitReached.replace(/%LIMIT%/g, "" + cD.limit).replace(/%TYPE%/g, pD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        ID._LogCache = DD + ID._LogCache, ID.OnNewCacheEntry && ID.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const CD = DD => DD < 10 ? "0" + DD : "" + DD,
          cD = new Date;
        return "[" + CD(cD.getHours()) + ":" + CD(cD.getMinutes()) + ":" + CD(cD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, CD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = Array.isArray(CD) ? CD[0] : CD;
        if (void 0 !== cD && !ID._CheckLimit(pD, cD)) return;
        const iD = ID._FormatMessage(pD),
          fD = this._Levels[DD],
          bD = Array.isArray(CD) ? CD.slice(1) : [];
        fD.logFunc && fD.logFunc("BJS - " + iD, ...bD);
        const QD = `<div style='color:${fD.color}'>${iD}</div><br>`;
        ID._AddLogEntry(QD), ID._GenerateLimitMessage(pD, DD)
      }
      static get LogCache() {
        return ID._LogCache
      }
      static ClearLogCache() {
        ID._LogCache = "", ID._LogLimitOutputs = {}, ID.errorsCount = 0
      }
      static set LogLevels(DD) {
        ID.Log = ID._LogDisabled, ID.Warn = ID._LogDisabled, ID.Error = ID._LogDisabled;
        const CD = [ID.MessageLogLevel, ID.WarningLogLevel, ID.ErrorLogLevel];
        for (const cD of CD)
          if ((DD & cD) === cD) {
            const DD = this._Levels[cD];
            ID[DD.name] = ID._LogEnabled.bind(ID, cD)
          }
      }
    }
    ID.NoneLogLevel = 0, ID.MessageLogLevel = 1, ID.WarningLogLevel = 2, ID.ErrorLogLevel = 4, ID.AllLogLevel = 7, ID.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ID._LogCache = "", ID._LogLimitOutputs = {}, ID._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], ID.errorsCount = 0, ID.Log = ID._LogEnabled.bind(ID, ID.MessageLogLevel), ID.Warn = ID._LogEnabled.bind(ID, ID.WarningLogLevel), ID.Error = ID._LogEnabled.bind(ID, ID.ErrorLogLevel)
  },
  39231: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID.e
    });
    var ID = cD(39239);
    (0, ID.d)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);