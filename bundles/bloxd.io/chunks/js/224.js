export const id = 224;
export const ids = [224, 230, 233];
export const modules = {
  39980: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      f: () => xq
    });
    var Yq = gq(38653),
      lq = gq(39779),
      Oq = gq(39951),
      mq = {};
    class xq {
      constructor(qq) {
        this.attachedToElement = !1, this.attached = {}, this.camera = qq, this.checkInputs = () => {}
      }
      add(qq) {
        const Eq = qq.getSimpleName();
        this.attached[Eq] ? Yq.b.Warn("camera input of type " + Eq + " already exists on camera") : (this.attached[Eq] = qq, qq.camera = this.camera, qq.checkInputs && (this.checkInputs = this._addCheckInputs(qq.checkInputs.bind(qq))), this.attachedToElement && qq.attachControl(this.noPreventDefault))
      }
      remove(qq) {
        for (const Eq in this.attached) {
          const gq = this.attached[Eq];
          if (gq === qq) return gq.detachControl(), gq.camera = null, delete this.attached[Eq], void this.rebuildInputCheck()
        }
      }
      removeByType(qq) {
        for (const Eq in this.attached) {
          const gq = this.attached[Eq];
          gq.getClassName() === qq && (gq.detachControl(), gq.camera = null, delete this.attached[Eq], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(qq) {
        const Eq = this.checkInputs;
        return () => {
          Eq(), qq()
        }
      }
      attachInput(qq) {
        this.attachedToElement && qq.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          qq = !Oq.e.ForceAttachControlToAlwaysPreventDefault && qq, this.attachedToElement = !0, this.noPreventDefault = qq;
          for (const Eq in this.attached) this.attached[Eq].attachControl(qq)
        }
      }
      detachElement() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Eq in this.attached) this.attached[Eq].detachControl(), qq && (this.attached[Eq].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const qq in this.attached) {
          const Eq = this.attached[qq];
          Eq.checkInputs && (this.checkInputs = this._addCheckInputs(Eq.checkInputs.bind(Eq)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(qq) {
        const Eq = {};
        for (const gq in this.attached) {
          const qq = this.attached[gq],
            Yq = lq.d.Serialize(qq);
          Eq[qq.getClassName()] = Yq
        }
        qq.inputsmgr = Eq
      }
      parse(qq) {
        const Eq = qq.inputsmgr;
        if (Eq) {
          this.clear();
          for (const qq in Eq) {
            const gq = mq[qq];
            if (gq) {
              const Yq = Eq[qq],
                Oq = lq.d.Parse((() => new gq), Yq, null);
              this.add(Oq)
            }
          }
        } else
          for (const gq in this.attached) {
            const Eq = mq[this.attached[gq].getClassName()];
            if (Eq) {
              const Yq = lq.d.Parse((() => new Eq), qq, null);
              this.remove(this.attached[gq]), this.add(Yq)
            }
          }
      }
    }
  },
  39988: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq.d
    });
    var Yq = gq(39993);
    (0, Yq.e)()
  },
  39993: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      e: () => Wq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37139),
      mq = gq(37289),
      xq = gq(39995),
      Aq = gq(39960),
      cq = gq(37171);
    let uq = (() => {
        var qq;
        let Eq, gq, Aq = xq.c,
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        return qq = class extends Aq {
          constructor(qq, Eq, gq, lq) {
            super(qq, gq, lq), this.groundColor = (0, Yq.i)(this, cq, new mq.d(0, 0, 0)), this.direction = ((0, Yq.i)(this, uq), (0, Yq.i)(this, Bq, void 0)), (0, Yq.i)(this, Wq), this.direction = Eq || Oq.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(qq) {
            return this.direction = Oq.q.Normalize(qq.subtract(Oq.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(qq, Eq) {
            const gq = Oq.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gq.x, gq.y, gq.z, 0, Eq), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eq), this
          }
          transferToNodeMaterialEffect(qq, Eq) {
            const gq = Oq.q.Normalize(this.direction);
            return qq.setFloat3(Eq, gq.x, gq.y, gq.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Oq.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return xq.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(qq, Eq) {
            qq["HEMILIGHT" + Eq] = !0
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Aq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.o)()], gq = [(0, lq.I)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "groundColor" in qq,
              get: qq => qq.groundColor,
              set: (qq, Eq) => {
                qq.groundColor = Eq
              }
            },
            metadata: Oq
          }, cq, uq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: qq => "direction" in qq,
              get: qq => qq.direction,
              set: (qq, Eq) => {
                qq.direction = Eq
              }
            },
            metadata: Oq
          }, Bq, Wq), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq
      })(),
      Bq = !1;

    function Wq() {
      Bq || (Bq = !0, Aq.c.AddNodeConstructor("Light_Type_3", ((qq, Eq) => () => new uq(qq, Oq.q.Zero(), Eq))), (0, cq.g)("BABYLON.HemisphericLight", uq))
    }
  },
  37286: (qq, Eq, gq) => {
    gq.d(Eq, {
      Color3: () => Yq.d,
      e: () => Yq.g
    });
    var Yq = gq(37289);
    (0, Yq.h)()
  },
  37758: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(37767);
    class lq {
      static GetPlanes(qq) {
        const Eq = [];
        for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
        return lq.GetPlanesToRef(qq, Eq), Eq
      }
      static GetNearPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
      }
      static GetFarPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
      }
      static GetLeftPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[0], Eq.normal.y = gq[7] + gq[4], Eq.normal.z = gq[11] + gq[8], Eq.d = gq[15] + gq[12], Eq.normalize()
      }
      static GetRightPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[0], Eq.normal.y = gq[7] - gq[4], Eq.normal.z = gq[11] - gq[8], Eq.d = gq[15] - gq[12], Eq.normalize()
      }
      static GetTopPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[1], Eq.normal.y = gq[7] - gq[5], Eq.normal.z = gq[11] - gq[9], Eq.d = gq[15] - gq[13], Eq.normalize()
      }
      static GetBottomPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[1], Eq.normal.y = gq[7] + gq[5], Eq.normal.z = gq[11] + gq[9], Eq.d = gq[15] + gq[13], Eq.normalize()
      }
      static GetPlanesToRef(qq, Eq) {
        lq.GetNearPlaneToRef(qq, Eq[0]), lq.GetFarPlaneToRef(qq, Eq[1]), lq.GetLeftPlaneToRef(qq, Eq[2]), lq.GetRightPlaneToRef(qq, Eq[3]), lq.GetTopPlaneToRef(qq, Eq[4]), lq.GetBottomPlaneToRef(qq, Eq[5])
      }
      static IsPointInFrustum(qq, Eq) {
        for (let gq = 0; gq < 6; gq++)
          if (Eq[gq].dotCoordinate(qq) < 0) return !1;
        return !0
      }
    }
  },
  37767: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    var Yq = gq(37139);
    class lq {
      constructor(qq, Eq, gq, lq) {
        this.normal = new Yq.q(qq, Eq, gq), this.d = lq
      }
      bYq() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let qq = this.normal.getHashCode();
        return qq = 397 * qq ^ this.d, qq
      }
      normalize() {
        const qq = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eq = 0;
        return 0 !== qq && (Eq = 1 / qq), this.normal.x *= Eq, this.normal.y *= Eq, this.normal.z *= Eq, this.d *= Eq, this
      }
      transform(qq) {
        const Eq = lq._TmpMatrix;
        qq.invertToRef(Eq);
        const gq = Eq.m,
          Yq = this.normal.x,
          Oq = this.normal.y,
          mq = this.normal.z,
          xq = this.d,
          Aq = Yq * gq[0] + Oq * gq[1] + mq * gq[2] + xq * gq[3],
          cq = Yq * gq[4] + Oq * gq[5] + mq * gq[6] + xq * gq[7],
          uq = Yq * gq[8] + Oq * gq[9] + mq * gq[10] + xq * gq[11],
          Bq = Yq * gq[12] + Oq * gq[13] + mq * gq[14] + xq * gq[15];
        return new lq(Aq, cq, uq, Bq)
      }
      dotCoordinate(qq) {
        return this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z + this.d
      }
      copyFromPoints(qq, Eq, gq) {
        const Yq = Eq.x - qq.x,
          lq = Eq.y - qq.y,
          Oq = Eq.z - qq.z,
          mq = gq.x - qq.x,
          xq = gq.y - qq.y,
          Aq = gq.z - qq.z,
          cq = lq * Aq - Oq * xq,
          uq = Oq * mq - Yq * Aq,
          Bq = Yq * xq - lq * mq,
          Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
        let Nq;
        return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
      }
      isFrontFacingTo(qq, Eq) {
        return Yq.q.Dot(this.normal, qq) <= Eq
      }
      signedDistanceTo(qq) {
        return Yq.q.Dot(qq, this.normal) + this.d
      }
      static FromArray(qq) {
        return new lq(qq[0], qq[1], qq[2], qq[3])
      }
      static FromPoints(qq, Eq, gq) {
        const Yq = new lq(0, 0, 0, 0);
        return Yq.copyFromPoints(qq, Eq, gq), Yq
      }
      static FromPositionAndNormal(qq, Eq) {
        const gq = new lq(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(qq, Eq, gq)
      }
      static FromPositionAndNormalToRef(qq, Eq, gq) {
        return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
      }
      static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
        const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
        return Yq.q.Dot(gq, Eq) + lq
      }
    }
    lq._TmpMatrix = Yq.e.Identity()
  },
  37131: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Matrix: () => Yq.e,
      Quaternion: () => Yq.h,
      RegisterMathVector: () => Yq.l,
      TmpVectors: () => Yq.o,
      Vector2: () => Yq.p,
      Na: () => Yq.q,
      Vector4: () => Yq.r
    });
    var Yq = gq(37139);
    (0, Yq.l)()
  },
  38065: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq, Yq) {
        this.x = qq, this.y = Eq, this.width = gq, this.height = Yq
      }
      toGlobal(qq, Eq) {
        return new Yq(this.x * qq, this.y * Eq, this.width * qq, this.height * Eq)
      }
      toGlobalToRef(qq, Eq, gq) {
        return gq.x = this.x * qq, gq.y = this.y * Eq, gq.width = this.width * qq, gq.height = this.height * Eq, this
      }
      clone() {
        return new Yq(this.x, this.y, this.width, this.height)
      }
    }
  },
  40155: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq
    });
    var Yq = gq(37139),
      lq = gq(37289),
      Oq = gq(40163),
      mq = gq(40176),
      xq = gq(40190);

    function Aq(qq) {
      let Eq = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const gq = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Oq = [],
        Aq = qq.width || qq.size || 1,
        cq = qq.height || qq.size || 1,
        uq = qq.depth || qq.size || 1,
        Bq = qq.wrap || !1;
      let Wq = void 0 === qq.topBaseAt ? 1 : qq.topBaseAt,
        Nq = void 0 === qq.bottomBaseAt ? 0 : qq.bottomBaseAt;
      Wq = (Wq + 4) % 4, Nq = (Nq + 4) % 4;
      let aq = [2, 0, 3, 1][Wq],
        Vq = [2, 0, 1, 3][Nq],
        dq = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Bq) {
        Eq = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], dq = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let qq = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          gq = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Yq = [17, 18, 19, 16],
          lq = [22, 23, 20, 21];
        for (; aq > 0;) qq.unshift(qq.pop()), Yq.unshift(Yq.pop()), aq--;
        for (; Vq > 0;) gq.unshift(gq.pop()), lq.unshift(lq.pop()), Vq--;
        qq = qq.flat(), gq = gq.flat(), dq = dq.concat(qq).concat(gq), Eq.push(Yq[0], Yq[2], Yq[3], Yq[0], Yq[1], Yq[2]), Eq.push(lq[0], lq[2], lq[3], lq[0], lq[1], lq[2])
      }
      const jq = [Aq / 2, cq / 2, uq / 2],
        Hq = dq.reduce(((qq, Eq, gq) => qq.concat(Eq * jq[gq % 3])), []),
        oq = 0 === qq.sideOrientation ? 0 : qq.sideOrientation || mq.d.DEFAULTSIDE,
        Pq = qq.faceUV || new Array(6),
        Qq = qq.faceColors,
        yq = [];
      for (let mq = 0; mq < 6; mq++) void 0 === Pq[mq] && (Pq[mq] = new Yq.r(0, 0, 1, 1)), Qq && void 0 === Qq[mq] && (Qq[mq] = new lq.g(1, 1, 1, 1));
      for (let Yq = 0; Yq < 6; Yq++)
        if (Oq.push(Pq[Yq].z, xq.b ? 1 - Pq[Yq].w : Pq[Yq].w), Oq.push(Pq[Yq].x, xq.b ? 1 - Pq[Yq].w : Pq[Yq].w), Oq.push(Pq[Yq].x, xq.b ? 1 - Pq[Yq].y : Pq[Yq].y), Oq.push(Pq[Yq].z, xq.b ? 1 - Pq[Yq].y : Pq[Yq].y), Qq)
          for (let qq = 0; qq < 4; qq++) yq.push(Qq[Yq].r, Qq[Yq].g, Qq[Yq].b, Qq[Yq].a);
      mq.d._ComputeSides(oq, Hq, Eq, gq, Oq, qq.frontUVs, qq.backUVs);
      const tq = new mq.d;
      if (tq.indices = Eq, tq.positions = Hq, tq.normals = gq, tq.uvs = Oq, Qq) {
        const qq = oq === mq.d.DOUBLESIDE ? yq.concat(yq) : yq;
        tq.colors = qq
      }
      return tq
    }

    function cq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Yq = new Oq.e(qq, gq);
      Eq.sideOrientation = Oq.e._GetDefaultSideOrientation(Eq.sideOrientation), Yq._originalBuilderSideOrientation = Eq.sideOrientation;
      return Aq(Eq).applyToMesh(Yq, Eq.updatable), Yq
    }
    let uq = !1;
    uq || (uq = !0, mq.d.CreateBox = Aq, Oq.e.CreateBox = function(qq, Eq) {
      return cq(qq, {
        size: Eq,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40205: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq
    });
    var Yq = gq(37139),
      lq = gq(40163),
      Oq = gq(40176),
      mq = gq(40213),
      xq = gq(39879),
      Aq = gq(38653);

    function cq(qq) {
      const Eq = [],
        gq = [],
        Yq = qq.lines,
        lq = qq.colors,
        mq = [];
      let xq = 0;
      for (let Oq = 0; Oq < Yq.length; Oq++) {
        const qq = Yq[Oq];
        for (let Yq = 0; Yq < qq.length; Yq++) {
          const {
            x: Aq,
            y: cq,
            z: uq
          } = qq[Yq];
          if (gq.push(Aq, cq, uq), lq) {
            const qq = lq[Oq],
              {
                r: Eq,
                g: gq,
                b: xq,
                a: Aq
              } = qq[Yq];
            mq.push(Eq, gq, xq, Aq)
          }
          Yq > 0 && (Eq.push(xq - 1), Eq.push(xq)), xq++
        }
      }
      const Aq = new Oq.d;
      return Aq.indices = Eq, Aq.positions = gq, lq && (Aq.colors = mq), Aq
    }

    function uq(qq) {
      const Eq = qq.dashSize || 3,
        gq = qq.gapSize || 1,
        lq = qq.dashNb || 200,
        mq = qq.points,
        xq = [],
        Aq = [],
        cq = Yq.q.Zero();
      let uq, Bq, Wq, Nq = 0,
        aq = 0;
      for (Wq = 0; Wq < mq.length - 1; Wq++) mq[Wq + 1].subtractToRef(mq[Wq], cq), Nq += cq.length();
      const Vq = Nq / lq,
        dq = Eq * Vq / (Eq + gq);
      for (Wq = 0; Wq < mq.length - 1; Wq++) {
        mq[Wq + 1].subtractToRef(mq[Wq], cq), uq = Math.floor(cq.length() / Vq), cq.normalize();
        for (let qq = 0; qq < uq; qq++) Bq = Vq * qq, xq.push(mq[Wq].x + Bq * cq.x, mq[Wq].y + Bq * cq.y, mq[Wq].z + Bq * cq.z), xq.push(mq[Wq].x + (Bq + dq) * cq.x, mq[Wq].y + (Bq + dq) * cq.y, mq[Wq].z + (Bq + dq) * cq.z), Aq.push(aq, aq + 1), aq += 2
      }
      const jq = new Oq.d;
      return jq.positions = xq, jq.indices = Aq, jq
    }

    function Bq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Yq = Eq.instance,
        lq = Eq.lines,
        Oq = Eq.colors;
      if (Yq) {
        const qq = Yq.getVerticesData(xq.g.PositionKind);
        let Eq, gq;
        Oq && (Eq = Yq.getVerticesData(xq.g.ColorKind));
        let mq = 0,
          Aq = 0;
        for (let Yq = 0; Yq < lq.length; Yq++) {
          const xq = lq[Yq];
          for (let lq = 0; lq < xq.length; lq++) qq[mq] = xq[lq].x, qq[mq + 1] = xq[lq].y, qq[mq + 2] = xq[lq].z, Oq && Eq && (gq = Oq[Yq], Eq[Aq] = gq[lq].r, Eq[Aq + 1] = gq[lq].g, Eq[Aq + 2] = gq[lq].b, Eq[Aq + 3] = gq[lq].a, Aq += 4), mq += 3
        }
        return Yq.updateVerticesData(xq.g.PositionKind, qq, !1, !1), Oq && Eq && Yq.updateVerticesData(xq.g.ColorKind, Eq, !1, !1), Yq.refreshBoundingInfo(), Yq
      }
      const Aq = !!Oq,
        uq = new mq.b(qq, gq, null, void 0, void 0, Aq, Eq.useVertexAlpha, Eq.material);
      return cq(Eq).applyToMesh(uq, Eq.updatable), uq
    }

    function Wq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Yq = Eq.colors ? [Eq.colors] : null;
      return Bq(qq, {
        lines: [Eq.points],
        updatable: Eq.updatable,
        instance: Eq.instance,
        colors: Yq,
        useVertexAlpha: Eq.useVertexAlpha,
        material: Eq.material
      }, gq)
    }

    function Nq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Oq = Eq.points,
        xq = Eq.instance,
        cq = Eq.gapSize || 1,
        Bq = Eq.dashSize || 3;
      if (xq) {
        const qq = qq => {
          const Eq = Yq.q.Zero(),
            gq = qq.length / 6;
          let lq, mq, Aq, cq, uq = 0,
            Bq = 0;
          for (Aq = 0; Aq < Oq.length - 1; Aq++) Oq[Aq + 1].subtractToRef(Oq[Aq], Eq), uq += Eq.length();
          const Wq = uq / gq,
            Nq = xq._creationDataStorage.dashSize,
            aq = Nq * Wq / (Nq + xq._creationDataStorage.gapSize);
          for (Aq = 0; Aq < Oq.length - 1; Aq++)
            for (Oq[Aq + 1].subtractToRef(Oq[Aq], Eq), lq = Math.floor(Eq.length() / Wq), Eq.normalize(), cq = 0; cq < lq && Bq < qq.length;) mq = Wq * cq, qq[Bq] = Oq[Aq].x + mq * Eq.x, qq[Bq + 1] = Oq[Aq].y + mq * Eq.y, qq[Bq + 2] = Oq[Aq].z + mq * Eq.z, qq[Bq + 3] = Oq[Aq].x + (mq + aq) * Eq.x, qq[Bq + 4] = Oq[Aq].y + (mq + aq) * Eq.y, qq[Bq + 5] = Oq[Aq].z + (mq + aq) * Eq.z, Bq += 6, cq++;
          for (; Bq < qq.length;) qq[Bq] = Oq[Aq].x, qq[Bq + 1] = Oq[Aq].y, qq[Bq + 2] = Oq[Aq].z, Bq += 3
        };
        return (Eq.dashNb || Eq.dashSize || Eq.gapSize || Eq.useVertexAlpha || Eq.material) && Aq.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), xq.updateMeshPositions(qq, !1), xq
      }
      const Wq = new mq.b(qq, gq, null, void 0, void 0, void 0, Eq.useVertexAlpha, Eq.material);
      return uq(Eq).applyToMesh(Wq, Eq.updatable), Wq._creationDataStorage = new lq.l, Wq._creationDataStorage.dashSize = Bq, Wq._creationDataStorage.gapSize = cq, Wq
    }
    let aq = !1;
    aq || (aq = !0, Oq.d.CreateLineSystem = cq, Oq.d.CreateDashedLines = uq, lq.e.CreateLines = function(qq, Eq) {
      return Wq(qq, {
        points: Eq,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, lq.e.CreateDashedLines = function(qq, Eq, gq, Yq, lq) {
      return Nq(qq, {
        points: Eq,
        dashSize: gq,
        gapSize: Yq,
        dashNb: lq,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40213: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Wq,
      c: () => Vq
    });
    var Yq, lq, Oq = gq(37289),
      mq = gq(39879),
      xq = gq(40163),
      Aq = gq(40221),
      cq = gq(40037),
      uq = gq(40225),
      Bq = gq(39636);
    class Wq extends xq.e {
      _isShaderMaterial(qq) {
        return !!qq && "ShaderMaterial" === qq.getClassName()
      }
      constructor(qq) {
        let Eq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Yq = arguments.length > 5 ? arguments[5] : void 0,
          lq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 ? arguments[7] : void 0;
        super(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Eq, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Yq, this.useVertexAlpha = lq, this.color = new Oq.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Eq && (this.color = Eq.color.clone(), this.alpha = Eq.alpha, this.useVertexColor = Eq.useVertexColor, this.useVertexAlpha = Eq.useVertexAlpha), this.intersectionThreshold = .1;
        const Aq = {
          attributes: [mq.g.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Aq.defines.push("#define VERTEXALPHA") : Aq.needAlphaBlending = !1, this.useVertexColor ? (Aq.defines.push("#define VERTEXCOLOR"), Aq.attributes.push(mq.g.ColorKind)) : (Aq.uniforms.push("color"), this._color4 = new Oq.g), xq) this.material = xq;
        else {
          this.ZJ().Ba().isWebGPU && !Wq.ForceGLSL && (this._shaderLanguage = 1), Aq.shaderLanguage = this._shaderLanguage, Aq.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([gq.e(335).then((() => gq(42311))), gq.e(341).then((() => gq(42320)))]) : await Promise.all([gq.e(317).then((() => gq(42324))), gq.e(323).then((() => gq(42328)))])
          };
          const qq = new uq.s("colorShader", this.ZJ(), "color", Aq, !1);
          qq.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(qq)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(qq) {
        const Eq = this.material;
        if (Eq === qq) return;
        const gq = Eq && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(qq), gq && Eq?.dispose()
      }
      _setInternalMaterial(qq) {
        this._setMaterial(qq), this.material && (this.material.fillMode = cq.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(qq) {}
      _bind(qq, Eq) {
        if (!this._geometry) return this;
        const gq = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Eq, gq) : this._geometry._bind(Eq, gq, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: qq,
            g: Eq,
            b: gq
          } = this.color;
          this._color4.set(qq, Eq, gq, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(qq, Eq, gq) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Yq = this.ZJ().Ba();
        return this._unIndexed ? Yq.drawArraysType(cq.e.LineListDrawMode, qq.verticesStart, qq.verticesCount, gq) : Yq.drawElementsType(cq.e.LineListDrawMode, qq.indexStart, qq.indexCount, gq), this
      }
      dispose(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Eq) && this.material?.dispose(!1, !1, !0), super.dispose(qq)
      }
      clone(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (Eq && void 0 === Eq._addToSceneRootNodes) {
          const gq = Eq;
          return gq.source = this, new Wq(qq, this.ZJ(), gq.parent, gq.source, gq.doNotCloneChildren)
        }
        return new Wq(qq, this.ZJ(), Eq, this, gq)
      }
      createInstance(qq) {
        const Eq = new Nq(qq, this);
        if (this.uR) {
          Eq.uR = {};
          for (const qq in this.uR) Eq.uR[qq] = this.uR[qq]
        }
        return Eq
      }
      serialize(qq) {
        super.serialize(qq), qq.color = this.color.bYq(), qq.alpha = this.alpha
      }
      static Parse(qq, Eq) {
        const gq = new Wq(qq.name, Eq);
        return gq.color = Oq.d.FromArray(qq.color), gq.alpha = qq.alpha, gq
      }
    }
    Wq.ForceGLSL = !1;
    class Nq extends Aq.b {
      constructor(qq, Eq) {
        super(qq, Eq), this.intersectionThreshold = Eq.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let aq = !1;

    function Vq() {
      aq || (aq = !0, xq.e._LinesMeshParser = (qq, Eq) => Wq.Parse(qq, Eq))
    }(Yq = Wq.prototype).enableEdgesRendering ?? (Yq.enableEdgesRendering = (0, Bq.i)("LinesMesh", "enableEdgesRendering")), (lq = Nq.prototype).enableEdgesRendering ?? (lq.enableEdgesRendering = (0, Bq.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38649: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(38653);
    const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
      ...qq
    } : null : qq.clone(Eq) : null;
    class Oq {
      static DeepCopy(qq, Eq, gq, Oq) {
        let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xq = function(qq) {
          const Eq = [];
          do {
            const gq = Object.getOwnPropertyNames(qq);
            for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
          } while (qq = Object.getPrototypeOf(qq));
          return Eq
        }(qq);
        for (const cq of xq) {
          if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
          if (cq.endsWith("Observable")) continue;
          if (gq && -1 !== gq.indexOf(cq)) continue;
          const xq = qq[cq],
            uq = typeof xq;
          if ("function" !== uq) try {
            if ("object" === uq)
              if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
              else if (xq instanceof Array) {
              if (Eq[cq] = [], xq.length > 0)
                if ("object" == typeof xq[0])
                  for (let qq = 0; qq < xq.length; qq++) {
                    const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
                  } else Eq[cq] = xq.slice(0)
            } else Eq[cq] = lq(xq, Eq, mq);
            else Eq[cq] = xq
          } catch (Aq) {
            Yq.b.Warn(Aq.message)
          }
        }
      }
    }
  },
  37872: (qq, Eq, gq) => {
    function Yq() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
        const Eq = 16 * Math.random() | 0;
        return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
      }))
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  38653: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      static _CheckLimit(qq, Eq) {
        let gq = Yq._LogLimitOutputs[qq];
        return gq ? gq.current++ : (gq = {
          limit: Eq,
          current: 1
        }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
      }
      static _GenerateLimitMessage(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gq = Yq._LogLimitOutputs[qq];
        if (!gq || !Yq.MessageLimitReached) return;
        const lq = this._Levels[Eq];
        gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
      }
      static _AddLogEntry(qq) {
        Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
      }
      static _FormatMessage(qq) {
        const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
          gq = new Date;
        return "[" + Eq(gq.getHours()) + ":" + Eq(gq.getMinutes()) + ":" + Eq(gq.getSeconds()) + "]: " + qq
      }
      static _LogDisabled(qq, Eq) {}
      static _LogEnabled() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const lq = Array.isArray(Eq) ? Eq[0] : Eq;
        if (void 0 !== gq && !Yq._CheckLimit(lq, gq)) return;
        const Oq = Yq._FormatMessage(lq),
          mq = this._Levels[qq],
          xq = Array.isArray(Eq) ? Eq.slice(1) : [];
        mq.logFunc && mq.logFunc("BJS - " + Oq, ...xq);
        const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
        Yq._AddLogEntry(Aq), Yq._GenerateLimitMessage(lq, qq)
      }
      static get LogCache() {
        return Yq._LogCache
      }
      static ClearLogCache() {
        Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq.errorsCount = 0
      }
      static set LogLevels(qq) {
        Yq.Log = Yq._LogDisabled, Yq.Warn = Yq._LogDisabled, Yq.Error = Yq._LogDisabled;
        const Eq = [Yq.MessageLogLevel, Yq.WarningLogLevel, Yq.ErrorLogLevel];
        for (const gq of Eq)
          if ((qq & gq) === gq) {
            const qq = this._Levels[gq];
            Yq[qq.name] = Yq._LogEnabled.bind(Yq, gq)
          }
      }
    }
    Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels = [{}, {
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
    }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
  },
  39833: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq.i
    });
    var Yq = gq(39838);
    (0, Yq.e)()
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);