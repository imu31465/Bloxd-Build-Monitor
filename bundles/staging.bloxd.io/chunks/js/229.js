export const id = 229;
export const ids = [229, 235, 238];
export const modules = {
  40179: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => LD
    });
    var pD = wD(38662),
      sD = wD(39939),
      KD = wD(40148),
      rD = {};
    class LD {
      constructor(DD) {
        this.attachedToElement = !1, this.attached = {}, this.camera = DD, this.checkInputs = () => {}
      }
      add(DD) {
        const zD = DD.getSimpleName();
        this.attached[zD] ? pD.d.Warn("camera input of type " + zD + " already exists on camera") : (this.attached[zD] = DD, DD.camera = this.camera, DD.checkInputs && (this.checkInputs = this._addCheckInputs(DD.checkInputs.bind(DD))), this.attachedToElement && DD.attachControl(this.noPreventDefault))
      }
      remove(DD) {
        for (const zD in this.attached) {
          const wD = this.attached[zD];
          if (wD === DD) return wD.detachControl(), wD.camera = null, delete this.attached[zD], void this.rebuildInputCheck()
        }
      }
      removeByType(DD) {
        for (const zD in this.attached) {
          const wD = this.attached[zD];
          wD.getClassName() === DD && (wD.detachControl(), wD.camera = null, delete this.attached[zD], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(DD) {
        const zD = this.checkInputs;
        return () => {
          zD(), DD()
        }
      }
      attachInput(DD) {
        this.attachedToElement && DD.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          DD = !KD.c.ForceAttachControlToAlwaysPreventDefault && DD, this.attachedToElement = !0, this.noPreventDefault = DD;
          for (const zD in this.attached) this.attached[zD].attachControl(DD)
        }
      }
      detachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zD in this.attached) this.attached[zD].detachControl(), DD && (this.attached[zD].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const DD in this.attached) {
          const zD = this.attached[DD];
          zD.checkInputs && (this.checkInputs = this._addCheckInputs(zD.checkInputs.bind(zD)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(DD) {
        const zD = {};
        for (const wD in this.attached) {
          const DD = this.attached[wD],
            pD = sD.d.Serialize(DD);
          zD[DD.getClassName()] = pD
        }
        DD.inputsmgr = zD
      }
      parse(DD) {
        const zD = DD.inputsmgr;
        if (zD) {
          this.clear();
          for (const DD in zD) {
            const wD = rD[DD];
            if (wD) {
              const pD = zD[DD],
                KD = sD.d.Parse((() => new wD), pD, null);
              this.add(KD)
            }
          }
        } else
          for (const wD in this.attached) {
            const zD = rD[this.attached[wD].getClassName()];
            if (zD) {
              const pD = sD.d.Parse((() => new zD), DD, null);
              this.remove(this.attached[wD]), this.add(pD)
            }
          }
      }
    }
  },
  40183: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD.d
    });
    var pD = wD(40186);
    (0, pD.g)()
  },
  40186: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      g: () => UD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37079),
      rD = wD(37273),
      LD = wD(40189),
      cD = wD(40155),
      gD = wD(37134);
    let RD = (() => {
        var DD;
        let zD, wD, cD = LD.c,
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        return DD = class extends cD {
          constructor(DD, zD, wD, sD) {
            super(DD, wD, sD), this.groundColor = (0, pD.m)(this, gD, new rD.d(0, 0, 0)), this.direction = ((0, pD.m)(this, RD), (0, pD.m)(this, AD, void 0)), (0, pD.m)(this, UD), this.direction = zD || KD.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(DD) {
            return this.direction = KD.s.Normalize(DD.subtract(KD.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(DD, zD) {
            const wD = KD.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", wD.x, wD.y, wD.z, 0, zD), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zD), this
          }
          transferToNodeMaterialEffect(DD, zD) {
            const wD = KD.s.Normalize(this.direction);
            return DD.setFloat3(zD, wD.x, wD.y, wD.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = KD.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return LD.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(DD, zD) {
            DD["HEMILIGHT" + zD] = !0
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(cD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.k)()], wD = [(0, sD.B)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "groundColor" in DD,
              get: DD => DD.groundColor,
              set: (DD, zD) => {
                DD.groundColor = zD
              }
            },
            metadata: KD
          }, gD, RD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: DD => "direction" in DD,
              get: DD => DD.direction,
              set: (DD, zD) => {
                DD.direction = zD
              }
            },
            metadata: KD
          }, AD, UD), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD
      })(),
      AD = !1;

    function UD() {
      AD || (AD = !0, cD.b.AddNodeConstructor("Light_Type_3", ((DD, zD) => () => new RD(DD, KD.s.Zero(), zD))), (0, gD.i)("BABYLON.HemisphericLight", RD))
    }
  },
  37267: (DD, zD, wD) => {
    wD.d(zD, {
      Color3: () => pD.d,
      e: () => pD.h
    });
    var pD = wD(37273);
    (0, pD.i)()
  },
  37752: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37754);
    class sD {
      static GetPlanes(DD) {
        const zD = [];
        for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
        return sD.GetPlanesToRef(DD, zD), zD
      }
      static GetNearPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
      }
      static GetFarPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
      }
      static GetLeftPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[0], zD.normal.y = wD[7] + wD[4], zD.normal.z = wD[11] + wD[8], zD.d = wD[15] + wD[12], zD.normalize()
      }
      static GetRightPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[0], zD.normal.y = wD[7] - wD[4], zD.normal.z = wD[11] - wD[8], zD.d = wD[15] - wD[12], zD.normalize()
      }
      static GetTopPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[1], zD.normal.y = wD[7] - wD[5], zD.normal.z = wD[11] - wD[9], zD.d = wD[15] - wD[13], zD.normalize()
      }
      static GetBottomPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[1], zD.normal.y = wD[7] + wD[5], zD.normal.z = wD[11] + wD[9], zD.d = wD[15] + wD[13], zD.normalize()
      }
      static GetPlanesToRef(DD, zD) {
        sD.GetNearPlaneToRef(DD, zD[0]), sD.GetFarPlaneToRef(DD, zD[1]), sD.GetLeftPlaneToRef(DD, zD[2]), sD.GetRightPlaneToRef(DD, zD[3]), sD.GetTopPlaneToRef(DD, zD[4]), sD.GetBottomPlaneToRef(DD, zD[5])
      }
      static IsPointInFrustum(DD, zD) {
        for (let wD = 0; wD < 6; wD++)
          if (zD[wD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37754: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37079);
    class sD {
      constructor(DD, zD, wD, sD) {
        this.normal = new pD.s(DD, zD, wD), this.d = sD
      }
      QpD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let zD = 0;
        return 0 !== DD && (zD = 1 / DD), this.normal.x *= zD, this.normal.y *= zD, this.normal.z *= zD, this.d *= zD, this
      }
      transform(DD) {
        const zD = sD._TmpMatrix;
        DD.invertToRef(zD);
        const wD = zD.m,
          pD = this.normal.x,
          KD = this.normal.y,
          rD = this.normal.z,
          LD = this.d,
          cD = pD * wD[0] + KD * wD[1] + rD * wD[2] + LD * wD[3],
          gD = pD * wD[4] + KD * wD[5] + rD * wD[6] + LD * wD[7],
          RD = pD * wD[8] + KD * wD[9] + rD * wD[10] + LD * wD[11],
          AD = pD * wD[12] + KD * wD[13] + rD * wD[14] + LD * wD[15];
        return new sD(cD, gD, RD, AD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, zD, wD) {
        const pD = zD.x - DD.x,
          sD = zD.y - DD.y,
          KD = zD.z - DD.z,
          rD = wD.x - DD.x,
          LD = wD.y - DD.y,
          cD = wD.z - DD.z,
          gD = sD * cD - KD * LD,
          RD = KD * rD - pD * cD,
          AD = pD * LD - sD * rD,
          UD = Math.sqrt(gD * gD + RD * RD + AD * AD);
        let fD;
        return fD = 0 !== UD ? 1 / UD : 0, this.normal.x = gD * fD, this.normal.y = RD * fD, this.normal.z = AD * fD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, zD) {
        return pD.s.Dot(this.normal, DD) <= zD
      }
      signedDistanceTo(DD) {
        return pD.s.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new sD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, zD, wD) {
        const pD = new sD(0, 0, 0, 0);
        return pD.copyFromPoints(DD, zD, wD), pD
      }
      static FromPositionAndNormal(DD, zD) {
        const wD = new sD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, zD, wD)
      }
      static FromPositionAndNormalToRef(DD, zD, wD) {
        return wD.normal.pC(zD), wD.normal.normalize(), wD.d = -DD.dot(wD.normal), wD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, zD, wD) {
        const sD = -(zD.x * DD.x + zD.y * DD.y + zD.z * DD.z);
        return pD.s.Dot(wD, zD) + sD
      }
    }
    sD._TmpMatrix = pD.e.Identity()
  },
  37070: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Matrix: () => pD.e,
      Quaternion: () => pD.i,
      RegisterMathVector: () => pD.k,
      TmpVectors: () => pD.n,
      Vector2: () => pD.r,
      WI: () => pD.s,
      Vector4: () => pD.t
    });
    var pD = wD(37079);
    (0, pD.k)()
  },
  38074: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor(DD, zD, wD, pD) {
        this.x = DD, this.y = zD, this.width = wD, this.height = pD
      }
      toGlobal(DD, zD) {
        return new pD(this.x * DD, this.y * zD, this.width * DD, this.height * zD)
      }
      toGlobalToRef(DD, zD, wD) {
        return wD.x = this.x * DD, wD.y = this.y * zD, wD.width = this.width * DD, wD.height = this.height * zD, this
      }
      clone() {
        return new pD(this.x, this.y, this.width, this.height)
      }
    }
  },
  40331: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD
    });
    var pD = wD(37079),
      sD = wD(37273),
      KD = wD(40335),
      rD = wD(40348),
      LD = wD(40364);

    function cD(DD) {
      let zD = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const wD = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        KD = [],
        cD = DD.width || DD.size || 1,
        gD = DD.height || DD.size || 1,
        RD = DD.depth || DD.size || 1,
        AD = DD.wrap || !1;
      let UD = void 0 === DD.topBaseAt ? 1 : DD.topBaseAt,
        fD = void 0 === DD.bottomBaseAt ? 0 : DD.bottomBaseAt;
      UD = (UD + 4) % 4, fD = (fD + 4) % 4;
      let ID = [2, 0, 3, 1][UD],
        BD = [2, 0, 1, 3][fD],
        GD = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (AD) {
        zD = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], GD = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let DD = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          wD = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const pD = [17, 18, 19, 16],
          sD = [22, 23, 20, 21];
        for (; ID > 0;) DD.unshift(DD.pop()), pD.unshift(pD.pop()), ID--;
        for (; BD > 0;) wD.unshift(wD.pop()), sD.unshift(sD.pop()), BD--;
        DD = DD.flat(), wD = wD.flat(), GD = GD.concat(DD).concat(wD), zD.push(pD[0], pD[2], pD[3], pD[0], pD[1], pD[2]), zD.push(sD[0], sD[2], sD[3], sD[0], sD[1], sD[2])
      }
      const hD = [cD / 2, gD / 2, RD / 2],
        nD = GD.reduce(((DD, zD, wD) => DD.concat(zD * hD[wD % 3])), []),
        MD = 0 === DD.sideOrientation ? 0 : DD.sideOrientation || rD.b.DEFAULTSIDE,
        OD = DD.faceUV || new Array(6),
        JD = DD.faceColors,
        ED = [];
      for (let rD = 0; rD < 6; rD++) void 0 === OD[rD] && (OD[rD] = new pD.t(0, 0, 1, 1)), JD && void 0 === JD[rD] && (JD[rD] = new sD.h(1, 1, 1, 1));
      for (let pD = 0; pD < 6; pD++)
        if (KD.push(OD[pD].z, LD.e ? 1 - OD[pD].w : OD[pD].w), KD.push(OD[pD].x, LD.e ? 1 - OD[pD].w : OD[pD].w), KD.push(OD[pD].x, LD.e ? 1 - OD[pD].y : OD[pD].y), KD.push(OD[pD].z, LD.e ? 1 - OD[pD].y : OD[pD].y), JD)
          for (let DD = 0; DD < 4; DD++) ED.push(JD[pD].r, JD[pD].g, JD[pD].b, JD[pD].a);
      rD.b._ComputeSides(MD, nD, zD, wD, KD, DD.frontUVs, DD.backUVs);
      const QD = new rD.b;
      if (QD.indices = zD, QD.positions = nD, QD.normals = wD, QD.uvs = KD, JD) {
        const DD = MD === rD.b.DOUBLESIDE ? ED.concat(ED) : ED;
        QD.colors = DD
      }
      return QD
    }

    function gD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pD = new KD.e(DD, wD);
      zD.sideOrientation = KD.e._GetDefaultSideOrientation(zD.sideOrientation), pD._originalBuilderSideOrientation = zD.sideOrientation;
      return cD(zD).applyToMesh(pD, zD.updatable), pD
    }
    let RD = !1;
    RD || (RD = !0, rD.b.CreateBox = cD, KD.e.CreateBox = function(DD, zD) {
      return gD(DD, {
        size: zD,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40382: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => AD
    });
    var pD = wD(37079),
      sD = wD(40335),
      KD = wD(40348),
      rD = wD(40390),
      LD = wD(40066),
      cD = wD(38662);

    function gD(DD) {
      const zD = [],
        wD = [],
        pD = DD.lines,
        sD = DD.colors,
        rD = [];
      let LD = 0;
      for (let KD = 0; KD < pD.length; KD++) {
        const DD = pD[KD];
        for (let pD = 0; pD < DD.length; pD++) {
          const {
            x: cD,
            y: gD,
            z: RD
          } = DD[pD];
          if (wD.push(cD, gD, RD), sD) {
            const DD = sD[KD],
              {
                r: zD,
                g: wD,
                b: LD,
                a: cD
              } = DD[pD];
            rD.push(zD, wD, LD, cD)
          }
          pD > 0 && (zD.push(LD - 1), zD.push(LD)), LD++
        }
      }
      const cD = new KD.b;
      return cD.indices = zD, cD.positions = wD, sD && (cD.colors = rD), cD
    }

    function RD(DD) {
      const zD = DD.dashSize || 3,
        wD = DD.gapSize || 1,
        sD = DD.dashNb || 200,
        rD = DD.points,
        LD = [],
        cD = [],
        gD = pD.s.Zero();
      let RD, AD, UD, fD = 0,
        ID = 0;
      for (UD = 0; UD < rD.length - 1; UD++) rD[UD + 1].subtractToRef(rD[UD], gD), fD += gD.length();
      const BD = fD / sD,
        GD = zD * BD / (zD + wD);
      for (UD = 0; UD < rD.length - 1; UD++) {
        rD[UD + 1].subtractToRef(rD[UD], gD), RD = Math.floor(gD.length() / BD), gD.normalize();
        for (let DD = 0; DD < RD; DD++) AD = BD * DD, LD.push(rD[UD].x + AD * gD.x, rD[UD].y + AD * gD.y, rD[UD].z + AD * gD.z), LD.push(rD[UD].x + (AD + GD) * gD.x, rD[UD].y + (AD + GD) * gD.y, rD[UD].z + (AD + GD) * gD.z), cD.push(ID, ID + 1), ID += 2
      }
      const hD = new KD.b;
      return hD.positions = LD, hD.indices = cD, hD
    }

    function AD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pD = zD.instance,
        sD = zD.lines,
        KD = zD.colors;
      if (pD) {
        const DD = pD.getVerticesData(LD.k.PositionKind);
        let zD, wD;
        KD && (zD = pD.getVerticesData(LD.k.ColorKind));
        let rD = 0,
          cD = 0;
        for (let pD = 0; pD < sD.length; pD++) {
          const LD = sD[pD];
          for (let sD = 0; sD < LD.length; sD++) DD[rD] = LD[sD].x, DD[rD + 1] = LD[sD].y, DD[rD + 2] = LD[sD].z, KD && zD && (wD = KD[pD], zD[cD] = wD[sD].r, zD[cD + 1] = wD[sD].g, zD[cD + 2] = wD[sD].b, zD[cD + 3] = wD[sD].a, cD += 4), rD += 3
        }
        return pD.updateVerticesData(LD.k.PositionKind, DD, !1, !1), KD && zD && pD.updateVerticesData(LD.k.ColorKind, zD, !1, !1), pD.refreshBoundingInfo(), pD
      }
      const cD = !!KD,
        RD = new rD.c(DD, wD, null, void 0, void 0, cD, zD.useVertexAlpha, zD.material);
      return gD(zD).applyToMesh(RD, zD.updatable), RD
    }

    function UD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pD = zD.colors ? [zD.colors] : null;
      return AD(DD, {
        lines: [zD.points],
        updatable: zD.updatable,
        instance: zD.instance,
        colors: pD,
        useVertexAlpha: zD.useVertexAlpha,
        material: zD.material
      }, wD)
    }

    function fD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const KD = zD.points,
        LD = zD.instance,
        gD = zD.gapSize || 1,
        AD = zD.dashSize || 3;
      if (LD) {
        const DD = DD => {
          const zD = pD.s.Zero(),
            wD = DD.length / 6;
          let sD, rD, cD, gD, RD = 0,
            AD = 0;
          for (cD = 0; cD < KD.length - 1; cD++) KD[cD + 1].subtractToRef(KD[cD], zD), RD += zD.length();
          const UD = RD / wD,
            fD = LD._creationDataStorage.dashSize,
            ID = fD * UD / (fD + LD._creationDataStorage.gapSize);
          for (cD = 0; cD < KD.length - 1; cD++)
            for (KD[cD + 1].subtractToRef(KD[cD], zD), sD = Math.floor(zD.length() / UD), zD.normalize(), gD = 0; gD < sD && AD < DD.length;) rD = UD * gD, DD[AD] = KD[cD].x + rD * zD.x, DD[AD + 1] = KD[cD].y + rD * zD.y, DD[AD + 2] = KD[cD].z + rD * zD.z, DD[AD + 3] = KD[cD].x + (rD + ID) * zD.x, DD[AD + 4] = KD[cD].y + (rD + ID) * zD.y, DD[AD + 5] = KD[cD].z + (rD + ID) * zD.z, AD += 6, gD++;
          for (; AD < DD.length;) DD[AD] = KD[cD].x, DD[AD + 1] = KD[cD].y, DD[AD + 2] = KD[cD].z, AD += 3
        };
        return (zD.dashNb || zD.dashSize || zD.gapSize || zD.useVertexAlpha || zD.material) && cD.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), LD.updateMeshPositions(DD, !1), LD
      }
      const UD = new rD.c(DD, wD, null, void 0, void 0, void 0, zD.useVertexAlpha, zD.material);
      return RD(zD).applyToMesh(UD, zD.updatable), UD._creationDataStorage = new sD.k, UD._creationDataStorage.dashSize = AD, UD._creationDataStorage.gapSize = gD, UD
    }
    let ID = !1;
    ID || (ID = !0, KD.b.CreateLineSystem = gD, KD.b.CreateDashedLines = RD, sD.e.CreateLines = function(DD, zD) {
      return UD(DD, {
        points: zD,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, sD.e.CreateDashedLines = function(DD, zD, wD, pD, sD) {
      return fD(DD, {
        points: zD,
        dashSize: wD,
        gapSize: pD,
        dashNb: sD,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40390: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => UD,
      g: () => BD
    });
    var pD, sD, KD = wD(37273),
      rD = wD(40066),
      LD = wD(40335),
      cD = wD(40394),
      gD = wD(40220),
      RD = wD(40397),
      AD = wD(39808);
    class UD extends LD.e {
      _isShaderMaterial(DD) {
        return !!DD && "ShaderMaterial" === DD.getClassName()
      }
      constructor(DD) {
        let zD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pD = arguments.length > 5 ? arguments[5] : void 0,
          sD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 ? arguments[7] : void 0;
        super(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, zD, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = pD, this.useVertexAlpha = sD, this.color = new KD.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, zD && (this.color = zD.color.clone(), this.alpha = zD.alpha, this.useVertexColor = zD.useVertexColor, this.useVertexAlpha = zD.useVertexAlpha), this.intersectionThreshold = .1;
        const cD = {
          attributes: [rD.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? cD.defines.push("#define VERTEXALPHA") : cD.needAlphaBlending = !1, this.useVertexColor ? (cD.defines.push("#define VERTEXCOLOR"), cD.attributes.push(rD.k.ColorKind)) : (cD.uniforms.push("color"), this._color4 = new KD.h), LD) this.material = LD;
        else {
          this.Ul().iI().isWebGPU && !UD.ForceGLSL && (this._shaderLanguage = 1), cD.shaderLanguage = this._shaderLanguage, cD.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([wD.e(344).then((() => wD(42428))), wD.e(350).then((() => wD(42435)))]) : await Promise.all([wD.e(326).then((() => wD(42441))), wD.e(332).then((() => wD(42443)))])
          };
          const DD = new RD.m("colorShader", this.Ul(), "color", cD, !1);
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
        const zD = this.material;
        if (zD === DD) return;
        const wD = zD && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(DD), wD && zD?.dispose()
      }
      _setInternalMaterial(DD) {
        this._setMaterial(DD), this.material && (this.material.fillMode = gD.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(DD) {}
      _bind(DD, zD) {
        if (!this._geometry) return this;
        const wD = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zD, wD) : this._geometry._bind(zD, wD, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: DD,
            g: zD,
            b: wD
          } = this.color;
          this._color4.set(DD, zD, wD, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(DD, zD, wD) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const pD = this.Ul().iI();
        return this._unIndexed ? pD.drawArraysType(gD.b.LineListDrawMode, DD.verticesStart, DD.verticesCount, wD) : pD.drawElementsType(gD.b.LineListDrawMode, DD.indexStart, DD.indexCount, wD), this
      }
      dispose(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zD) && this.material?.dispose(!1, !1, !0), super.dispose(DD)
      }
      clone(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (zD && void 0 === zD._addToSceneRootNodes) {
          const wD = zD;
          return wD.source = this, new UD(DD, this.Ul(), wD.parent, wD.source, wD.doNotCloneChildren)
        }
        return new UD(DD, this.Ul(), zD, this, wD)
      }
      createInstance(DD) {
        const zD = new fD(DD, this);
        if (this.iW) {
          zD.iW = {};
          for (const DD in this.iW) zD.iW[DD] = this.iW[DD]
        }
        return zD
      }
      serialize(DD) {
        super.serialize(DD), DD.color = this.color.QpD(), DD.alpha = this.alpha
      }
      static Parse(DD, zD) {
        const wD = new UD(DD.name, zD);
        return wD.color = KD.d.FromArray(DD.color), wD.alpha = DD.alpha, wD
      }
    }
    UD.ForceGLSL = !1;
    class fD extends cD.e {
      constructor(DD, zD) {
        super(DD, zD), this.intersectionThreshold = zD.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let ID = !1;

    function BD() {
      ID || (ID = !0, LD.e._LinesMeshParser = (DD, zD) => UD.Parse(DD, zD))
    }(pD = UD.prototype).enableEdgesRendering ?? (pD.enableEdgesRendering = (0, AD.h)("LinesMesh", "enableEdgesRendering")), (sD = fD.prototype).enableEdgesRendering ?? (sD.enableEdgesRendering = (0, AD.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38658: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(38662);
    const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(zD) : null;
    class KD {
      static DeepCopy(DD, zD, wD, KD) {
        let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LD = function(DD) {
          const zD = [];
          do {
            const wD = Object.getOwnPropertyNames(DD);
            for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return zD
        }(DD);
        for (const gD of LD) {
          if ("_" === gD[0] && (!KD || -1 === KD.indexOf(gD))) continue;
          if (gD.endsWith("Observable")) continue;
          if (wD && -1 !== wD.indexOf(gD)) continue;
          const LD = DD[gD],
            RD = typeof LD;
          if ("function" !== RD) try {
            if ("object" === RD)
              if (LD instanceof Uint8Array) zD[gD] = Uint8Array.from(LD);
              else if (LD instanceof Array) {
              if (zD[gD] = [], LD.length > 0)
                if ("object" == typeof LD[0])
                  for (let DD = 0; DD < LD.length; DD++) {
                    const wD = sD(LD[DD], zD, rD); - 1 === zD[gD].indexOf(wD) && zD[gD].push(wD)
                  } else zD[gD] = LD.slice(0)
            } else zD[gD] = sD(LD, zD, rD);
            else zD[gD] = LD
          } catch (cD) {
            pD.d.Warn(cD.message)
          }
        }
      }
    }
  },
  37891: (DD, zD, wD) => {
    function pD() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const zD = 16 * Math.random() | 0;
        return ("x" === DD ? zD : 3 & zD | 8).toString(16)
      }))
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  38662: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static _CheckLimit(DD, zD) {
        let wD = pD._LogLimitOutputs[DD];
        return wD ? wD.current++ : (wD = {
          limit: zD,
          current: 1
        }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
      }
      static _GenerateLimitMessage(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wD = pD._LogLimitOutputs[DD];
        if (!wD || !pD.MessageLimitReached) return;
        const sD = this._Levels[zD];
        wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        pD._LogCache = DD + pD._LogCache, pD.OnNewCacheEntry && pD.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const zD = DD => DD < 10 ? "0" + DD : "" + DD,
          wD = new Date;
        return "[" + zD(wD.getHours()) + ":" + zD(wD.getMinutes()) + ":" + zD(wD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, zD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const sD = Array.isArray(zD) ? zD[0] : zD;
        if (void 0 !== wD && !pD._CheckLimit(sD, wD)) return;
        const KD = pD._FormatMessage(sD),
          rD = this._Levels[DD],
          LD = Array.isArray(zD) ? zD.slice(1) : [];
        rD.logFunc && rD.logFunc("BJS - " + KD, ...LD);
        const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
        pD._AddLogEntry(cD), pD._GenerateLimitMessage(sD, DD)
      }
      static get LogCache() {
        return pD._LogCache
      }
      static ClearLogCache() {
        pD._LogCache = "", pD._LogLimitOutputs = {}, pD.errorsCount = 0
      }
      static set LogLevels(DD) {
        pD.Log = pD._LogDisabled, pD.Warn = pD._LogDisabled, pD.Error = pD._LogDisabled;
        const zD = [pD.MessageLogLevel, pD.WarningLogLevel, pD.ErrorLogLevel];
        for (const wD of zD)
          if ((DD & wD) === wD) {
            const DD = this._Levels[wD];
            pD[DD.name] = pD._LogEnabled.bind(pD, wD)
          }
      }
    }
    pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels = [{}, {
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
    }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
  },
  40015: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.e
    });
    var pD = wD(40022);
    (0, pD.c)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);