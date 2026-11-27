export const id = 281;
export const ids = [281];
export const modules = {
  41247: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      c: () => Te,
      f: () => Je,
      h: () => Fe
    });
    var ye = He(41036),
      be = He(39467),
      Me = He(41175),
      Ke = He(41084);
    class Ue {
      get RZ() {
        return this._isDisposed
      }
      constructor(ee, ie, He) {
        let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ue = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Fe = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Je = arguments.length > 7 ? arguments[7] : void 0,
          oe = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Ke.c)(), ee && ee.Xx ? this._engine = ee.Xx().Nf() : this._engine = ee, this._updatable = He, this._instanced = Ue, this._divisor = Je || 1, this._label = oe, ie instanceof ye.c ? (this._data = null, this._buffer = ie) : (this._data = ie, this._buffer = null), this.byteStride = Fe ? be : be * Float32Array.BYTES_PER_ELEMENT, Me || this.create()
      }
      createVertexBuffer(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ke = arguments.length > 6 ? arguments[6] : void 0;
        const Ue = Me ? ie : ie * Float32Array.BYTES_PER_ELEMENT,
          Je = ye ? Me ? ye : ye * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Fe(this._engine, this, ee, this._updatable, !0, Je, void 0 === be ? this._instanced : be, Ue, He, void 0, void 0, !0, this._divisor || Ke)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !ee && this._buffer || (ee = ee || this._data, ee && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, ee), this._data = ee) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(ee, this._label), this._data = ee) : this._buffer = this._engine.createVertexBuffer(ee, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.bk > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.bk, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.bk, void 0, this._label));
          be.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(ee) {
        this.create(ee)
      }
      updateDirectly(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, ee, ye ? ie : ie * Float32Array.BYTES_PER_ELEMENT, He ? He * this.byteStride : void 0), this._data = 0 === ie && void 0 === He ? ee : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Fe {
      get RZ() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(ee) {
        const ie = 0 != ee;
        this._instanceDivisor = ee, ie !== this._instanced && (this._instanced = ie, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const ee = this.getData();
        return ee ? Array.isArray(ee) ? ee.length / (this.byteStride / 4) - this.byteOffset / 4 : (ee.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(ee, ie, He, ye, be, Ke, Re, ke, qe, fe) {
        let Te, pe = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Xe = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          ze = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Be = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = ee, "object" === typeof ye && null !== ye ? (Te = ye.updatable ?? !1, be = ye.postponeInternalCreation, Ke = ye.stride, Re = ye.instanced, ke = ye.offset, qe = ye.size, fe = ye.type, pe = ye.normalized ?? !1, Xe = ye.useBytes ?? !1, ze = ye.divisor ?? 1, Be = ye.takeBufferOwnership ?? !1, this._label = ye.label) : Te = !!ye, ie instanceof Ue ? (this._buffer = ie, this._ownsBuffer = Be) : (this._buffer = new Ue(ee, ie, Te, Ke, be, Re, Xe, ze, this._label), this._ownsBuffer = !0), this.uniqueId = Fe._Counter++, this._kind = He, void 0 === fe) {
          const ee = this.getData();
          this.type = ee ? oe(ee) : Fe.FLOAT
        } else this.type = fe;
        const Ee = (0, Me.o)(this.type);
        Xe ? (this._size = qe || (Ke ? Ke / Ee : Je(He)), this.byteStride = Ke || this._buffer.byteStride || this._size * Ee, this.byteOffset = ke || 0) : (this._size = qe || Ke || Je(He), this.byteStride = Ke ? Ke * Ee : this._buffer.byteStride || this._size * Ee, this.byteOffset = (ke || 0) * Ee), this.normalized = pe, this._instanced = void 0 !== Re && Re, this._instanceDivisor = Re ? ze : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(ee) {
        switch (ee) {
          case Fe.BYTE:
            return 0;
          case Fe.UNSIGNED_BYTE:
            return 1;
          case Fe.SHORT:
            return 2;
          case Fe.UNSIGNED_SHORT:
            return 3;
          case Fe.INT:
            return 4;
          case Fe.UNSIGNED_INT:
            return 5;
          case Fe.FLOAT:
            return 6;
          case Fe.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${ee}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Fe._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(ee, ie) {
        const He = this.getData();
        return He ? (0, Me.n)(He, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, ee, ie) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Me.o)(this.type)
      }
      Qye() {
        return this.byteOffset / (0, Me.o)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Me.o)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(ee) {
        this._buffer.create(ee), this._alignBuffer()
      }
      update(ee) {
        this._buffer.update(ee), this._alignBuffer()
      }
      updateDirectly(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(ee, ie, void 0, He), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(ee, ie) {
        (0, Me.f)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, ee, this.normalized, ((ee, He) => {
          for (let ye = 0; ye < this._size; ye++) ie(ee[ye], He + ye)
        }))
      }
      _alignBuffer() {}
    }

    function Je(ee) {
      switch (ee) {
        case Fe.UVKind:
        case Fe.UV2Kind:
        case Fe.UV3Kind:
        case Fe.UV4Kind:
        case Fe.UV5Kind:
        case Fe.UV6Kind:
          return 2;
        case Fe.NormalKind:
        case Fe.PositionKind:
          return 3;
        case Fe.ColorKind:
        case Fe.ColorInstanceKind:
        case Fe.MatricesIndicesKind:
        case Fe.MatricesIndicesExtraKind:
        case Fe.MatricesWeightsKind:
        case Fe.MatricesWeightsExtraKind:
        case Fe.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + ee + "'")
      }
    }

    function oe(ee) {
      return ee instanceof Int8Array ? Fe.BYTE : ee instanceof Uint8Array ? Fe.UNSIGNED_BYTE : ee instanceof Int16Array ? Fe.SHORT : ee instanceof Uint16Array ? Fe.UNSIGNED_SHORT : ee instanceof Int32Array ? Fe.INT : ee instanceof Uint32Array ? Fe.UNSIGNED_INT : Fe.FLOAT
    }

    function Re(ee) {
      return (0, Me.o)(ee)
    }

    function ke(ee, ie, He, ye, be, Ke, Ue, Fe) {
      (0, Me.f)(ee, ie, He, ye, be, Ke, Ue, ((ee, ie) => {
        for (let He = 0; He < ye; He++) Fe(ee[He], ie + He)
      }))
    }

    function qe(ee, ie, He, ye, be, Ke, Ue, Fe) {
      return (0, Me.n)(ee, ie, He, ye, be, Ke, Ue, Fe)
    }
    Fe._Counter = 0, Fe.BYTE = 5120, Fe.UNSIGNED_BYTE = 5121, Fe.SHORT = 5122, Fe.UNSIGNED_SHORT = 5123, Fe.INT = 5124, Fe.UNSIGNED_INT = 5125, Fe.FLOAT = 5126, Fe.HALF_FLOAT = 5131, Fe.PositionKind = "position", Fe.NormalKind = "normal", Fe.TangentKind = "tangent", Fe.UVKind = "uv", Fe.UV2Kind = "uv2", Fe.UV3Kind = "uv3", Fe.UV4Kind = "uv4", Fe.UV5Kind = "uv5", Fe.UV6Kind = "uv6", Fe.ColorKind = "color", Fe.ColorInstanceKind = "instanceColor", Fe.MatricesIndicesKind = "matricesIndices", Fe.MatricesWeightsKind = "matricesWeights", Fe.MatricesIndicesExtraKind = "matricesIndicesExtra", Fe.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let fe = !1;

    function Te() {
      fe || (fe = !0, Fe.DeduceStride = Je, Fe.GetDataType = oe, Fe.GetTypeByteLength = Re, Fe.ForEach = ke, Fe.GetFloatData = qe)
    }
  },
  41036: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.bk = 0, this.is32Bits = !1, this.uniqueId = ye._Counter++
      }
    }
    ye._Counter = 0
  },
  41242: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(37917),
      be = He(41247);
    class Me {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || ie && !this.pickedMesh.isVerticesDataPresent(be.h.NormalKind)) return null;
        let He, Me = this.pickedMesh.eMe();
        0 === Me?.length && (Me = null);
        const Ke = ye.j.rf[0],
          Ue = ye.j.rf[1],
          Fe = ye.j.rf[2];
        if (ie) {
          const ee = this.pickedMesh.getVerticesData(be.h.NormalKind);
          let ie = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId], Ke) : Ke.wie(ee[3 * this.faceId * 3], ee[3 * this.faceId * 3 + 1], ee[3 * this.faceId * 3 + 2]),
            Je = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 1], Ue) : Ue.wie(ee[3 * (3 * this.faceId + 1)], ee[3 * (3 * this.faceId + 1) + 1], ee[3 * (3 * this.faceId + 1) + 2]),
            oe = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 2], Fe) : Fe.wie(ee[3 * (3 * this.faceId + 2)], ee[3 * (3 * this.faceId + 2) + 1], ee[3 * (3 * this.faceId + 2) + 2]);
          ie = ie.scale(this.bu), Je = Je.scale(this.bv), oe = oe.scale(1 - this.bu - this.bv), He = new ye.p(ie.x + Je.x + oe.x, ie.y + Je.y + oe.y, ie.z + Je.z + oe.z)
        } else {
          const ee = this.pickedMesh.getVerticesData(be.h.PositionKind),
            ie = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId], Ke) : Ke.wie(ee[3 * this.faceId * 3], ee[3 * this.faceId * 3 + 1], ee[3 * this.faceId * 3 + 2]),
            Je = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 1], Ue) : Ue.wie(ee[3 * (3 * this.faceId + 1)], ee[3 * (3 * this.faceId + 1) + 1], ee[3 * (3 * this.faceId + 1) + 2]),
            oe = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 2], Fe) : Fe.wie(ee[3 * (3 * this.faceId + 2)], ee[3 * (3 * this.faceId + 2) + 1], ee[3 * (3 * this.faceId + 2) + 2]),
            Re = ie.subtract(Je),
            ke = oe.subtract(Je);
          He = ye.p.Cross(Re, ke)
        }
        const Je = (ee, ie) => {
          if (-1 !== this.thinInstanceIndex) {
            const He = ee._thinInstanceDataStorage.matrixData,
              be = this.thinInstanceIndex << 4;
            if (He && He.length > be) {
              const ee = ye.j.Matrix[0];
              ye.b.FromArrayToRef(He, be, ee), ye.p.TransformNormalToRef(ie, ee, ie)
            }
          }
          let He = ee.getWorldMatrix();
          ee.nonUniformScaling && (ye.j.Matrix[0].jD(He), He = ye.j.Matrix[0], He.setTranslationFromFloats(0, 0, 0), He.invert(), He.transposeToRef(ye.j.Matrix[1]), He = ye.j.Matrix[1]), ye.p.TransformNormalToRef(ie, He, ie)
        };
        if (ee && Je(this.pickedMesh, He), this.ray) {
          const ie = ye.j.rf[0].jD(He);
          ee || Je(this.pickedMesh, ie), ye.p.Dot(ie, this.ray.direction) > 0 && He.negateInPlace()
        }
        return He.normalize(), He
      }
      getTextureCoordinates() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be.h.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(ee)) return null;
        const ie = this.pickedMesh.eMe();
        if (!ie) return null;
        const He = this.pickedMesh.getVerticesData(ee);
        if (!He) return null;
        let Me = ye.n.FromArray(He, 2 * ie[3 * this.faceId]),
          Ke = ye.n.FromArray(He, 2 * ie[3 * this.faceId + 1]),
          Ue = ye.n.FromArray(He, 2 * ie[3 * this.faceId + 2]);
        return Me = Me.scale(this.bu), Ke = Ke.scale(this.bv), Ue = Ue.scale(1 - this.bu - this.bv), new ye.n(Me.x + Ke.x + Ue.x, Me.y + Ke.y + Ue.y)
      }
    }
  },
  41084: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(40936);
    let be = !1;

    function Me() {
      be || (be = !0, ye.ThinEngine.prototype.updateDynamicIndexBuffer = function(ee, ie) {
        let He;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(ee), He = ee.is32Bits ? ie instanceof Uint32Array ? ie : new Uint32Array(ie) : ie instanceof Uint16Array ? ie : new Uint16Array(ie), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, He, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, ye.ThinEngine.prototype.updateDynamicVertexBuffer = function(ee, ie, He, ye) {
        this.bindArrayBuffer(ee), void 0 === He && (He = 0);
        const be = ie.byteLength || ie.length;
        void 0 === ye || ye >= be && 0 === He ? ie instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, He, new Float32Array(ie)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, He, ie) : ie instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, He, new Float32Array(ie).subarray(0, ye / 4)) : (ie = ArrayBuffer.isView(ie) ? new Uint8Array(ie.buffer, ie.byteOffset, ye) : new Uint8Array(ie, 0, ye), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, He, ie)), this._resetVertexBufferBinding()
      })
    }
  },
  41051: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    class ye {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = ie, !ee && (ee = ie.createTexture(), !ee)) throw new Error("Unable to create webGL texture");
        this.set(ee)
      }
      setUsage() {}
      set(ee) {
        this._webGLTexture = ee
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(ee) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(ee)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const ee of this._MSAARenderBuffers) this._context.deleteRenderbuffer(ee);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[ee] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41e3: (ee, ie, He) => {
    He.d(ie, {
      e: () => ze
    });
    var ye = He(37931),
      be = He(40945),
      Me = He(37929),
      Ke = He(39467),
      Ue = He(37927),
      Fe = He(41005);
    class Je {
      constructor() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, ee && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(ee) {
        this._zOffset !== ee && (this._zOffset = ee, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(ee) {
        this._zOffsetUnits !== ee && (this._zOffsetUnits = ee, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(ee) {
        this._cullFace !== ee && (this._cullFace = ee, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(ee) {
        this._cull !== ee && (this._cull = ee, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(ee) {
        this._depthFunc !== ee && (this._depthFunc = ee, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(ee) {
        this._depthMask !== ee && (this._depthMask = ee, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(ee) {
        this._depthTest !== ee && (this._depthTest = ee, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(ee) {
        this._frontFace !== ee && (this._frontFace = ee, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(ee) {
        this.isDirty && (this._isCullDirty && (this.cull ? ee.enable(ee.CULL_FACE) : ee.disable(ee.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (ee.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (ee.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? ee.enable(ee.DEPTH_TEST) : ee.disable(ee.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (ee.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (ee.enable(ee.POLYGON_OFFSET_FILL), ee.polygonOffset(this.zOffset, this.zOffsetUnits)) : ee.disable(ee.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (ee.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class oe {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(ee) {
        this._func !== ee && (this._func = ee, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(ee) {
        this._backFunc !== ee && (this._backFunc = ee, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(ee) {
        this._funcRef !== ee && (this._funcRef = ee, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(ee) {
        this._funcMask !== ee && (this._funcMask = ee, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(ee) {
        this._opStencilFail !== ee && (this._opStencilFail = ee, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(ee) {
        this._opDepthFail !== ee && (this._opDepthFail = ee, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(ee) {
        this._opStencilDepthPass !== ee && (this._opStencilDepthPass = ee, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(ee) {
        this._backOpStencilFail !== ee && (this._backOpStencilFail = ee, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(ee) {
        this._backOpDepthFail !== ee && (this._backOpDepthFail = ee, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(ee) {
        this._backOpStencilDepthPass !== ee && (this._backOpStencilDepthPass = ee, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(ee) {
        this._mask !== ee && (this._mask = ee, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(ee) {
        this._enabled !== ee && (this._enabled = ee, this._isStencilTestDirty = !0)
      }
      constructor() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, ee && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(ee) {
        if (!ee) return;
        const ie = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = ie ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = ie ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = ie ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = ie ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = ie ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = ie ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = ie ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = ie ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = ie ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = ie ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = ie ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = ie ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? ee.enable(ee.STENCIL_TEST) : ee.disable(ee.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (ee.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (ee.stencilFuncSeparate(ee.FRONT, this.func, this.funcRef, this.funcMask), ee.stencilFuncSeparate(ee.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (ee.stencilOpSeparate(ee.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), ee.stencilOpSeparate(ee.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Re {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Re.ALWAYS, this.opStencilFail = Re.KEEP, this.opDepthFail = Re.KEEP, this.opStencilDepthPass = Re.REPLACE, this.backFunc = Re.ALWAYS, this.backOpStencilFail = Re.KEEP, this.backOpDepthFail = Re.KEEP, this.backOpStencilDepthPass = Re.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(ee) {
        this.func = ee
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(ee) {
        this.backFunc = ee
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(ee) {
        this.funcRef = ee
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(ee) {
        this.funcMask = ee
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(ee) {
        this.opStencilFail = ee
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(ee) {
        this.opDepthFail = ee
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(ee) {
        this.opStencilDepthPass = ee
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(ee) {
        this.backOpStencilFail = ee
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(ee) {
        this.backOpDepthFail = ee
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(ee) {
        this.backOpStencilDepthPass = ee
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(ee) {
        this.mask = ee
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(ee) {
        this.enabled = ee
      }
    }
    Re.ALWAYS = 519, Re.KEEP = 7680, Re.REPLACE = 7681;
    var ke = He(41013),
      qe = He(40985),
      fe = He(40924),
      Te = He(40968),
      pe = He(40979);

    function Xe(ee, ie) {
      if (ie) {
        const {
          requestAnimationFrame: He
        } = ie;
        if ("function" === typeof He) return He(ee)
      }
      if ((0, Te.m)()) {
        const {
          requestAnimationFrame: He
        } = ie || window;
        if ("function" === typeof He) return He(ee)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(ee);
      return setTimeout(ee, 16)
    }
    class ze {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(ee) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get Gbe() {
        return this._useReverseDepthBuffer
      }
      set Gbe(ee) {
        ee !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = ee, this._depthCullingState.depthFunc = ee ? 518 : 515)
      }
      setColorWrite(ee) {
        ee !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = ee)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(ee) {
        if (ee) return this.isNDCHalfZRange ? ee.IS_NDC_HALF_ZRANGE = "" : delete ee.IS_NDC_HALF_ZRANGE, this.Gbe ? ee.USE_REVERSE_DEPTHBUFFER = "" : delete ee.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? ee.USE_EXACT_SRGB_CONVERSIONS = "" : delete ee.USE_EXACT_SRGB_CONVERSIONS);
        {
          let ee = "";
          return this.isNDCHalfZRange && (ee += "#define IS_NDC_HALF_ZRANGE"), this.Gbe && (ee && (ee += "\n"), ee += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (ee && (ee += "\n"), ee += "#define USE_EXACT_SRGB_CONVERSIONS"), ee
        }
      }
      _rebuildInternalTextures() {
        const ee = this._internalTexturesCache.slice();
        for (const ie of ee) ie._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const ee = this._renderTargetWrapperCache.slice();
        for (const ie of ee) ie.textures?.some((ee => 15 === ee.source)) || ie._rebuild()
      }
      _rebuildEffects() {
        for (const ee in this._compiledEffects) {
          const ie = this._compiledEffects[ee];
          ie._pipelineContext = null, ie._prepareEffect()
        }
        be.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Ke.e.Warn(this.name + " context successfully restored."), this.hf.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(ee) {
        setTimeout((() => {
          this._clearEmptyResources();
          const ie = this._depthCullingState.depthTest,
            He = this._depthCullingState.depthFunc,
            ye = this._depthCullingState.depthMask,
            be = this._stencilState.stencilTest;
          ee(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = ie, this._depthCullingState.depthFunc = He, this._depthCullingState.depthMask = ye, this._stencilState.stencilTest = be, this._flagContextRestored()
        }), 0)
      }
      get RZ() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(ee) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(ee) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const ee = new Uint8Array(4),
            ie = [ee, ee, ee, ee, ee, ee];
          this._emptyCubeTexture = this.createRawCubeTexture(ie, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(ee) {
        this._framebufferDimensionsObject = ee
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(ee) {
        if (!ee) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const ie = this._activeRenderLoops.indexOf(ee);
        ie >= 0 && (this._activeRenderLoops.splice(ie, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: ee
            } = this.customAnimationFrameRequester;
            ee && ee(this.customAnimationFrameRequester.Qf), delete this.customAnimationFrameRequester.Qf
          }
        } else if (0 !== this._frameHandler) {
          const ee = this._frameHandler;
          if (this._frameHandler = 0, (0, Te.m)()) {
            const {
              cancelAnimationFrame: ie
            } = this.getHostWindow() || window;
            if ("function" === typeof ie) return ie(ee)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(ee);
          return clearTimeout(ee)
        }
      }
      LO() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      ZR() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(ee) {
        this._maxFPS = ee, void 0 !== ee && (this._minFrameTime = ee <= 0 ? Number.MAX_VALUE : 1e3 / ee)
      }
      _isOverFrameTime(ee) {
        if (!ee || void 0 === this._maxFPS) return !1;
        const ie = ee - this._lastFrameTime;
        return this._lastFrameTime = ee, this._renderAccumulator += ie, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(ee) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(ee)) {
          let ee = !0;
          (this.RZ || !this.renderEvenInBackground && this._windowIsBackground) && (ee = !1), ee && (this.LO(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.ZR())
        }
      }
      _renderLoop(ee) {
        this._processFrame(ee), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let ee = 0; ee < this._activeRenderLoops.length; ee++) {
          (0, this._activeRenderLoops[ee])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(ee, ie) {
        return Xe(ee, ie)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Qf = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Qf) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(ee) {
        -1 === this._activeRenderLoops.indexOf(ee) && (this._activeRenderLoops.push(ee), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(ee) {
        this._depthCullingState.depthTest = ee
      }
      setZOffset(ee) {
        this._depthCullingState.zOffset = this.Gbe ? -ee : ee
      }
      getZOffset() {
        const ee = this._depthCullingState.zOffset;
        return this.Gbe ? -ee : ee
      }
      setZOffsetUnits(ee) {
        this._depthCullingState.zOffsetUnits = this.Gbe ? -ee : ee
      }
      getZOffsetUnits() {
        const ee = this._depthCullingState.zOffsetUnits;
        return this.Gbe ? -ee : ee
      }
      getHostWindow() {
        return (0, Te.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(ee) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const ee of this.scenes) ee._rebuildTextures();
        for (const ee of this._virtualScenes) ee._rebuildTextures()
      }
      _releaseRenderTargetWrapper(ee) {
        const ie = this._renderTargetWrapperCache.indexOf(ee); - 1 !== ie && this._renderTargetWrapperCache.splice(ie, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(ee, ie, He) {
        const ye = ie || this.getRenderWidth(),
          be = He || this.getRenderHeight(),
          Me = ee.x || 0,
          Ke = ee.y || 0;
        this._cachedViewport = ee, this._viewport(Me * ye, Ke * be, ye * ee.width, be * ee.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(ee) {
        return new Path2D(ee)
      }
      get description() {
        let ee = this.name + this.version;
        return this._caps.parallelShaderCompile && (ee += " - Parallel shader compilation"), ee
      }
      _createTextureBase(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ue = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Fe = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Je = arguments.length > 7 ? arguments[7] : void 0,
          oe = arguments.length > 8 ? arguments[8] : void 0,
          Re = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ke = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          qe = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Te = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          pe = arguments.length > 13 ? arguments[13] : void 0,
          Xe = arguments.length > 14 ? arguments[14] : void 0,
          Be = arguments.length > 15 ? arguments[15] : void 0;
        const Ee = "data:" === (ee = ee || "").substring(0, 5),
          ge = "blob:" === ee.substring(0, 5),
          Oe = Ee && -1 !== ee.indexOf(";base64,"),
          de = ke || new fe.b(this, 1);
        de !== ke && (de.label = ee.substring(0, 60));
        const We = ee;
        !this._transformTextureUrl || Oe || ke || Re || (ee = this._transformTextureUrl(ee)), We !== ee && (de._originalUrl = We);
        const te = ee.lastIndexOf(".");
        let Ze = Te || (te > -1 ? ee.substring(te).toLowerCase() : "");
        Ze.indexOf("?") > -1 && (Ze = Ze.split("?")[0]);
        const we = ze.GetCompatibleTextureLoader(Ze, pe);
        ye && ye.addPendingData(de), de.url = ee, de.generateMipMaps = !ie, de.samplingMode = be, de.invertY = He, de._useSRGBBuffer = this._getUseSRGBBuffer(!!Be, ie), this._doNotHandleContextLost || (de._buffer = Re);
        let De = null;
        Ue && !ke && (De = de.onLoadedObservable.add(Ue)), ke || this._internalTexturesCache.push(de);
        const Pe = (He, ke) => {
          ye && ye.removePendingData(de), ee === We ? (De && de.onLoadedObservable.remove(De), Me.b.UseFallbackTexture && ee !== Me.b.FallbackTexture && this._createTextureBase(Me.b.FallbackTexture, ie, de.invertY, ye, be, null, Fe, Je, oe, Re, de), He = (He || "Unknown error") + (Me.b.UseFallbackTexture ? " - Fallback texture was used" : ""), de.onErrorObservable.notifyObservers({
            message: He,
            exception: ke
          }), Fe && Fe(He, ke)) : (Ke.e.Warn(`Failed to load ${ee}, falling back to ${We}`), this._createTextureBase(We, ie, de.invertY, ye, be, Ue, Fe, Je, oe, Re, de, qe, Te, pe, Xe, Be))
        };
        if (we) {
          const ie = async ee => {
            (await we).loadData(ee, de, ((ee, ie, He, Me, Ke, Ue) => {
              Ue ? Pe("TextureLoader failed to load data") : Je(de, Ze, ye, {
                width: ee,
                height: ie
              }, de.invertY, !He, Me, (() => (Ke(), !1)), be)
            }), Xe)
          };
          if (Re) {
            const ee = async ee => {
              try {
                await ie(ee)
              } catch (He) {
                Pe("Failed to parse texture data", He)
              }
            };
            Re instanceof ArrayBuffer ? ee(new Uint8Array(Re)) : ArrayBuffer.isView(Re) ? ee(Re) : Fe && Fe("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(ee, (async ee => {
            try {
              await ie(new Uint8Array(ee))
            } catch (He) {
              Pe("Failed to parse texture data", He)
            }
          }), void 0, ye ? ye.offlineProvider : void 0, !0, ((ee, ie) => {
            Pe("Unable to load " + (ee && ee.responseURL, ie))
          }))
        } else {
          const He = ee => {
            ge && !this._doNotHandleContextLost && (de._buffer = ee), Je(de, Ze, ye, ee, de.invertY, ie, !1, oe, be)
          };
          !Ee || Oe ? Re && ("string" === typeof Re.decoding || Re.close) ? He(Re) : ze._FileToolsLoadImage(ee || "", He, Pe, ye ? ye.offlineProvider : null, pe, de.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Re || Re instanceof ArrayBuffer || ArrayBuffer.isView(Re) || Re instanceof Blob ? ze._FileToolsLoadImage(Re, He, Pe, ye ? ye.offlineProvider : null, pe, de.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Re && He(Re)
        }
        return de
      }
      _rebuildBuffers() {
        for (const ee of this._uniformBuffers) ee._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Te.h)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const ee in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, ee) && (this._boundTexturesCache[ee] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(ee) {
        this._name = ee
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(ee) {
        this._hardwareScalingLevel = ee, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(ee) {
        this._doNotHandleContextLost = ee
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(ee, ie, He) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Je, this._stencilStateComposer = new oe, this._stencilState = new Re, this._alphaState = new ke.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new ye.d, this.onCanvasFocusObservable = new ye.d, this.onNewSceneAddedObservable = new ye.d, this.onResizeObservable = new ye.d, this.onCanvasPointerOutObservable = new ye.d, this.onEffectErrorObservable = new ye.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new ye.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = ee => this._renderLoop(ee), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new ye.d, this.onAfterShaderCompilationObservable = new ye.d, this.onBeginFrameObservable = new ye.d, this.onEndFrameObservable = new ye.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new ye.d, this.hf = new ye.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Bx = new ye.d, this.onReleaseEffectsObservable = new ye.d, Me.b.Instances.push(this), this.startTime = Fe.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Ue.e.SetMatrixPrecision(!!ie.useLargeWorldRendering || !!ie.useHighPrecisionMatrix), (0, Te.k)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), ie.antialias = ee ?? ie.antialias, ie.deterministicLockstep = ie.deterministicLockstep ?? !1, ie.lockstepMaxSteps = ie.lockstepMaxSteps ?? 4, ie.timeStep = ie.timeStep ?? 1 / 60, ie.stencil = ie.stencil ?? !0, this._audioContext = ie.audioEngineOptions?.audioContext ?? null, this._audioDestination = ie.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = ie.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!ie.doNotHandleContextLost, this._isStencilEnable = !!ie.stencil, this.useExactSrgbConversions = ie.useExactSrgbConversions ?? !1, this.canvasTabIndex = ie.canvasTabIndex ?? this.canvasTabIndex;
        const be = (0, Te.m)() && window.devicePixelRatio || 1,
          Ke = ie.limitDeviceRatio || be;
        He = He || ie.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = He, this._hardwareScalingLevel = He ? 1 / Math.min(Ke, be) : 1, this._lastDevicePixelRatio = be, this._creationOptions = ie
      }
      resize() {
        let ee, ie, He = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const ee = (0, Te.m)() && window.devicePixelRatio || 1,
            ie = this._lastDevicePixelRatio / ee;
          this._lastDevicePixelRatio = ee, this._hardwareScalingLevel *= ie
        }
        if ((0, Te.m)() && (0, Te.h)())
          if (this._renderingCanvas) {
            const He = this._renderingCanvas.getBoundingClientRect?.();
            ee = this._renderingCanvas.clientWidth || He?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, ie = this._renderingCanvas.clientHeight || He?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else ee = window.innerWidth, ie = window.innerHeight;
        else ee = this._renderingCanvas ? this._renderingCanvas.width : 100, ie = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(ee / this._hardwareScalingLevel, ie / this._hardwareScalingLevel, He)
      }
      setSize(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (ee |= 0, ie |= 0, !He && this._renderingCanvas.width === ee && this._renderingCanvas.height === ie) return !1;
        if (this._renderingCanvas.width = ee, this._renderingCanvas.height = ie, this.scenes) {
          for (let ee = 0; ee < this.scenes.length; ee++) {
            const ie = this.scenes[ee];
            for (let ee = 0; ee < ie.cameras.length; ee++) {
              ie.cameras[ee]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re) {
        throw (0, qe.l)("engine.rawTexture")
      }
      createRawCubeTexture(ee, ie, He, ye, be, Me, Ke, Ue) {
        throw (0, qe.l)("engine.rawTexture")
      }
      createRawTexture3D(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        throw (0, qe.l)("engine.rawTexture")
      }
      createRawTexture2DArray(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re) {
        throw (0, qe.l)("engine.rawTexture")
      }
      _sharedInit(ee) {
        this._renderingCanvas = ee
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const ee = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== ee.indexOf("Mobile") || -1 !== ee.indexOf("Mac") && (0, Te.h)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Te.m)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(ee) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(ee, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(ee, ie) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(ee, ie) {
        return createImageBitmap(ee, ie)
      }
      resizeImageBitmap(ee, ie, He) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(ee) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(ee, ie) {
        if ("undefined" === typeof document) return new OffscreenCanvas(ee, ie);
        const He = document.createElement("canvas");
        return He.width = ee, He.height = ie, He
      }
      createCanvas(ee, ie) {
        return ze._CreateCanvas(ee, ie)
      }
      static _FileToolsLoadImage(ee, ie, He, ye, be, Me, Ke) {
        if (!pe.b.loadImage) throw (0, qe.l)("FileTools");
        return pe.b.loadImage(ee, ie, He, ye, be, Me, Ke)
      }
      _loadFile(ee, ie, He, ye, be, Me) {
        const Ke = (0, pe.i)(ee, ie, He, ye, be, Me);
        return this._activeRequests.push(Ke), Ke.onCompleteObservable.add((() => {
          const ee = this._activeRequests.indexOf(Ke); - 1 !== ee && this._activeRequests.splice(ee, 1)
        })), Ke
      }
      static _FileToolsLoadFile(ee, ie, He, ye, be, Me) {
        if (pe.b.loadFile) return pe.b.loadFile(ee, ie, He, ye, be, Me);
        throw (0, qe.l)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), be.c.ResetCache();
        for (const ie of this._activeRequests) ie.abort();
        this._boundRenderFunction = null, this.Bx.notifyObservers(this), this.Bx.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Te.m)() && window.removeEventListener("resize", this._checkForMobile);
        const ee = Me.b.Instances.indexOf(this);
        ee >= 0 && Me.b.Instances.splice(ee, 1), Me.b.Instances.length || (Me.b.OnEnginesDisposedObservable.notifyObservers(this), Me.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(ee) {
        throw (0, qe.l)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(ee, ie) {
        for (let He = 0; He < Me.b.Instances.length; He++) {
          const ye = Me.b.Instances[He];
          for (let He = 0; He < ye.scenes.length; He++) ye.scenes[He].markAllMaterialsAsDirty(ee, ie)
        }
      }
      static GetCompatibleTextureLoader(ee, ie) {
        return null
      }
    }
    ze._RenderPassIdCounter = 0, ze._RescalePostProcessFactory = null, ze.CollisionsEpsilon = .001, ze.QueueNewFrame = Xe
  },
  40954: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersRepository : ye.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersStore : ye.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.IncludesShadersStore : ye.IncludesShadersStoreWGSL
      }
    }
    ye.ShadersRepository = "src/Shaders/", ye.ShadersStore = {}, ye.IncludesShadersStore = {}, ye.ShadersRepositoryWGSL = "src/ShadersWGSL/", ye.ShadersStoreWGSL = {}, ye.IncludesShadersStoreWGSL = {}
  },
  40972: (ee, ie, He) => {
    He.d(ie, {
      e: () => ke,
      i: () => Be,
      k: () => fe,
      n: () => qe,
      p: () => Te,
      s: () => ze,
      w: () => Re,
      A: () => Je,
      D: () => oe,
      F: () => Fe,
      I: () => Ue
    });
    class ye {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(ee) {
        ee && this.program && ee(this.program)
      }
      setEngine(ee) {
        this.engine = ee
      }
      _fillEffectInformation(ee, ie, He, ye, be, Me, Ke, Ue) {
        const Fe = this.engine;
        if (Fe.supportsUniformBuffers)
          for (const oe in ie) ee.bindUniformBlock(oe, ie[oe]);
        let Je;
        for (this.engine.getUniforms(this, He).forEach(((ee, ie) => {
            ye[He[ie]] = ee
          })), this._uniforms = ye, Je = 0; Je < be.length; Je++) {
          null == ee.getUniform(be[Je]) && (be.splice(Je, 1), Je--)
        }
        be.forEach(((ee, ie) => {
          Me[ee] = ie
        }));
        for (const oe of Fe.getAttributes(this, Ke)) Ue.push(oe)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(ee, ie) {
        const He = this._valueCache[ee],
          ye = ie.updateFlag;
        if (void 0 !== He && He === ye) return !1;
        const be = ie.Qbe();
        let Me = this._matrixValueCache[ee];
        if (void 0 !== He && null !== He && void 0 !== Me) {
          let ie = !0;
          for (let ee = 15; ee >= 0; ee--)
            if (Me[ee] !== be[ee]) {
              ie = !1;
              break
            } if (ie) return this._valueCache[ee] = ye, !1
        }
        return void 0 === Me && (Me = this._matrixValueCache[ee] = new Float32Array(16)), Me.set(be), this._valueCache[ee] = ye, !0
      }
      _cacheFloat2(ee, ie, He) {
        let ye = this._valueCache[ee];
        if (!ye || 2 !== ye.length) return ye = [ie, He], this._valueCache[ee] = ye, !0;
        let be = !1;
        return ye[0] !== ie && (ye[0] = ie, be = !0), ye[1] !== He && (ye[1] = He, be = !0), be
      }
      _cacheFloat3(ee, ie, He, ye) {
        let be = this._valueCache[ee];
        if (!be || 3 !== be.length) return be = [ie, He, ye], this._valueCache[ee] = be, !0;
        let Me = !1;
        return be[0] !== ie && (be[0] = ie, Me = !0), be[1] !== He && (be[1] = He, Me = !0), be[2] !== ye && (be[2] = ye, Me = !0), Me
      }
      _cacheFloat4(ee, ie, He, ye, be) {
        let Me = this._valueCache[ee];
        if (!Me || 4 !== Me.length) return Me = [ie, He, ye, be], this._valueCache[ee] = Me, !0;
        let Ke = !1;
        return Me[0] !== ie && (Me[0] = ie, Ke = !0), Me[1] !== He && (Me[1] = He, Ke = !0), Me[2] !== ye && (Me[2] = ye, Ke = !0), Me[3] !== be && (Me[3] = be, Ke = !0), Ke
      }
      setInt(ee, ie) {
        const He = this._valueCache[ee];
        void 0 !== He && He === ie || this.engine.setInt(this._uniforms[ee], ie) && (this._valueCache[ee] = ie)
      }
      setInt2(ee, ie, He) {
        this._cacheFloat2(ee, ie, He) && (this.engine.setInt2(this._uniforms[ee], ie, He) || (this._valueCache[ee] = null))
      }
      setInt3(ee, ie, He, ye) {
        this._cacheFloat3(ee, ie, He, ye) && (this.engine.setInt3(this._uniforms[ee], ie, He, ye) || (this._valueCache[ee] = null))
      }
      setInt4(ee, ie, He, ye, be) {
        this._cacheFloat4(ee, ie, He, ye, be) && (this.engine.setInt4(this._uniforms[ee], ie, He, ye, be) || (this._valueCache[ee] = null))
      }
      setIntArray(ee, ie) {
        this._valueCache[ee] = null, this.engine.setIntArray(this._uniforms[ee], ie)
      }
      setIntArray2(ee, ie) {
        this._valueCache[ee] = null, this.engine.setIntArray2(this._uniforms[ee], ie)
      }
      setIntArray3(ee, ie) {
        this._valueCache[ee] = null, this.engine.setIntArray3(this._uniforms[ee], ie)
      }
      setIntArray4(ee, ie) {
        this._valueCache[ee] = null, this.engine.setIntArray4(this._uniforms[ee], ie)
      }
      setUInt(ee, ie) {
        const He = this._valueCache[ee];
        void 0 !== He && He === ie || this.engine.setUInt(this._uniforms[ee], ie) && (this._valueCache[ee] = ie)
      }
      setUInt2(ee, ie, He) {
        this._cacheFloat2(ee, ie, He) && (this.engine.setUInt2(this._uniforms[ee], ie, He) || (this._valueCache[ee] = null))
      }
      setUInt3(ee, ie, He, ye) {
        this._cacheFloat3(ee, ie, He, ye) && (this.engine.setUInt3(this._uniforms[ee], ie, He, ye) || (this._valueCache[ee] = null))
      }
      setUInt4(ee, ie, He, ye, be) {
        this._cacheFloat4(ee, ie, He, ye, be) && (this.engine.setUInt4(this._uniforms[ee], ie, He, ye, be) || (this._valueCache[ee] = null))
      }
      setUIntArray(ee, ie) {
        this._valueCache[ee] = null, this.engine.setUIntArray(this._uniforms[ee], ie)
      }
      setUIntArray2(ee, ie) {
        this._valueCache[ee] = null, this.engine.setUIntArray2(this._uniforms[ee], ie)
      }
      setUIntArray3(ee, ie) {
        this._valueCache[ee] = null, this.engine.setUIntArray3(this._uniforms[ee], ie)
      }
      setUIntArray4(ee, ie) {
        this._valueCache[ee] = null, this.engine.setUIntArray4(this._uniforms[ee], ie)
      }
      setArray(ee, ie) {
        this._valueCache[ee] = null, this.engine.setArray(this._uniforms[ee], ie)
      }
      setArray2(ee, ie) {
        this._valueCache[ee] = null, this.engine.setArray2(this._uniforms[ee], ie)
      }
      setArray3(ee, ie) {
        this._valueCache[ee] = null, this.engine.setArray3(this._uniforms[ee], ie)
      }
      setArray4(ee, ie) {
        this._valueCache[ee] = null, this.engine.setArray4(this._uniforms[ee], ie)
      }
      setMatrices(ee, ie) {
        ie && (this._valueCache[ee] = null, this.engine.setMatrices(this._uniforms[ee], ie))
      }
      setMatrix(ee, ie) {
        this._cacheMatrix(ee, ie) && (this.engine.setMatrices(this._uniforms[ee], ie.Qbe()) || (this._valueCache[ee] = null))
      }
      setMatrix3x3(ee, ie) {
        this._valueCache[ee] = null, this.engine.setMatrix3x3(this._uniforms[ee], ie)
      }
      setMatrix2x2(ee, ie) {
        this._valueCache[ee] = null, this.engine.setMatrix2x2(this._uniforms[ee], ie)
      }
      setFloat(ee, ie) {
        const He = this._valueCache[ee];
        void 0 !== He && He === ie || this.engine.setFloat(this._uniforms[ee], ie) && (this._valueCache[ee] = ie)
      }
      setVector2(ee, ie) {
        this._cacheFloat2(ee, ie.x, ie.y) && (this.engine.setFloat2(this._uniforms[ee], ie.x, ie.y) || (this._valueCache[ee] = null))
      }
      setFloat2(ee, ie, He) {
        this._cacheFloat2(ee, ie, He) && (this.engine.setFloat2(this._uniforms[ee], ie, He) || (this._valueCache[ee] = null))
      }
      setVector3(ee, ie) {
        this._cacheFloat3(ee, ie.x, ie.y, ie.z) && (this.engine.setFloat3(this._uniforms[ee], ie.x, ie.y, ie.z) || (this._valueCache[ee] = null))
      }
      setFloat3(ee, ie, He, ye) {
        this._cacheFloat3(ee, ie, He, ye) && (this.engine.setFloat3(this._uniforms[ee], ie, He, ye) || (this._valueCache[ee] = null))
      }
      setVector4(ee, ie) {
        this._cacheFloat4(ee, ie.x, ie.y, ie.z, ie.w) && (this.engine.setFloat4(this._uniforms[ee], ie.x, ie.y, ie.z, ie.w) || (this._valueCache[ee] = null))
      }
      setQuaternion(ee, ie) {
        this._cacheFloat4(ee, ie.x, ie.y, ie.z, ie.w) && (this.engine.setFloat4(this._uniforms[ee], ie.x, ie.y, ie.z, ie.w) || (this._valueCache[ee] = null))
      }
      setFloat4(ee, ie, He, ye, be) {
        this._cacheFloat4(ee, ie, He, ye, be) && (this.engine.setFloat4(this._uniforms[ee], ie, He, ye, be) || (this._valueCache[ee] = null))
      }
      setColor3(ee, ie) {
        this._cacheFloat3(ee, ie.r, ie.g, ie.b) && (this.engine.setFloat3(this._uniforms[ee], ie.r, ie.g, ie.b) || (this._valueCache[ee] = null))
      }
      setColor4(ee, ie, He) {
        this._cacheFloat4(ee, ie.r, ie.g, ie.b, He) && (this.engine.setFloat4(this._uniforms[ee], ie.r, ie.g, ie.b, He) || (this._valueCache[ee] = null))
      }
      setDirectColor4(ee, ie) {
        this._cacheFloat4(ee, ie.r, ie.g, ie.b, ie.a) && (this.engine.setFloat4(this._uniforms[ee], ie.r, ie.g, ie.b, ie.a) || (this._valueCache[ee] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var be = He(40979);
    const Me = new WeakMap,
      Ke = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Ue(ee) {
      let ie = Me.get(ee);
      if (!ie) {
        if (!ee) return Ke;
        ie = {
          _webGLVersion: ee.TEXTURE_BINDING_3D ? 2 : 1,
          _context: ee,
          parallelShaderCompile: ee.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Me.set(ee, ie)
      }
      return ie
    }

    function Fe(ee) {
      Me.delete(ee)
    }

    function Je(ee, ie, He, ye, be, Me) {
      const Ke = Ue(ye);
      Me || (Me = Ke._createShaderProgramInjection ?? ke);
      return Me(ee, Xe(ie, "vertex", ye, Ke._contextWasLost), Xe(He, "fragment", ye, Ke._contextWasLost), ye, be, Ke.validateShaderPrograms)
    }

    function oe(ee, ie, He, ye, be) {
      let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ke = arguments.length > 6 ? arguments[6] : void 0;
      const Fe = Ue(be);
      Ke || (Ke = Fe._createShaderProgramInjection ?? ke);
      const Je = Fe._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Ke(ee, pe(ie, "vertex", ye, Je, be, Fe._contextWasLost), pe(He, "fragment", ye, Je, be, Fe._contextWasLost), be, Me, Fe.validateShaderPrograms)
    }

    function Re(ee, ie) {
      const He = new ye,
        be = Ue(ee);
      return be.parallelShaderCompile && !be.disableParallelShaderCompile && (He.isParallelCompiled = !0), He.context = be._context, He
    }

    function ke(ee, ie, He, ye) {
      let be = arguments.length > 5 ? arguments[5] : void 0;
      const Me = ye.createProgram();
      if (ee.program = Me, !Me) throw new Error("Unable to create program");
      return ye.attachShader(Me, ie), ye.attachShader(Me, He), ye.linkProgram(Me), ee.context = ye, ee.vertexShader = ie, ee.fragmentShader = He, ee.isParallelCompiled || fe(ee, ye, be), Me
    }

    function qe(ee, ie, He) {
      const ye = ee;
      if (ye._isDisposed) return !1;
      const be = Ue(ie);
      return !!(be && be.parallelShaderCompile && be.parallelShaderCompile.COMPLETION_STATUS_KHR && ye.program && ie.getProgramParameter(ye.program, be.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (fe(ye, ie, He), !0)
    }

    function fe(ee, ie, He) {
      const ye = ee.context,
        be = ee.vertexShader,
        Me = ee.fragmentShader,
        Ke = ee.program;
      if (!ye.getProgramParameter(Ke, ye.LINK_STATUS)) {
        if (!ie.getShaderParameter(be, ie.COMPILE_STATUS)) {
          const He = ie.getShaderInfoLog(be);
          if (He) throw ee.vertexCompilationError = He, new Error("VERTEX SHADER " + He)
        }
        if (!ie.getShaderParameter(Me, ie.COMPILE_STATUS)) {
          const He = ie.getShaderInfoLog(Me);
          if (He) throw ee.fragmentCompilationError = He, new Error("FRAGMENT SHADER " + He)
        }
        const He = ye.getProgramInfoLog(Ke);
        if (He) throw ee.programLinkError = He, new Error(He)
      }
      if (He) {
        ye.validateProgram(Ke);
        if (!ye.getProgramParameter(Ke, ye.VALIDATE_STATUS)) {
          const ie = ye.getProgramInfoLog(Ke);
          if (ie) throw ee.programValidationError = ie, new Error(ie)
        }
      }
      ye.deleteShader(be), ye.deleteShader(Me), ee.vertexShader = void 0, ee.fragmentShader = void 0, ee.onCompiled && (ee.onCompiled(), ee.onCompiled = void 0)
    }

    function Te(ee, ie, He, ye, be, Me, Ke, Fe, Re) {
      let ke = arguments.length > 10 ? arguments[10] : void 0,
        qe = arguments.length > 11 ? arguments[11] : void 0,
        fe = arguments.length > 12 ? arguments[12] : void 0;
      const Te = Ue(ee.context);
      qe || (qe = Te.createRawShaderProgramInjection ?? Je), fe || (fe = Te.createShaderProgramInjection ?? oe);
      const pe = ee;
      pe.program = ye ? qe(pe, ie, He, pe.context, Re) : fe(pe, ie, He, Fe, pe.context, Re), pe.program.__SPECTOR_rebuildProgram = Ke, ke()
    }

    function pe(ee, ie, He, ye, Me, Ke) {
      return Xe((0, be.e)(ee, He, ye), ie, Me, Ke)
    }

    function Xe(ee, ie, He, ye) {
      const be = He.createShader("vertex" === ie ? He.VERTEX_SHADER : He.FRAGMENT_SHADER);
      if (!be) {
        let ee, be = He.NO_ERROR;
        for (;
          (ee = He.getError()) !== He.NO_ERROR;) be = ee;
        throw new Error(`Something went wrong while creating a gl ${ie} shader object. gl error=${be}, gl isContextLost=${He.isContextLost()}, _contextWasLost=${ye}`)
      }
      return He.shaderSource(be, ee), He.compileShader(be), be
    }

    function ze(ee, ie) {
      ie.useProgram(ee)
    }

    function Be(ee, ie) {
      const He = ee;
      if (!He.isParallelCompiled) return void ie(ee);
      const ye = He.onCompiled;
      He.onCompiled = () => {
        ye?.(), ie(ee)
      }
    }
  },
  40936: (ee, ie, He) => {
    He.d(ie, {
      ThinEngine: () => ge
    });
    var ye = He(40945),
      be = He(40972),
      Me = He(41e3),
      Ke = He(41022),
      Ue = He(39467),
      Fe = He(40968);
    class Je {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(ee, ie, He, ye, be) {
        if (be.drawBuffersExtensionDisabled) {
          const ie = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          ee = ee.replace(ie, "")
        }
        return ee
      }
    }
    const oe = /(flat\s)?\s*varying\s*.*/;
    class Re {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(ee) {
        return ee.replace("attribute", "in")
      }
      varyingCheck(ee, ie) {
        return oe.test(ee)
      }
      varyingProcessor(ee, ie) {
        return ee.replace("varying", ie ? "in" : "out")
      }
      postProcessor(ee, ie, He) {
        const ye = -1 !== ee.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (ee = (ee = ee.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), He) {
          const He = -1 !== ee.search(/layout *\(location *= *0\) *out/g),
            be = -1 !== ie.indexOf("#define DUAL_SOURCE_BLENDING"),
            Me = be ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          be && (ee = "#extension GL_EXT_blend_func_extended : require\n" + ee), ee = (ee = (ee = (ee = (ee = (ee = (ee = ee.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (ye || He ? "" : Me) + "void main(")
        } else {
          ie.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (ee = "invariant gl_Position;\n" + ee);
          if (-1 !== ie.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + ee
        }
        return ee
      }
    }
    var ke = He(41030),
      qe = He(41044),
      fe = He(41051),
      Te = He(40924),
      pe = He(40979),
      Xe = He(40960),
      ze = He(41059),
      Be = He(41013);
    class Ee {}
    class ge extends Me.e {
      get name() {
        return this._name
      }
      set name(ee) {
        this._name = ee
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return ye.c.ShadersRepository
      }
      static set ShadersRepository(ee) {
        ye.c.ShadersRepository = ee
      }
      get supportsUniformBuffers() {
        return this.dT > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(ee, ie, He, ye) {
        if (He = He || {}, super(ie ?? He.antialias, He, ye), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !ee) return;
        let Me;
        if (ee.getContext) {
          if (Me = ee, void 0 === He.preserveDrawingBuffer && (He.preserveDrawingBuffer = !1), void 0 === He.xrCompatible && (He.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const ee = navigator.userAgent;
            for (const ie of ge.ExceptionList) {
              const ye = ie.key,
                be = ie.targets;
              if (new RegExp(ye).test(ee)) {
                if (ie.capture && ie.captureConstraint) {
                  const He = ie.capture,
                    ye = ie.captureConstraint,
                    be = new RegExp(He).exec(ee);
                  if (be && be.length > 0) {
                    if (parseInt(be[be.length - 1]) >= ye) continue
                  }
                }
                for (const ee of be) switch (ee) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    He.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, be.F)(this._gl)
            } : (this._onContextLost = ee => {
              ee.preventDefault(), this._contextWasLost = !0, (0, be.F)(this._gl), Ue.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Me.addEventListener("webglcontextrestored", this._onContextRestored, !1), He.powerPreference = He.powerPreference || "high-performance"), Me.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (He.xrCompatible = !1), !He.disableWebGL2Support) try {
            this._gl = Me.getContext("webgl2", He) || Me.getContext("experimental-webgl2", He), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (oe) {}
          if (!this._gl) {
            if (!Me) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Me.getContext("webgl", He) || Me.getContext("experimental-webgl", He)
            } catch (oe) {
              throw new Error("WebGL not supported", {
                cause: oe
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = ee, Me = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const ie = this._gl.getContextAttributes();
          ie && (He.stencil = ie.stencil)
        }
        this._sharedInit(Me), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== He.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = He.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let be = 0; be < this._caps.maxVertexAttribs; be++) this._currentBufferPointers[be] = new Ee;
        this._shaderProcessor = this.dT > 1 ? new Re : new Je;
        const Ke = `Babylon.js v${ge.Version}`;
        Ue.e.Log(Ke + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Ke);
        const Fe = (0, be.I)(this._gl);
        Fe.validateShaderPrograms = this.validateShaderPrograms, Fe.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(ee) {
        return null
      }
      areAllEffectsReady() {
        for (const ee in this._compiledEffects) {
          if (!this._compiledEffects[ee].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const ee = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != ee && (this._glRenderer = this._gl.getParameter(ee.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(ee.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const ie = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!ie, this._alphaState = new Be.d(this._caps.blendParametersPerTarget), ie && (this._gl.blendEquationSeparateIndexed = ie.blendEquationSeparateiOES.bind(ie), this._gl.blendEquationIndexed = ie.blendEquationiOES.bind(ie), this._gl.blendFuncSeparateIndexed = ie.blendFuncSeparateiOES.bind(ie), this._gl.blendFuncIndexed = ie.blendFunciOES.bind(ie), this._gl.colorMaskIndexed = ie.colorMaskiOES.bind(ie), this._gl.disableIndexed = ie.disableiOES.bind(ie), this._gl.enableIndexed = ie.enableiOES.bind(ie)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const ee = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== ee) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = ee.drawBuffersWEBGL.bind(ee), this._caps.maxDrawBuffers = this._gl.getParameter(ee.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let ie = 0; ie < 16; ie++) this._gl["COLOR_ATTACHMENT" + ie + "_WEBGL"] = ee["COLOR_ATTACHMENT" + ie + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const ee = this._gl.getExtension("WEBGL_depth_texture");
          null != ee && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = ee.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const ee = this._gl.getExtension("OES_vertex_array_object");
          null != ee && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = ee.createVertexArrayOES.bind(ee), this._gl.bindVertexArray = ee.bindVertexArrayOES.bind(ee), this._gl.deleteVertexArray = ee.deleteVertexArrayOES.bind(ee))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const ee = this._gl.getExtension("ANGLE_instanced_arrays");
          null != ee ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = ee.drawArraysInstancedANGLE.bind(ee), this._gl.drawElementsInstanced = ee.drawElementsInstancedANGLE.bind(ee), this._gl.vertexAttribDivisor = ee.vertexAttribDivisorANGLE.bind(ee)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const ee = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            ie = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (ee && ie && (this._caps.highPrecisionShaderSupported = 0 !== ee.precision && 0 !== ie.precision, this._caps.shaderFloatPrecision = Math.min(ee.precision, ie.precision)), !this._shouldUseHighPrecisionShader) {
            const ee = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              ie = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            ee && ie && (this._caps.shaderFloatPrecision = Math.min(ee.precision, ie.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const ee = this._gl.getExtension("EXT_blend_minmax");
          null != ee && (this._caps.blendMinMax = !0, this._gl.MAX = ee.MAX_EXT, this._gl.MIN = ee.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const ee = this._gl.getExtension("EXT_sRGB");
            null != ee && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: ee.SRGB_EXT,
              SRGB8: ee.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: ee.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const ee = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== ee && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && ee)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let He = 0; He < this._maxSimultaneousTextures; He++) this._nextFreeTextureSlots.push(He);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get dT() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const ee = this._workingCanvas.getContext("2d");
        ee && (this._workingContext = ee)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const ee = this.getGlInfo();
        return ee && ee.renderer ? ee.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Me = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Me;
        let Ke = 0;
        if (ie && ee) {
          let ie = !0;
          if (this._currentRenderTarget) {
            const He = this._currentRenderTarget.texture?.format;
            if (void 0 !== He && (0, ze.j)(He)) {
              const He = this._currentRenderTarget.texture?.type;
              void 0 !== He && (0, ze.k)(He) ? (ge._TempClearColorUint32[0] = 255 * ee.r, ge._TempClearColorUint32[1] = 255 * ee.g, ge._TempClearColorUint32[2] = 255 * ee.b, ge._TempClearColorUint32[3] = 255 * ee.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, ge._TempClearColorUint32), ie = !1) : (ge._TempClearColorInt32[0] = 255 * ee.r, ge._TempClearColorInt32[1] = 255 * ee.g, ge._TempClearColorInt32[2] = 255 * ee.b, ge._TempClearColorInt32[3] = 255 * ee.a, this._gl.clearBufferiv(this._gl.COLOR, 0, ge._TempClearColorInt32), ie = !1)
            }
          }
          ie && (this._gl.clearColor(ee.r, ee.g, ee.b, void 0 !== ee.a ? ee.a : 1), Ke |= this._gl.COLOR_BUFFER_BIT)
        }
        He && (this.Gbe ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Ke |= this._gl.DEPTH_BUFFER_BIT), ye && (this._gl.clearStencil(be), Ke |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Ke)
      }
      _clearColorAttachment(ee, ie, He, ye) {
        if ((0, ze.j)(He)) {
          const He = (0, ze.k)(ye),
            be = He ? ge._TempClearColorUint32 : ge._TempClearColorInt32;
          return be[0] = ie.r, be[1] = ie.g, be[2] = ie.b, be[3] = ie.a, void(He ? this._gl.clearBufferuiv(this._gl.COLOR, ee, be) : this._gl.clearBufferiv(this._gl.COLOR, ee, be))
        }
        ge._TempClearColorFloat32[0] = ie.r, ge._TempClearColorFloat32[1] = ie.g, ge._TempClearColorFloat32[2] = ie.b, ge._TempClearColorFloat32[3] = ie.a, this._gl.clearBufferfv(this._gl.COLOR, ee, ge._TempClearColorFloat32)
      }
      _viewport(ee, ie, He, ye) {
        ee === this._viewportCached.x && ie === this._viewportCached.y && He === this._viewportCached.z && ye === this._viewportCached.w || (this._viewportCached.x = ee, this._viewportCached.y = ie, this._viewportCached.z = He, this._viewportCached.w = ye, this._gl.viewport(ee, ie, He, ye))
      }
      ZR() {
        super.ZR(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Fe = ee;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = ee, this._integerMRTAttachmentsMask = !ee.isMulti && ee.texture && (0, ze.j)(ee.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Fe._framebuffer);
        const Je = this._gl;
        ee.isMulti || (ee.is2DArray || ee.is3D ? (Je.framebufferTextureLayer(Je.FRAMEBUFFER, Je.COLOR_ATTACHMENT0, ee.texture._hardwareTexture?.underlyingResource, Me, Ke), Fe._currentLOD = Me) : ee.isCube ? Je.framebufferTexture2D(Je.FRAMEBUFFER, Je.COLOR_ATTACHMENT0, Je.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ee.texture._hardwareTexture?.underlyingResource, Me) : Fe._currentLOD !== Me && (Je.framebufferTexture2D(Je.FRAMEBUFFER, Je.COLOR_ATTACHMENT0, Je.TEXTURE_2D, ee.texture._hardwareTexture?.underlyingResource, Me), Fe._currentLOD = Me));
        const oe = ee._depthStencilTexture;
        if (oe) {
          ee.is3D && (ee.texture.width === oe.width && ee.texture.height === oe.height && ee.texture.depth === oe.depth || Ue.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const He = ee._depthStencilTextureWithStencil ? Je.DEPTH_STENCIL_ATTACHMENT : Je.DEPTH_ATTACHMENT;
          ee.is2DArray || ee.is3D ? Je.framebufferTextureLayer(Je.FRAMEBUFFER, He, oe._hardwareTexture?.underlyingResource, Me, Ke) : ee.isCube ? Je.framebufferTexture2D(Je.FRAMEBUFFER, He, Je.TEXTURE_CUBE_MAP_POSITIVE_X + ie, oe._hardwareTexture?.underlyingResource, Me) : Je.framebufferTexture2D(Je.FRAMEBUFFER, He, Je.TEXTURE_2D, oe._hardwareTexture?.underlyingResource, Me)
        }
        Fe._MSAAFramebuffer && this._bindUnboundFramebuffer(Fe._MSAAFramebuffer), this._cachedViewport && !be ? this.setViewport(this._cachedViewport, He, ye) : (He || (He = ee.width, Me && (He /= Math.pow(2, Me))), ye || (ye = ee.height, Me && (ye /= Math.pow(2, Me))), this._viewport(0, 0, He, ye)), this.wipeCaches()
      }
      setStateCullFaceType(ee, ie) {
        const He = this.cullBackFaces ?? ee ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== He || ie) && (this._depthCullingState.cullFace = He)
      }
      setState(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 ? arguments[5] : void 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== ee || He) && (this._depthCullingState.cull = ee), this.setStateCullFaceType(be, He), this.setZOffset(ie), this.setZOffsetUnits(Ke);
        const Ue = ye ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Ue || He) && (this._depthCullingState.frontFace = Ue), this._stencilStateComposer.stencilMaterial = Me
      }
      _resolveAndGenerateMipMapsFramebuffer(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        ee.disableAutomaticMSAAResolve || (ee.isMulti ? this.resolveMultiFramebuffer(ee) : this.resolveFramebuffer(ee)), ie || (ee.isMulti ? this.generateMipMapsMultiFramebuffer(ee) : this.generateMipMapsFramebuffer(ee))
      }
      _bindUnboundFramebuffer(ee) {
        this._currentFramebuffer !== ee && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, ee), this._currentFramebuffer = ee)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(ee) {
        const ie = this._getTextureTarget(ee);
        this._bindTextureDirectly(ie, ee, !0), this._gl.generateMipmap(ie), this._bindTextureDirectly(ie, null)
      }
      unBindFramebuffer(ee, ie, He) {
        const ye = ee;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(ee, ie), He && (ye._MSAAFramebuffer && this._bindUnboundFramebuffer(ye._framebuffer), He()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(ee) {
        ee.isMulti || !ee.texture?.generateMipMaps || ee.isCube || this.generateMipmaps(ee.texture)
      }
      resolveFramebuffer(ee) {
        const ie = ee,
          He = this._gl;
        if (!ie._MSAAFramebuffer || ie.isMulti) return;
        let ye = ie.resolveMSAAColors ? He.COLOR_BUFFER_BIT : 0;
        ye |= ie._generateDepthBuffer && ie.resolveMSAADepth ? He.DEPTH_BUFFER_BIT : 0, ye |= ie._generateStencilBuffer && ie.resolveMSAAStencil ? He.STENCIL_BUFFER_BIT : 0, He.bindFramebuffer(He.READ_FRAMEBUFFER, ie._MSAAFramebuffer), He.bindFramebuffer(He.DRAW_FRAMEBUFFER, ie._framebuffer), He.blitFramebuffer(0, 0, ee.width, ee.height, 0, 0, ee.width, ee.height, ye, He.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(ee, ie, He) {
        return this._createVertexBuffer(ee, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(ee, ie) {
        const He = this._gl.createBuffer();
        if (!He) throw new Error("Unable to create vertex buffer");
        const ye = new ke.d(He);
        return this.bindArrayBuffer(ye), "number" !== typeof ee ? ee instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(ee), ie), ye.bk = 4 * ee.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, ee, ie), ye.bk = ee.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(ee), ie), ye.bk = ee), this._resetVertexBufferBinding(), ye.references = 1, ye
      }
      createDynamicVertexBuffer(ee, ie) {
        return this._createVertexBuffer(ee, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(ee, ie, He) {
        const ye = this._gl.createBuffer(),
          be = new ke.d(ye);
        if (!ye) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(be);
        const Me = this._normalizeIndexData(ee);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Me, ie ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), be.references = 1, be.is32Bits = 4 === Me.BYTES_PER_ELEMENT, be
      }
      _normalizeIndexData(ee) {
        if (2 === ee.BYTES_PER_ELEMENT) return ee;
        if (this._caps.uintIndices) {
          if (ee instanceof Uint32Array) return ee;
          for (let ie = 0; ie < ee.length; ie++)
            if (ee[ie] >= 65535) return new Uint32Array(ee);
          return new Uint16Array(ee)
        }
        return new Uint16Array(ee)
      }
      bindArrayBuffer(ee) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(ee, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(ee, ie, He) {
        const ye = ee.program,
          be = this._gl.getUniformBlockIndex(ye, ie);
        this._gl.uniformBlockBinding(ye, be, He)
      }
      bindIndexBuffer(ee) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(ee, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(ee, ie) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[ie] !== ee) && (this._gl.bindBuffer(ie, ee ? ee.underlyingResource : null), this._currentBoundBuffer[ie] = ee)
      }
      updateArrayBuffer(ee) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, ee)
      }
      _vertexAttribPointer(ee, ie, He, ye, be, Me, Ke) {
        const Ue = this._currentBufferPointers[ie];
        if (!Ue) return;
        let Fe = !1;
        Ue.active ? (Ue.buffer !== ee && (Ue.buffer = ee, Fe = !0), Ue.size !== He && (Ue.size = He, Fe = !0), Ue.type !== ye && (Ue.type = ye, Fe = !0), Ue.normalized !== be && (Ue.normalized = be, Fe = !0), Ue.stride !== Me && (Ue.stride = Me, Fe = !0), Ue.offset !== Ke && (Ue.offset = Ke, Fe = !0)) : (Fe = !0, Ue.active = !0, Ue.index = ie, Ue.size = He, Ue.type = ye, Ue.normalized = be, Ue.stride = Me, Ue.offset = Ke, Ue.buffer = ee), (Fe || this._vaoRecordInProgress) && (this.bindArrayBuffer(ee), ye === this._gl.UNSIGNED_INT || ye === this._gl.INT ? this._gl.vertexAttribIPointer(ie, He, ye, Me, Ke) : this._gl.vertexAttribPointer(ie, He, ye, be, Me, Ke))
      }
      _bindIndexBufferWithCache(ee) {
        null != ee && this._cachedIndexBuffer !== ee && (this._cachedIndexBuffer = ee, this.bindIndexBuffer(ee), this._uintIndicesCurrentlySet = ee.is32Bits)
      }
      _bindVertexBuffersAttributes(ee, ie, He) {
        const ye = ie.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let be = 0; be < ye.length; be++) {
          const Me = ie.getAttributeLocation(be);
          if (Me >= 0) {
            const ie = ye[be];
            let Ke = null;
            if (He && (Ke = He[ie]), Ke || (Ke = ee[ie]), !Ke) continue;
            this._gl.enableVertexAttribArray(Me), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Me] = !0);
            const Ue = Ke.getBuffer();
            Ue && (this._vertexAttribPointer(Ue, Me, Ke.getSize(), Ke.type, Ke.normalized, Ke.byteStride, Ke.byteOffset), Ke.getIsInstanced() && (this._gl.vertexAttribDivisor(Me, Ke.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Me), this._currentInstanceBuffers.push(Ue))))
          }
        }
      }
      recordVertexArrayObject(ee, ie, He, ye) {
        const be = this._gl.createVertexArray();
        if (!be) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(be), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(ee, He, ye), this.bindIndexBuffer(ie), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), be
      }
      bindVertexArrayObject(ee, ie) {
        this._cachedVertexArrayObject !== ee && (this._cachedVertexArrayObject = ee, this._gl.bindVertexArray(ee), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != ie && ie.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(ee, ie, He, ye, be) {
        if (this._cachedVertexBuffers !== ee || this._cachedEffectForVertexBuffers !== be) {
          this._cachedVertexBuffers = ee, this._cachedEffectForVertexBuffers = be;
          const ie = be.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Me = 0;
          for (let Ke = 0; Ke < ie; Ke++)
            if (Ke < He.length) {
              const ie = be.getAttributeLocation(Ke);
              ie >= 0 && (this._gl.enableVertexAttribArray(ie), this._vertexAttribArraysEnabled[ie] = !0, this._vertexAttribPointer(ee, ie, He[Ke], this._gl.FLOAT, !1, ye, Me)), Me += 4 * He[Ke]
            }
        }
        this._bindIndexBufferWithCache(ie)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(ee, ie, He, ye) {
        this._cachedVertexBuffers === ee && this._cachedEffectForVertexBuffers === He || (this._cachedVertexBuffers = ee, this._cachedEffectForVertexBuffers = He, this._bindVertexBuffersAttributes(ee, He, ye)), this._bindIndexBufferWithCache(ie)
      }
      unbindInstanceAttributes() {
        let ee;
        for (let ie = 0, He = this._currentInstanceLocations.length; ie < He; ie++) {
          const He = this._currentInstanceBuffers[ie];
          ee != He && He.references && (ee = He, this.bindArrayBuffer(He));
          const ye = this._currentInstanceLocations[ie];
          this._gl.vertexAttribDivisor(ye, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(ee) {
        this._gl.deleteVertexArray(ee)
      }
      _releaseBuffer(ee) {
        return ee.references--, 0 === ee.references && (this._deleteBuffer(ee), !0)
      }
      _deleteBuffer(ee) {
        this._gl.deleteBuffer(ee.underlyingResource)
      }
      updateAndBindInstancesBuffer(ee, ie, He) {
        if (this.bindArrayBuffer(ee), ie && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, ie), void 0 !== He[0].index) this.bindInstancesBuffer(ee, He, !0);
        else
          for (let ye = 0; ye < 4; ye++) {
            const ie = He[ye];
            this._vertexAttribArraysEnabled[ie] || (this._gl.enableVertexAttribArray(ie), this._vertexAttribArraysEnabled[ie] = !0), this._vertexAttribPointer(ee, ie, 4, this._gl.FLOAT, !1, 64, 16 * ye), this._gl.vertexAttribDivisor(ie, 1), this._currentInstanceLocations.push(ie), this._currentInstanceBuffers.push(ee)
          }
      }
      bindInstancesBuffer(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(ee);
        let ye = 0;
        if (He)
          for (let be = 0; be < ie.length; be++) {
            ye += 4 * ie[be].attributeSize
          }
        for (let be = 0; be < ie.length; be++) {
          const He = ie[be];
          void 0 === He.index && (He.index = this._currentEffect.getAttributeLocationByName(He.attributeName)), He.index < 0 || (this._vertexAttribArraysEnabled[He.index] || (this._gl.enableVertexAttribArray(He.index), this._vertexAttribArraysEnabled[He.index] = !0), this._vertexAttribPointer(ee, He.index, He.attributeSize, He.attributeType || this._gl.FLOAT, He.normalized || !1, ye, He.offset), this._gl.vertexAttribDivisor(He.index, void 0 === He.divisor ? 1 : He.divisor), this._currentInstanceLocations.push(He.index), this._currentInstanceBuffers.push(ee))
        }
      }
      disableInstanceAttributeByName(ee) {
        if (!this._currentEffect) return;
        const ie = this._currentEffect.getAttributeLocationByName(ee);
        this.disableInstanceAttribute(ie)
      }
      disableInstanceAttribute(ee) {
        let ie, He = !1;
        for (; - 1 !== (ie = this._currentInstanceLocations.indexOf(ee));) this._currentInstanceLocations.splice(ie, 1), this._currentInstanceBuffers.splice(ie, 1), He = !0;
        He && (this._gl.vertexAttribDivisor(ee, 0), this.disableAttributeByIndex(ee))
      }
      disableAttributeByIndex(ee) {
        this._gl.disableVertexAttribArray(ee), this._vertexAttribArraysEnabled[ee] = !1, this._currentBufferPointers[ee].active = !1
      }
      draw(ee, ie, He, ye) {
        this.drawElementsType(ee ? 0 : 1, ie, He, ye)
      }
      drawPointClouds(ee, ie, He) {
        this.drawArraysType(2, ee, ie, He)
      }
      drawUnIndexed(ee, ie, He, ye) {
        this.drawArraysType(ee ? 0 : 1, ie, He, ye)
      }
      drawElementsType(ee, ie, He, ye) {
        this.applyStates(), this._reportDrawCall();
        const be = this._drawMode(ee),
          Me = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Ke = this._uintIndicesCurrentlySet ? 4 : 2;
        ye ? this._gl.drawElementsInstanced(be, He, Me, ie * Ke, ye) : this._gl.drawElements(be, He, Me, ie * Ke)
      }
      drawArraysType(ee, ie, He, ye) {
        this.applyStates(), this._reportDrawCall();
        const be = this._drawMode(ee);
        ye ? this._gl.drawArraysInstanced(be, ie, He, ye) : this._gl.drawArrays(be, ie, He)
      }
      _drawMode(ee) {
        switch (ee) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(ee) {
        this._compiledEffects[ee._key] && delete this._compiledEffects[ee._key];
        const ie = ee.getPipelineContext();
        ie && this._deletePipelineContext(ie)
      }
      _deletePipelineContext(ee) {
        const ie = ee;
        ie && ie.program && (ie.program.__SPECTOR_rebuildProgram = null, (0, Xe.m)(ie), this._gl && (this._currentProgram === ie.program && this._setProgram(null), this._gl.deleteProgram(ie.program)))
      }
      _getGlobalDefines(ee) {
        return (0, pe.f)(ee, this.isNDCHalfZRange, this.Gbe, this.useExactSrgbConversions)
      }
      createEffect(ee, ie, He, Me, Ke, Ue, Fe, Je, oe) {
        let Re = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ke = arguments.length > 10 ? arguments[10] : void 0;
        const qe = "string" === typeof ee ? ee : ee.vertexToken || ee.vertexSource || ee.vertexElement || ee.vertex,
          fe = "string" === typeof ee ? ee : ee.fragmentToken || ee.fragmentSource || ee.fragmentElement || ee.fragment,
          Te = this._getGlobalDefines(),
          pe = void 0 !== ie.attributes;
        let Xe = Ke ?? ie.defines ?? "";
        Te && (Xe += Te);
        const ze = qe + "+" + fe + "@" + Xe;
        if (this._compiledEffects[ze]) {
          const ee = this._compiledEffects[ze];
          return Fe && ee.isReady() && Fe(ee), ee._refCount++, ee
        }
        this._gl && (0, be.I)(this._gl);
        const Be = new ye.c(ee, ie, pe ? this : He, Me, this, Ke, Ue, Fe, Je, oe, ze, ie.shaderLanguage ?? Re, ie.extraInitializationsAsync ?? ke);
        return this._compiledEffects[ze] = Be, Be
      }
      _getShaderSource(ee) {
        return this._gl.getShaderSource(ee)
      }
      createRawShaderProgram(ee, ie, He, ye) {
        let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Ke = (0, be.I)(this._gl);
        return Ke._contextWasLost = this._contextWasLost, Ke.validateShaderPrograms = this.validateShaderPrograms, (0, be.A)(ee, ie, He, ye || this._gl, Me)
      }
      createShaderProgram(ee, ie, He, ye, Me) {
        let Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Ue = (0, be.I)(this._gl);
        return Ue._contextWasLost = this._contextWasLost, Ue.validateShaderPrograms = this.validateShaderPrograms, (0, be.D)(ee, ie, He, ye, Me || this._gl, Ke)
      }
      inlineShaderCode(ee) {
        return ee
      }
      createPipelineContext(ee) {
        if (this._gl) {
          (0, be.I)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const ie = (0, be.w)(this._gl, ee);
        return ie.engine = this, ie
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(ee) {
        return (0, be.k)(ee, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(ee, ie, He, ye, Me, Ke, Ue, Fe, Je, oe, Re) {
        const ke = (0, be.I)(this._gl);
        return ke._contextWasLost = this._contextWasLost, ke.validateShaderPrograms = this.validateShaderPrograms, ke._createShaderProgramInjection = this._createShaderProgram.bind(this), ke.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), ke.createShaderProgramInjection = this.createShaderProgram.bind(this), ke.loadFileInjection = this._loadFile.bind(this), (0, be.p)(ee, ie, He, ye, Me, Ke, Ue, Fe, Je, oe, Re)
      }
      _createShaderProgram(ee, ie, He, ye) {
        let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, be.e)(ee, ie, He, ye, Me)
      }
      _isRenderingStateCompiled(ee) {
        return !this._isDisposed && (0, be.n)(ee, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(ee, ie) {
        (0, be.i)(ee, ie)
      }
      getUniforms(ee, ie) {
        const He = new Array,
          ye = ee;
        for (let be = 0; be < ie.length; be++) He.push(this._gl.getUniformLocation(ye.program, ie[be]));
        return He
      }
      getAttributes(ee, ie) {
        const He = [],
          ye = ee;
        for (let Me = 0; Me < ie.length; Me++) try {
          He.push(this._gl.getAttribLocation(ye.program, ie[Me]))
        } catch (be) {
          He.push(-1)
        }
        return He
      }
      enableEffect(ee) {
        (ee = null !== ee && (0, Ke.e)(ee) ? ee.effect : ee) && ee !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(ee), this._currentEffect = ee, ee.onBind && ee.onBind(ee), ee._onBindObservable && ee._onBindObservable.notifyObservers(ee))
      }
      setInt(ee, ie) {
        return !!ee && (this._gl.uniform1i(ee, ie), !0)
      }
      setInt2(ee, ie, He) {
        return !!ee && (this._gl.uniform2i(ee, ie, He), !0)
      }
      setInt3(ee, ie, He, ye) {
        return !!ee && (this._gl.uniform3i(ee, ie, He, ye), !0)
      }
      setInt4(ee, ie, He, ye, be) {
        return !!ee && (this._gl.uniform4i(ee, ie, He, ye, be), !0)
      }
      setIntArray(ee, ie) {
        return !!ee && (this._gl.uniform1iv(ee, ie), !0)
      }
      setIntArray2(ee, ie) {
        return !(!ee || ie.length % 2 !== 0) && (this._gl.uniform2iv(ee, ie), !0)
      }
      setIntArray3(ee, ie) {
        return !(!ee || ie.length % 3 !== 0) && (this._gl.uniform3iv(ee, ie), !0)
      }
      setIntArray4(ee, ie) {
        return !(!ee || ie.length % 4 !== 0) && (this._gl.uniform4iv(ee, ie), !0)
      }
      setUInt(ee, ie) {
        return !!ee && (this._gl.uniform1ui(ee, ie), !0)
      }
      setUInt2(ee, ie, He) {
        return !!ee && (this._gl.uniform2ui(ee, ie, He), !0)
      }
      setUInt3(ee, ie, He, ye) {
        return !!ee && (this._gl.uniform3ui(ee, ie, He, ye), !0)
      }
      setUInt4(ee, ie, He, ye, be) {
        return !!ee && (this._gl.uniform4ui(ee, ie, He, ye, be), !0)
      }
      setUIntArray(ee, ie) {
        return !!ee && (this._gl.uniform1uiv(ee, ie), !0)
      }
      setUIntArray2(ee, ie) {
        return !(!ee || ie.length % 2 !== 0) && (this._gl.uniform2uiv(ee, ie), !0)
      }
      setUIntArray3(ee, ie) {
        return !(!ee || ie.length % 3 !== 0) && (this._gl.uniform3uiv(ee, ie), !0)
      }
      setUIntArray4(ee, ie) {
        return !(!ee || ie.length % 4 !== 0) && (this._gl.uniform4uiv(ee, ie), !0)
      }
      setArray(ee, ie) {
        return !!ee && (!(ie.length < 1) && (this._gl.uniform1fv(ee, ie), !0))
      }
      setArray2(ee, ie) {
        return !(!ee || ie.length % 2 !== 0) && (this._gl.uniform2fv(ee, ie), !0)
      }
      setArray3(ee, ie) {
        return !(!ee || ie.length % 3 !== 0) && (this._gl.uniform3fv(ee, ie), !0)
      }
      setArray4(ee, ie) {
        return !(!ee || ie.length % 4 !== 0) && (this._gl.uniform4fv(ee, ie), !0)
      }
      setMatrices(ee, ie) {
        return !!ee && (this._gl.uniformMatrix4fv(ee, !1, ie), !0)
      }
      setMatrix3x3(ee, ie) {
        return !!ee && (this._gl.uniformMatrix3fv(ee, !1, ie), !0)
      }
      setMatrix2x2(ee, ie) {
        return !!ee && (this._gl.uniformMatrix2fv(ee, !1, ie), !0)
      }
      setFloat(ee, ie) {
        return !!ee && (this._gl.uniform1f(ee, ie), !0)
      }
      setFloat2(ee, ie, He) {
        return !!ee && (this._gl.uniform2f(ee, ie, He), !0)
      }
      setFloat3(ee, ie, He, ye) {
        return !!ee && (this._gl.uniform3f(ee, ie, He, ye), !0)
      }
      setFloat4(ee, ie, He, ye, be) {
        return !!ee && (this._gl.uniform4f(ee, ie, He, ye, be), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const ee = this._colorWrite;
          this._gl.colorMask(ee, ee, ee, ee)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(ee) {
        this.preventCacheWipeBetweenFrames && !ee || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), ee && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(ee, ie) {
        const He = this._gl;
        let ye = He.NEAREST,
          be = He.NEAREST,
          Me = !1;
        switch (ee) {
          case 11:
            ye = He.LINEAR, be = ie ? He.LINEAR_MIPMAP_NEAREST : He.LINEAR;
            break;
          case 3:
            ye = He.LINEAR, Me = !0, be = ie ? He.LINEAR_MIPMAP_LINEAR : He.LINEAR;
            break;
          case 8:
            Me = !0, ye = He.NEAREST, be = ie ? He.NEAREST_MIPMAP_LINEAR : He.NEAREST;
            break;
          case 4:
            ye = He.NEAREST, be = ie ? He.NEAREST_MIPMAP_NEAREST : He.NEAREST;
            break;
          case 5:
            ye = He.NEAREST, be = ie ? He.LINEAR_MIPMAP_NEAREST : He.LINEAR;
            break;
          case 6:
            Me = !0, ye = He.NEAREST, be = ie ? He.LINEAR_MIPMAP_LINEAR : He.LINEAR;
            break;
          case 7:
            ye = He.NEAREST, be = He.LINEAR;
            break;
          case 1:
            ye = He.NEAREST, be = He.NEAREST;
            break;
          case 9:
            ye = He.LINEAR, be = ie ? He.NEAREST_MIPMAP_NEAREST : He.NEAREST;
            break;
          case 10:
            Me = !0, ye = He.LINEAR, be = ie ? He.NEAREST_MIPMAP_LINEAR : He.NEAREST;
            break;
          case 2:
            ye = He.LINEAR, be = He.LINEAR;
            break;
          case 12:
            ye = He.LINEAR, be = He.NEAREST
        }
        return {
          min: be,
          mag: ye,
          hasMipMaps: Me
        }
      }
      _createTexture() {
        const ee = this._gl.createTexture();
        if (!ee) throw new Error("Unable to create texture");
        return ee
      }
      _createHardwareTexture() {
        return new fe.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(ee, ie) {
        let He, ye, be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Me = !1,
          Ke = 0,
          Fe = 3,
          Je = 5,
          oe = !1,
          Re = 1,
          ke = !1,
          qe = 0,
          fe = !1;
        void 0 !== ie && "object" === typeof ie ? (He = !!ie.generateMipMaps, Me = !!ie.createMipMaps, Ke = void 0 === ie.type ? 0 : ie.type, Fe = void 0 === ie.samplingMode ? 3 : ie.samplingMode, Je = void 0 === ie.format ? 5 : ie.format, oe = void 0 !== ie.useSRGBBuffer && ie.useSRGBBuffer, Re = ie.samples ?? 1, ye = ie.label, ke = !!ie.createMSAATexture, qe = ie.comparisonFunction || 0, fe = !!ie.isCube) : He = !!ie, oe && (oe = this._caps.supportSRGBBuffers && (this.dT > 1 || this.isWebGPU)), (1 !== Ke || this._caps.textureFloatLinearFiltering) && (2 !== Ke || this._caps.textureHalfFloatLinearFiltering) || (Fe = 1), 1 !== Ke || this._caps.textureFloat || (Ke = 0, Ue.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const pe = (0, ze.i)(Je),
          Xe = (0, ze.e)(Je),
          Be = this._gl,
          Ee = new Te.b(this, be),
          ge = ee.width || ee,
          Oe = ee.height || ee,
          de = ee.depth || 0,
          We = ee.layers || 0,
          te = this._getSamplingParameters(Fe, (He || Me) && !pe),
          Ze = 0 !== We ? Be.TEXTURE_2D_ARRAY : 0 !== de ? Be.TEXTURE_3D : fe ? Be.TEXTURE_CUBE_MAP : Be.TEXTURE_2D,
          we = pe ? this._getInternalFormatFromDepthTextureFormat(Je, !0, Xe) : this._getRGBABufferInternalSizedFormat(Ke, Je, oe),
          De = pe ? Xe ? Be.DEPTH_STENCIL : Be.DEPTH_COMPONENT : this._getInternalFormat(Je),
          Pe = pe ? this._getWebGLTextureTypeFromDepthTextureFormat(Je) : this._getWebGLTextureType(Ke);
        if (this._bindTextureDirectly(Ze, Ee), 0 !== We) Ee.is2DArray = !0, Be.texImage3D(Ze, 0, we, ge, Oe, We, 0, De, Pe, null);
        else if (0 !== de) Ee.is3D = !0, Be.texImage3D(Ze, 0, we, ge, Oe, de, 0, De, Pe, null);
        else if (fe) {
          Ee.isCube = !0;
          for (let ee = 0; ee < 6; ee++) Be.texImage2D(Be.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, we, ge, Oe, 0, De, Pe, null)
        } else Be.texImage2D(Ze, 0, we, ge, Oe, 0, De, Pe, null);
        if (Be.texParameteri(Ze, Be.TEXTURE_MAG_FILTER, te.mag), Be.texParameteri(Ze, Be.TEXTURE_MIN_FILTER, te.min), Be.texParameteri(Ze, Be.TEXTURE_WRAP_S, Be.CLAMP_TO_EDGE), Be.texParameteri(Ze, Be.TEXTURE_WRAP_T, Be.CLAMP_TO_EDGE), pe && this.dT > 1 && (0 === qe ? (Be.texParameteri(Ze, Be.TEXTURE_COMPARE_FUNC, 515), Be.texParameteri(Ze, Be.TEXTURE_COMPARE_MODE, Be.NONE)) : (Be.texParameteri(Ze, Be.TEXTURE_COMPARE_FUNC, qe), Be.texParameteri(Ze, Be.TEXTURE_COMPARE_MODE, Be.COMPARE_REF_TO_TEXTURE))), (He || Me) && this._gl.generateMipmap(Ze), this._bindTextureDirectly(Ze, null), Ee._useSRGBBuffer = oe, Ee.baseWidth = ge, Ee.baseHeight = Oe, Ee.width = ge, Ee.height = Oe, Ee.depth = We || de, Ee.isReady = !0, Ee.samples = Re, Ee.generateMipMaps = He, Ee.samplingMode = Fe, Ee.type = Ke, Ee.format = Je, Ee.label = ye, Ee.comparisonFunction = qe, this._internalTexturesCache.push(Ee), ke) {
          let ee;
          if (ee = (0, ze.i)(Ee.format) ? this._setupFramebufferDepthAttachments((0, ze.e)(Ee.format), 19 !== Ee.format, Ee.width, Ee.height, Re, Ee.format, !0) : this._createRenderBuffer(Ee.width, Ee.height, Re, -1, this._getRGBABufferInternalSizedFormat(Ee.type, Ee.format, Ee._useSRGBBuffer), -1), !ee) throw new Error("Unable to create render buffer");
          Ee._autoMSAAManagement = !0;
          let ie = Ee._hardwareTexture;
          ie || (ie = Ee._hardwareTexture = this._createHardwareTexture()), ie.addMSAARenderBuffer(ee)
        }
        return Ee
      }
      _getUseSRGBBuffer(ee, ie) {
        return ee && this._caps.supportSRGBBuffers && (this.dT > 1 || ie)
      }
      createTexture(ee, ie, He, ye) {
        var be = this;
        let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Fe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Je = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          oe = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Re = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          ke = arguments.length > 11 ? arguments[11] : void 0,
          qe = arguments.length > 12 ? arguments[12] : void 0,
          fe = arguments.length > 13 ? arguments[13] : void 0,
          pe = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(ee, ie, He, ye, Me, Ke, Ue, (function() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          return be._prepareWebGLTexture(...ie, oe)
        }), ((ee, ie, He, be, Me, Ke) => {
          const Ue = this._gl,
            Fe = He.width === ee && He.height === ie;
          Me._creationFlags = fe ?? 0;
          const Je = this._getTexImageParametersForCreateTexture(Me.format, Me._useSRGBBuffer);
          if (Fe) return Ue.texImage2D(Ue.TEXTURE_2D, 0, Je.internalFormat, Je.format, Je.type, He), !1;
          const oe = this._caps.maxTextureSize;
          if (He.width > oe || He.height > oe || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = ee, this._workingCanvas.height = ie, this._workingContext.drawImage(He, 0, 0, He.width, He.height, 0, 0, ee, ie), Ue.texImage2D(Ue.TEXTURE_2D, 0, Je.internalFormat, Je.format, Je.type, this._workingCanvas), Me.width = ee, Me.height = ie, !1);
          {
            const ee = new Te.b(this, 2);
            this._bindTextureDirectly(Ue.TEXTURE_2D, ee, !0), Ue.texImage2D(Ue.TEXTURE_2D, 0, Je.internalFormat, Je.format, Je.type, He), this._rescaleTexture(ee, Me, ye, Je.format, (() => {
              this._releaseTexture(ee), this._bindTextureDirectly(Ue.TEXTURE_2D, Me, !0), Ke()
            }))
          }
          return !0
        }), Fe, Je, oe, Re, ke, qe, pe)
      }
      _getTexImageParametersForCreateTexture(ee, ie) {
        let He, ye;
        return 1 === this.dT ? (He = this._getInternalFormat(ee, ie), ye = He) : (He = this._getInternalFormat(ee, !1), ye = this._getRGBABufferInternalSizedFormat(0, ee, ie)), {
          internalFormat: ye,
          format: He,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(ee, ie, He, ye, be) {}
      _unpackFlipY(ee) {
        this._unpackFlipYCached !== ee && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, ee ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = ee))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(ee) {
        return ee.isCube ? this._gl.TEXTURE_CUBE_MAP : ee.is3D ? this._gl.TEXTURE_3D : ee.is2DArray || ee.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = this._getTextureTarget(ie),
          be = this._getSamplingParameters(ee, ie.useMipMaps || He);
        this._setTextureParameterInteger(ye, this._gl.TEXTURE_MAG_FILTER, be.mag, ie), this._setTextureParameterInteger(ye, this._gl.TEXTURE_MIN_FILTER, be.min), He && be.hasMipMaps && (ie.generateMipMaps = !0, this._gl.generateMipmap(ye)), this._bindTextureDirectly(ye, null), ie.samplingMode = ee
      }
      updateTextureDimensions(ee, ie, He) {}
      updateTextureWrappingMode(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const be = this._getTextureTarget(ee);
        null !== ie && (this._setTextureParameterInteger(be, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ie), ee), ee._cachedWrapU = ie), null !== He && (this._setTextureParameterInteger(be, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(He), ee), ee._cachedWrapV = He), (ee.is2DArray || ee.is3D) && null !== ye && (this._setTextureParameterInteger(be, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(ye), ee), ee._cachedWrapR = ye), this._bindTextureDirectly(be, null)
      }
      _uploadCompressedDataToTextureDirectly(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Ue = this._gl;
        let Fe = Ue.TEXTURE_2D;
        if (ee.isCube && (Fe = Ue.TEXTURE_CUBE_MAP_POSITIVE_X + Me), ee._useSRGBBuffer) switch (ie) {
          case 37492:
          case 36196:
            this._caps.etc2 ? ie = Ue.COMPRESSED_SRGB8_ETC2 : ee._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? ie = Ue.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : ee._useSRGBBuffer = !1;
            break;
          case 36492:
            ie = Ue.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            ie = Ue.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? ie = Ue.COMPRESSED_SRGB_S3TC_DXT1_EXT : ee._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? ie = Ue.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : ee._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? ie = Ue.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : ee._useSRGBBuffer = !1;
            break;
          default:
            ee._useSRGBBuffer = !1
        }
        if (ee.generateMipMaps) {
          const Me = ee._hardwareTexture;
          Me.memoryAllocated || (Ue.texStorage2D(ee.isCube ? Ue.TEXTURE_CUBE_MAP : Ue.TEXTURE_2D, Math.floor(Math.log2(Math.max(He, ye))) + 1, ie, ee.width, ee.height), Me.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Fe, Ke, 0, 0, He, ye, ie, be)
        } else this._gl.compressedTexImage2D(Fe, Ke, ie, He, ye, 0, be)
      }
      _uploadDataToTextureDirectly(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ke = this._gl,
          Ue = this._getWebGLTextureType(ee.type),
          Fe = this._getInternalFormat(ee.format),
          Je = void 0 === be ? this._getRGBABufferInternalSizedFormat(ee.type, ee.format, ee._useSRGBBuffer) : this._getInternalFormat(be, ee._useSRGBBuffer);
        this._unpackFlipY(ee.invertY);
        let oe = Ke.TEXTURE_2D;
        ee.isCube && (oe = Ke.TEXTURE_CUBE_MAP_POSITIVE_X + He);
        const Re = Math.round(Math.log(ee.width) * Math.LOG2E),
          ke = Math.round(Math.log(ee.height) * Math.LOG2E),
          qe = Me ? ee.width : Math.pow(2, Math.max(Re - ye, 0)),
          fe = Me ? ee.height : Math.pow(2, Math.max(ke - ye, 0));
        Ke.texImage2D(oe, ye, Je, qe, fe, 0, Fe, Ue, ie)
      }
      updateTextureData(ee, ie, He, ye, be, Me) {
        let Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Je = this._gl,
          oe = this._getWebGLTextureType(ee.type),
          Re = this._getInternalFormat(ee.format);
        this._unpackFlipY(ee.invertY);
        let ke = Je.TEXTURE_2D,
          qe = Je.TEXTURE_2D;
        ee.isCube && (qe = Je.TEXTURE_CUBE_MAP_POSITIVE_X + Ke, ke = Je.TEXTURE_CUBE_MAP), this._bindTextureDirectly(ke, ee, !0), Je.texSubImage2D(qe, Ue, He, ye, be, Me, Re, oe, ie), Fe && this._gl.generateMipmap(qe), this._bindTextureDirectly(ke, null)
      }
      _uploadArrayBufferViewToTexture(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const be = this._gl,
          Me = ee.isCube ? be.TEXTURE_CUBE_MAP : be.TEXTURE_2D;
        this._bindTextureDirectly(Me, ee, !0), this._uploadDataToTextureDirectly(ee, ie, He, ye), this._bindTextureDirectly(Me, null, !0)
      }
      _prepareWebGLTextureContinuation(ee, ie, He, ye, be) {
        const Me = this._gl;
        if (!Me) return;
        const Ke = this._getSamplingParameters(be, !He);
        Me.texParameteri(Me.TEXTURE_2D, Me.TEXTURE_MAG_FILTER, Ke.mag), Me.texParameteri(Me.TEXTURE_2D, Me.TEXTURE_MIN_FILTER, Ke.min), He || ye || Me.generateMipmap(Me.TEXTURE_2D), this._bindTextureDirectly(Me.TEXTURE_2D, null), ie && ie.removePendingData(ee), ee.onLoadedObservable.notifyObservers(ee), ee.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
        const oe = this.getCaps().maxTextureSize,
          Re = Math.min(oe, this.needPOTTextures ? (0, qe.h)(ye.width, oe) : ye.width),
          ke = Math.min(oe, this.needPOTTextures ? (0, qe.h)(ye.height, oe) : ye.height),
          fe = this._gl;
        fe && (ee._hardwareTexture ? (this._bindTextureDirectly(fe.TEXTURE_2D, ee, !0), this._unpackFlipY(void 0 === be || !!be), ee.baseWidth = ye.width, ee.baseHeight = ye.height, ee.width = Re, ee.height = ke, ee.isReady = !0, ee.type = -1 !== ee.type ? ee.type : 0, ee.format = -1 !== ee.format ? ee.format : Je ?? (".jpg" !== ie || ee._useSRGBBuffer ? 5 : 4), Ue(Re, ke, ye, ie, ee, (() => {
          this._prepareWebGLTextureContinuation(ee, He, Me, Ke, Fe)
        })) || this._prepareWebGLTextureContinuation(ee, He, Me, Ke, Fe)) : He && He.removePendingData(ee))
      }
      _getInternalFormatFromDepthTextureFormat(ee, ie, He) {
        const ye = this._gl;
        if (!ie) return ye.STENCIL_INDEX8;
        let be = He ? ye.DEPTH_STENCIL : ye.DEPTH_COMPONENT;
        return this.dT > 1 ? 15 === ee ? be = ye.DEPTH_COMPONENT16 : 16 === ee ? be = ye.DEPTH_COMPONENT24 : 17 === ee || 13 === ee ? be = He ? ye.DEPTH24_STENCIL8 : ye.DEPTH_COMPONENT24 : 14 === ee ? be = ye.DEPTH_COMPONENT32F : 18 === ee && (be = He ? ye.DEPTH32F_STENCIL8 : ye.DEPTH_COMPONENT32F) : be = ye.DEPTH_COMPONENT16, be
      }
      _getWebGLTextureTypeFromDepthTextureFormat(ee) {
        const ie = this._gl;
        let He = ie.UNSIGNED_INT;
        return 15 === ee ? He = ie.UNSIGNED_SHORT : 17 === ee || 13 === ee ? He = ie.UNSIGNED_INT_24_8 : 14 === ee ? He = ie.FLOAT : 18 === ee ? He = ie.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === ee && (He = ie.UNSIGNED_BYTE), He
      }
      _setupFramebufferDepthAttachments(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Me = arguments.length > 5 ? arguments[5] : void 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ue = this._gl;
        Me = Me ?? (ee ? 13 : 14);
        const Fe = this._getInternalFormatFromDepthTextureFormat(Me, ie, ee);
        return ee && ie ? this._createRenderBuffer(He, ye, be, Ue.DEPTH_STENCIL, Fe, Ke ? -1 : Ue.DEPTH_STENCIL_ATTACHMENT) : ie ? this._createRenderBuffer(He, ye, be, Fe, Fe, Ke ? -1 : Ue.DEPTH_ATTACHMENT) : ee ? this._createRenderBuffer(He, ye, be, Fe, Fe, Ke ? -1 : Ue.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(ee, ie, He, ye, be, Me) {
        let Ke = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Ue = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Ue, ee, ie, He, ye, be, Me, Ke)
      }
      _updateRenderBuffer(ee, ie, He, ye, be, Me, Ke) {
        let Ue = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Fe = this._gl;
        return Fe.bindRenderbuffer(Fe.RENDERBUFFER, ee), ye > 1 && Fe.renderbufferStorageMultisample ? Fe.renderbufferStorageMultisample(Fe.RENDERBUFFER, ye, Me, ie, He) : Fe.renderbufferStorage(Fe.RENDERBUFFER, be, ie, He), -1 !== Ke && Fe.framebufferRenderbuffer(Fe.FRAMEBUFFER, Ke, Fe.RENDERBUFFER, ee), Ue && Fe.bindRenderbuffer(Fe.RENDERBUFFER, null), ee
      }
      _releaseTexture(ee) {
        this._deleteTexture(ee._hardwareTexture), this.unbindAllTextures();
        const ie = this._internalTexturesCache.indexOf(ee); - 1 !== ie && this._internalTexturesCache.splice(ie, 1), ee._lodTextureHigh && ee._lodTextureHigh.dispose(), ee._lodTextureMid && ee._lodTextureMid.dispose(), ee._lodTextureLow && ee._lodTextureLow.dispose(), ee._irradianceTexture && ee._irradianceTexture.dispose()
      }
      _deleteTexture(ee) {
        ee?.release()
      }
      _setProgram(ee) {
        this._currentProgram !== ee && ((0, be.s)(ee, this._gl), this._currentProgram = ee)
      }
      bindSamplers(ee) {
        const ie = ee.getPipelineContext();
        this._setProgram(ie.program);
        const He = ee.getSamplers();
        for (let ye = 0; ye < He.length; ye++) {
          const ie = ee.getUniform(He[ye]);
          ie && (this._boundUniforms[ye] = ie)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          be = !1;
        const Me = ie && ie._associatedChannel > -1;
        He && Me && (this._activeChannel = ie._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== ie || ye) {
          if (this._activateCurrentTexture(), ie && ie.isMultiview) throw Ue.e.Error(["_bindTextureDirectly called with a multiview texture!", ee, ie]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(ee, ie?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = ie, ie && (ie._associatedChannel = this._activeChannel)
        } else He && (be = !0, this._activateCurrentTexture());
        return Me && !He && this._bindSamplerUniformToChannel(ie._associatedChannel, this._activeChannel), be
      }
      _bindTexture(ee, ie, He) {
        if (void 0 === ee) return;
        ie && (ie._associatedChannel = ee), this._activeChannel = ee;
        const ye = ie ? this._getTextureTarget(ie) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(ye, ie)
      }
      unbindAllTextures() {
        for (let ee = 0; ee < this._maxSimultaneousTextures; ee++) this._activeChannel = ee, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.dT > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(ee, ie, He, ye) {
        void 0 !== ee && (ie && (this._boundUniforms[ee] = ie), this._setTexture(ee, He))
      }
      _bindSamplerUniformToChannel(ee, ie) {
        const He = this._boundUniforms[ee];
        He && He._currentState !== ie && (this._gl.uniform1i(He, ie), He._currentState = ie)
      }
      _getTextureWrapMode(ee) {
        switch (ee) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(ee, ie) {
        let He, ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ie) return null != this._boundTexturesCache[ee] && (this._activeChannel = ee, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.dT > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (ie.video) {
          this._activeChannel = ee;
          const He = ie.getInternalTexture();
          He && (He._associatedChannel = ee), ie.update()
        } else if (4 === ie.delayLoadState) return ie.delayLoad(), !1;
        He = be ? ie.depthStencilTexture : ie.isReady() ? ie.getInternalTexture() : ie.isCube ? this.emptyCubeTexture : ie.is3D ? this.emptyTexture3D : ie.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !ye && He && (He._associatedChannel = ee);
        let Me = !0;
        this._boundTexturesCache[ee] === He && (ye || this._bindSamplerUniformToChannel(He._associatedChannel, ee), Me = !1), this._activeChannel = ee;
        const Ke = this._getTextureTarget(He);
        if (Me && this._bindTextureDirectly(Ke, He, ye), He && !He.isMultiview) {
          if (He.isCube && He._cachedCoordinatesMode !== ie.coordinatesMode) {
            He._cachedCoordinatesMode = ie.coordinatesMode;
            const ee = 3 !== ie.coordinatesMode && 5 !== ie.coordinatesMode ? 1 : 0;
            ie.wrapU = ee, ie.wrapV = ee
          }
          He._cachedWrapU !== ie.wrapU && (He._cachedWrapU = ie.wrapU, this._setTextureParameterInteger(Ke, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ie.wrapU), He)), He._cachedWrapV !== ie.wrapV && (He._cachedWrapV = ie.wrapV, this._setTextureParameterInteger(Ke, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ie.wrapV), He)), He.is3D && He._cachedWrapR !== ie.wrapR && (He._cachedWrapR = ie.wrapR, this._setTextureParameterInteger(Ke, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(ie.wrapR), He)), this._setAnisotropicLevel(Ke, He, ie.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(ee, ie, He, ye) {
        if (void 0 !== ee && ie) {
          this._textureUnits && this._textureUnits.length === He.length || (this._textureUnits = new Int32Array(He.length));
          for (let ie = 0; ie < He.length; ie++) {
            const ye = He[ie].getInternalTexture();
            ye ? (this._textureUnits[ie] = ee + ie, ye._associatedChannel = ee + ie) : this._textureUnits[ie] = -1
          }
          this._gl.uniform1iv(ie, this._textureUnits);
          for (let ee = 0; ee < He.length; ee++) this._setTexture(this._textureUnits[ee], He[ee], !0)
        }
      }
      _setAnisotropicLevel(ee, ie, He) {
        const ye = this._caps.textureAnisotropicFilterExtension;
        11 !== ie.samplingMode && 3 !== ie.samplingMode && 2 !== ie.samplingMode && (He = 1), ye && ie._cachedAnisotropicFilteringLevel !== He && (this._setTextureParameterFloat(ee, ye.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(He, this._caps.maxAnisotropy), ie), ie._cachedAnisotropicFilteringLevel = He)
      }
      _setTextureParameterFloat(ee, ie, He, ye) {
        this._bindTextureDirectly(ee, ye, !0, !0), this._gl.texParameterf(ee, ie, He)
      }
      _setTextureParameterInteger(ee, ie, He, ye) {
        ye && this._bindTextureDirectly(ee, ye, !0, !0), this._gl.texParameteri(ee, ie, He)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let ee = 0; ee < this._caps.maxVertexAttribs; ee++) this.disableAttributeByIndex(ee)
        } else
          for (let ee = 0, ie = this._vertexAttribArraysEnabled.length; ee < ie; ee++) ee >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[ee] || this.disableAttributeByIndex(ee)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Fe.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, be.F)(this._gl)
      }
      attachContextLostEvent(ee) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", ee, !1)
      }
      attachContextRestoredEvent(ee) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", ee, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(ee) {
        const ie = this._gl;
        for (; ie.getError() !== ie.NO_ERROR;);
        let He = !0;
        const ye = ie.createTexture();
        ie.bindTexture(ie.TEXTURE_2D, ye), ie.texImage2D(ie.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(ee), 1, 1, 0, ie.RGBA, this._getWebGLTextureType(ee), null), ie.texParameteri(ie.TEXTURE_2D, ie.TEXTURE_MIN_FILTER, ie.NEAREST), ie.texParameteri(ie.TEXTURE_2D, ie.TEXTURE_MAG_FILTER, ie.NEAREST);
        const be = ie.createFramebuffer();
        ie.bindFramebuffer(ie.FRAMEBUFFER, be), ie.framebufferTexture2D(ie.FRAMEBUFFER, ie.COLOR_ATTACHMENT0, ie.TEXTURE_2D, ye, 0);
        const Me = ie.checkFramebufferStatus(ie.FRAMEBUFFER);
        if (He = He && Me === ie.FRAMEBUFFER_COMPLETE, He = He && ie.getError() === ie.NO_ERROR, He && (ie.clear(ie.COLOR_BUFFER_BIT), He = He && ie.getError() === ie.NO_ERROR), He) {
          ie.bindFramebuffer(ie.FRAMEBUFFER, null);
          const ee = ie.RGBA,
            ye = ie.UNSIGNED_BYTE,
            be = new Uint8Array(4);
          ie.readPixels(0, 0, 1, 1, ee, ye, be), He = He && ie.getError() === ie.NO_ERROR
        }
        for (ie.deleteTexture(ye), ie.deleteFramebuffer(be), ie.bindFramebuffer(ie.FRAMEBUFFER, null); !He && ie.getError() !== ie.NO_ERROR;);
        return He
      }
      _getWebGLTextureType(ee) {
        if (1 === this._webGLVersion) {
          switch (ee) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (ee) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = ie ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (ee) {
          case 0:
            He = this._gl.ALPHA;
            break;
          case 1:
            He = this._gl.LUMINANCE;
            break;
          case 2:
            He = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            He = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            He = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            He = ie ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            He = ie ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (ee) {
          case 8:
            He = this._gl.RED_INTEGER;
            break;
          case 9:
            He = this._gl.RG_INTEGER;
            break;
          case 10:
            He = this._gl.RGB_INTEGER;
            break;
          case 11:
            He = this._gl.RGBA_INTEGER
        }
        return He
      }
      _getRGBABufferInternalSizedFormat(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== ie) switch (ie) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return He ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (ee) {
          case 3:
            switch (ie) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (ie) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return He ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return He ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (ie) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (ie) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (ie) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (ie) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (ie) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (ie) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (ie) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return He ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(ee, ie, He, ye) {
        let be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Fe = be ? 4 : 3,
          Je = be ? this._gl.RGBA : this._gl.RGB,
          oe = He * ye * Fe;
        if (Ke) {
          if (Ke.length < oe) return Ue.e.Error(`Data buffer is too small to store the read pixels (${Ke.length} should be more than ${oe})`), Promise.resolve(Ke)
        } else Ke = new Uint8Array(oe);
        return Me && this.flushFramebuffer(), this._gl.readPixels(ee, ie, He, ye, Je, this._gl.UNSIGNED_BYTE, Ke), Promise.resolve(Ke)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const ee = Me.e._CreateCanvas(1, 1),
            ie = ee.getContext("webgl") || ee.getContext("experimental-webgl");
          this._IsSupported = null != ie && !!globalThis.WebGLRenderingContext
        } catch (ee) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const ee = Me.e._CreateCanvas(1, 1),
            ie = ee.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || ee.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !ie
        } catch (ee) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    ge._TempClearColorUint32 = new Uint32Array(4), ge._TempClearColorInt32 = new Int32Array(4), ge._TempClearColorFloat32 = new Float32Array(4), ge.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], ge._ConcatenateShader = pe.e, ge._IsSupported = null, ge._HasMajorPerformanceCaveat = null
  },
  41292: (ee, ie, He) => {
    var ye;
    He.d(ie, {
        d: () => be
      }),
      function(ee) {
        ee[ee.PointerMove = 0] = "PointerMove", ee[ee.PointerDown = 1] = "PointerDown", ee[ee.PointerUp = 2] = "PointerUp"
      }(ye || (ye = {}));
    class be {}
    be.DOM_DELTA_PIXEL = 0, be.DOM_DELTA_LINE = 1, be.DOM_DELTA_PAGE = 2
  },
  41289: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye,
      g: () => Me,
      j: () => be
    });
    class ye {}
    ye.KEYDOWN = 1, ye.KEYUP = 2;
    class be {
      constructor(ee, ie) {
        this.type = ee, this.event = ie
      }
    }
    class Me extends be {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(ee) {
        this.skipOnKeyboardObservable = ee
      }
      constructor(ee, ie) {
        super(ee, ie), this.type = ee, this.event = ie, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41286: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Ke,
      i: () => Ue
    });
    var ye = He(37917);
    class be {}
    be.POINTERDOWN = 1, be.POINTERUP = 2, be.POINTERMOVE = 4, be.POINTERWHEEL = 8, be.POINTERPICK = 16, be.POINTERTAP = 32, be.POINTERDOUBLETAP = 64;
    class Me {
      constructor(ee, ie) {
        this.type = ee, this.event = ie
      }
    }
    class Ke extends Me {
      constructor(ee, ie, He, be) {
        super(ee, ie), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new ye.n(He, be)
      }
    }
    class Ue extends Me {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(ee, ie), this._pickInfo = He, this._inputManager = ye
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41301: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {
      static CompareLightsPriority(ee, ie) {
        return ee.shadowEnabled !== ie.shadowEnabled ? (ie.shadowEnabled ? 1 : 0) - (ee.shadowEnabled ? 1 : 0) : ie.renderPriority - ee.renderPriority
      }
    }
    ye.FALLOFF_DEFAULT = 0, ye.FALLOFF_PHYSICAL = 1, ye.FALLOFF_GLTF = 2, ye.FALLOFF_STANDARD = 3, ye.LIGHTMAP_DEFAULT = 0, ye.LIGHTMAP_SPECULAR = 1, ye.LIGHTMAP_SHADOWSONLY = 2, ye.INTENSITYMODE_AUTOMATIC = 0, ye.INTENSITYMODE_LUMINOUSPOWER = 1, ye.INTENSITYMODE_LUMINOUSINTENSITY = 2, ye.INTENSITYMODE_ILLUMINANCE = 3, ye.INTENSITYMODE_LUMINANCE = 4, ye.LIGHTTYPEID_POINTLIGHT = 0, ye.LIGHTTYPEID_DIRECTIONALLIGHT = 1, ye.LIGHTTYPEID_SPOTLIGHT = 2, ye.LIGHTTYPEID_HEMISPHERICLIGHT = 3, ye.LIGHTTYPEID_RECT_AREALIGHT = 4, ye.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40924: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye, be = He(37931),
      Me = He(40929);
    ! function(ee) {
      ee[ee.Unknown = 0] = "Unknown", ee[ee.Url = 1] = "Url", ee[ee.Temp = 2] = "Temp", ee[ee.Raw = 3] = "Raw", ee[ee.Dynamic = 4] = "Dynamic", ee[ee.RenderTarget = 5] = "RenderTarget", ee[ee.MultiRenderTarget = 6] = "MultiRenderTarget", ee[ee.Cube = 7] = "Cube", ee[ee.CubeRaw = 8] = "CubeRaw", ee[ee.CubePrefiltered = 9] = "CubePrefiltered", ee[ee.Raw3D = 10] = "Raw3D", ee[ee.Raw2DArray = 11] = "Raw2DArray", ee[ee.DepthStencil = 12] = "DepthStencil", ee[ee.CubeRawRGBD = 13] = "CubeRawRGBD", ee[ee.Depth = 14] = "Depth", ee[ee.External = 15] = "External"
    }(ye || (ye = {}));
    class Ke extends Me.e {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(ee) {
        this._useMipMaps = ee
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(ee) {
        this._uniqueId = ee
      }
      Nf() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new be.d, this.onErrorObservable = new be.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = ee, this._source = ie, this._uniqueId = Ke._Counter++, He || (this._hardwareTexture = ee._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, ee, ie, He), this.width = ee, this.height = ie, this.depth = He, this.baseWidth = ee, this.baseHeight = ie, this.baseDepth = He, this._size = ee * ie * He
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const ee = this.onRebuildCallback(this),
            ie = ie => {
              ie._swapAndDie(this, !1), this.isReady = ee.isReady
            };
          return void(ee.isAsync ? ee.proxy.then(ie) : ie(ee.proxy))
        }
        let ee;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(ee = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (ee => {
              ee._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (ee = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), ee._swapAndDie(this, !1), this._bufferViewArray)
              for (let ee = 0; ee < this._bufferViewArray.length; ee++) {
                const ie = this._bufferViewArray[ee];
                ie && this._engine.updateRawTexture(this, ie, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, ee)
              }
            this.isReady = !0;
            break;
          case 10:
            ee = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), ee._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (ee = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), ee._swapAndDie(this, !1), this._bufferViewArray)
              for (let ee = 0; ee < this._bufferViewArray.length; ee++) {
                const ie = this._bufferViewArray[ee];
                ie && this._engine.updateRawTexture2DArray(this, ie, this.format, this.invertY, this._compression, this.type, ee)
              }
            this.isReady = !0;
            break;
          case 4:
            ee = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), ee._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(ee = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              ee._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            ee = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), ee._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return ee = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (ee => {
              ee && ee._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(ee._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(ee._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), ee._hardwareTexture = this._hardwareTexture, ee._setUniqueId(Ke._Counter++), ie && (ee._isRGBD = this._isRGBD), this._lodTextureHigh && (ee._lodTextureHigh && ee._lodTextureHigh.dispose(), ee._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (ee._lodTextureMid && ee._lodTextureMid.dispose(), ee._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (ee._lodTextureLow && ee._lodTextureLow.dispose(), ee._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (ee._irradianceTexture && ee._irradianceTexture.dispose(), ee._irradianceTexture = this._irradianceTexture);
        const He = this._engine.getLoadedTexturesCache();
        let ye = He.indexOf(this); - 1 !== ye && He.splice(ye, 1), ye = He.indexOf(ee), -1 === ye && He.push(ee)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Ke._Counter = 0
  },
  41059: (ee, ie, He) => {
    function ye(ee) {
      return 13 === ee || 14 === ee || 15 === ee || 16 === ee || 17 === ee || 18 === ee || 19 === ee
    }

    function be(ee) {
      return 8 === ee || 9 === ee || 10 === ee || 11 === ee
    }

    function Me(ee) {
      return 0 === ee || 5 === ee || 7 === ee || 11 === ee
    }

    function Ke(ee) {
      return 13 === ee || 17 === ee || 18 === ee || 19 === ee
    }
    He.d(ie, {
      e: () => Ke,
      i: () => ye,
      j: () => be,
      k: () => Me
    })
  },
  40929: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(ee) {
        this._cachedWrapU = ee
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(ee) {
        this._cachedWrapV = ee
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(ee) {
        this._cachedWrapR = ee
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(ee) {
        this._cachedAnisotropicFilteringLevel = ee
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(ee) {
        this._comparisonFunction = ee
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(ee) {
        this._useMipMaps = ee
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = ee, this._cachedWrapV = ie, this._cachedWrapR = He, this._cachedAnisotropicFilteringLevel = ye, this.samplingMode = be, this._comparisonFunction = Me, this
      }
      compareSampler(ee) {
        return this._cachedWrapU === ee._cachedWrapU && this._cachedWrapV === ee._cachedWrapV && this._cachedWrapR === ee._cachedWrapR && this._cachedAnisotropicFilteringLevel === ee._cachedAnisotropicFilteringLevel && this.samplingMode === ee.samplingMode && this._comparisonFunction === ee._comparisonFunction && this._useMipMaps === ee._useMipMaps
      }
    }
  },
  41227: (ee, ie, He) => {
    function ye(ee) {
      ee.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    He.d(ie, {
      c: () => ye
    })
  },
  41022: (ee, ie, He) => {
    function ye(ee) {
      return void 0 === ee.getPipelineContext
    }
    He.d(ie, {
      e: () => ye
    })
  },
  41446: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(40995);
    class be {
      static GetEffect(ee) {
        return void 0 === ee.getPipelineContext ? ee.effect : ee
      }
      constructor(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = ee.createDrawContext(), ie && (this.materialContext = ee.createMaterialContext())
      }
      setEffect(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        He || this.effect === ee || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = ee, void 0 !== ie && (this.defines = ie), He && this.drawContext?.reset()
      }
      dispose() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const ie = this.effect;
          ee ? ie.dispose() : ye.c.SetImmediate((() => {
            ie.Nf().onEndFrameObservable.addOnce((() => {
              ie.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40960: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      f: () => qe,
      i: () => Je,
      m: () => oe
    });
    var ye = He(40968),
      be = He(40972),
      Me = He(40954),
      Ke = He(39467),
      Ue = He(40988),
      Fe = He(40979);

    function Je(ee, ie) {
      return (0, be.I)(ie).cachedPipelines[ee]
    }

    function oe(ee) {
      const ie = ee._name,
        He = ee.context;
      if (ie && He) {
        const ee = (0, be.I)(He),
          ye = ee.cachedPipelines[ie];
        ye?.dispose(), delete ee.cachedPipelines[ie]
      }
    }

    function Re(ee, ie, He, be, Me, Ke, Fe) {
      let Je, oe;
      const Re = (0, ye.m)() ? Ke?.getHostDocument() : null;
      Je = "string" === typeof ie ? ie : "string" === typeof ie.vertexSource ? "source:" + ie.vertexSource : "string" === typeof ie.vertexElement ? Re?.getElementById(ie.vertexElement) || ie.vertexElement : ie.vertex || ie, oe = "string" === typeof ie ? ie : "string" === typeof ie.fragmentSource ? "source:" + ie.fragmentSource : "string" === typeof ie.fragmentElement ? Re?.getElementById(ie.fragmentElement) || ie.fragmentElement : ie.fragment || ie;
      const qe = [void 0, void 0],
        fe = () => {
          if (qe[0] && qe[1]) {
            const [ye, Je] = qe;
            (0, Ue.i)(ee), (0, Ue.o)(ye, ee, ((ye, oe) => {
              Fe && (Fe._vertexSourceCodeBeforeMigration = oe), He && (ye = He("vertex", ye)), ee.isFragment = !0, (0, Ue.o)(Je, ee, ((Ke, Je) => {
                Fe && (Fe._fragmentSourceCodeBeforeMigration = Je), He && (Ke = He("fragment", Ke));
                const oe = (0, Ue.e)(ye, Ke, ee);
                ee = null;
                const Re = function(ee, ie, He, ye) {
                  if (He) {
                    return {
                      vertexSourceCode: (1 === ye ? "//" : "") + "#define SHADER_NAME vertex:" + (He.vertexElement || He.vertex || He.spectorName || He) + "\n" + ee,
                      fragmentSourceCode: (1 === ye ? "//" : "") + "#define SHADER_NAME fragment:" + (He.fragmentElement || He.fragment || He.spectorName || He) + "\n" + ie
                    }
                  }
                  return {
                    vertexSourceCode: ee,
                    fragmentSourceCode: ie
                  }
                }(oe.vertexCode, oe.fragmentCode, ie, Me);
                be?.(Re.vertexSourceCode, Re.fragmentSourceCode)
              }), Ke)
            }), Ke)
          }
        };
      ke(Je, "Vertex", "", (ee => {
        Fe && (Fe._rawVertexSourceCode = ee), qe[0] = ee, fe()
      }), Me), ke(oe, "Fragment", "Pixel", (ee => {
        Fe && (Fe._rawFragmentSourceCode = ee), qe[1] = ee, fe()
      }), Me)
    }

    function ke(ee, ie, He, be, Ke, Ue) {
      if ("undefined" !== typeof HTMLElement && ee instanceof HTMLElement) {
        return void be((0, ye.e)(ee))
      }
      if ("source:" === ee.substring(0, 7)) return void be(ee.substring(7));
      if ("base64:" === ee.substring(0, 7)) {
        return void be(window.atob(ee.substring(7)))
      }
      const Je = Me.d.GetShadersStore(Ke);
      if (Je[ee + ie + "Shader"]) return void be(Je[ee + ie + "Shader"]);
      if (He && Je[ee + He + "Shader"]) return void be(Je[ee + He + "Shader"]);
      let oe;
      if (oe = "." === ee[0] || "/" === ee[0] || ee.indexOf("http") > -1 ? ee : Me.d.GetShadersRepository(Ke) + ee, !(Ue = Ue || Fe.i)) throw new Error("loadFileInjection is not defined");
      Ue(oe + "." + ie.toLowerCase() + ".fx", be)
    }
    const qe = (ee, ie, He, ye) => {
      try {
        const Me = ee.context ? (0, be.I)(ee.context) : null;
        Me && (Me.disableParallelShaderCompile = ee.disableParallelCompilation);
        const Ke = ee.existingPipelineContext || ie(ee.shaderProcessingContext);
        return Ke._name = ee.name, ee.name && Me && (Me.cachedPipelines[ee.name] = Ke), He(Ke, ee.vertex, ee.fragment, !!ee.createAsRaw, "", "", ee.rebuildRebind, ee.defines, ee.transformFeedbackVaryings, "", (() => {
          ye(Ke, (() => {
            ee.onRenderingStateCompiled?.(Ke)
          }))
        })), Ke
      } catch (Me) {
        throw Ke.e.Error("Error compiling effect"), Me
      }
    }
  },
  40945: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe
    });
    var ye = He(37931),
      be = He(39467),
      Me = He(40954),
      Ke = He(40960),
      Ue = He(40995);
    class Fe {
      static get ShadersRepository() {
        return Me.d.ShadersRepository
      }
      static set ShadersRepository(ee) {
        Me.d.ShadersRepository = ee
      }
      get RZ() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new ye.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(ee, ie, He) {
        let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Me = arguments.length > 4 ? arguments[4] : void 0,
          Ue = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Je = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          oe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Re = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          ke = arguments.length > 9 ? arguments[9] : void 0,
          qe = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          fe = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Te = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new ye.d, this.onErrorObservable = new ye.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = ee, this._key = qe;
        const pe = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Xe;
        if (ie.attributes) {
          const ee = ie;
          if (this._engine = He, this._attributesNames = ee.attributes, this._uniformsNames = ee.uniformsNames.concat(ee.samplers), this._samplerList = ee.samplers.slice(), this.defines = ee.defines, this.onError = ee.onError, this.onCompiled = ee.onCompiled, this._fallbacks = ee.fallbacks, this._indexParameters = ee.indexParameters, this._transformFeedbackVaryings = ee.transformFeedbackVaryings || null, this._multiTarget = !!ee.multiTarget, this._shaderLanguage = ee.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!ee.disableParallelShaderCompilation, ee.uniformBuffersNames) {
            this._uniformBuffersNamesList = ee.uniformBuffersNames.slice();
            for (let ie = 0; ie < ee.uniformBuffersNames.length; ie++) this._uniformBuffersNames[ee.uniformBuffersNames[ie]] = ie
          }
          this._processFinalCode = ee.processFinalCode ?? null, this._processCodeAfterIncludes = ee.processCodeAfterIncludes ?? void 0, Te = ee.extraInitializationsAsync, Xe = ee.existingPipelineContext
        } else this._engine = Me, this.defines = null == Ue ? "" : Ue, this._uniformsNames = He.concat(be), this._samplerList = be ? be.slice() : [], this._attributesNames = ie, this._uniformBuffersNamesList = [], this._shaderLanguage = fe, this.onError = Re, this.onCompiled = oe, this._indexParameters = ke, this._fallbacks = Je;
        "WEBGL2" === this._engine.shaderPlatformName && (Xe = (0, Ke.i)(pe, this._engine._gl) ?? Xe), this._attributeLocationByName = {}, this.uniqueId = Fe._UniqueIdSeed++, Xe ? (this._pipelineContext = Xe, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Te).catch((ee => {
          const ie = ee?.message ?? String(ee),
            He = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${ie}`);
          ee && "string" === typeof ee.stack && (He.stack = `${He.message}\nCaused by: ${ee.stack}`), this._processCompilationErrors(He)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.RZ || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        ye && await ye(), this._processingContext = He || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const be = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: ee ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Me.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Me.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          Gbe: this._engine.Gbe,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Ke.c)(be, this.name, this._processFinalCode, ((ee, He) => {
          this._vertexSourceCode = ee, this._fragmentSourceCode = He, this._prepareEffect(ie)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.RZ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Nf() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(ee) {
        return this._attributes[ee]
      }
      getAttributeLocationByName(ee) {
        return this._attributeLocationByName[ee]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(ee) {
        return this._uniformsNames.indexOf(ee)
      }
      getUniform(ee) {
        return this._uniforms[ee]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((ee => {
          this.executeWhenCompiled(ee)
        }))
      }
      executeWhenCompiled(ee) {
        this.isReady() ? ee(this) : (this.onCompileObservable.add((ie => {
          ee(ie)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(ee) {
        (0, Ue.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (ie => {
          this._processCompilationErrors(ie, ee)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            Gbe: this._engine.Gbe,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(ee, ie, He, ye) {
        this._isReady = !1, this._vertexSourceCodeOverride = ee, this._fragmentSourceCodeOverride = ie, this.onError = (ee, ie) => {
          ye && ye(ie)
        }, this.onCompiled = () => {
          const ee = this.Nf().scenes;
          if (ee)
            for (let ie = 0; ie < ee.length; ie++) ee[ie].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(He)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(ee) {
        if (this._pipelineContext = ee, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let ie = 0; ie < this._attributesNames.length; ie++) {
            const ee = this._attributesNames[ie];
            this._attributeLocationByName[ee] = this._attributes[ie]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Fe.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = this._pipelineContext;
        this._isReady = !1;
        try {
          const He = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            ye = He ? null : this.defines,
            be = He ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Me = He ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Ue = this._engine;
          this._pipelineContext = (0, Ke.f)({
            existingPipelineContext: ee ? ie : null,
            vertex: be,
            fragment: Me,
            context: "WEBGL2" === Ue.shaderPlatformName || "WEBGL1" === Ue.shaderPlatformName ? Ue._gl : void 0,
            rebuildRebind: (ee, ie, He, ye) => this._rebuildProgram(ee, ie, He, ye),
            defines: ye,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: He,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: He => {
              ie && !ee && this._engine._deletePipelineContext(ie), He && this._onRenderingStateCompiled(He)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(ie)
        } catch (He) {
          this._processCompilationErrors(He, ie)
        }
      }
      _getShaderCodeAndErrorLine(ee, ie, He) {
        const ye = He ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let be = null;
        if (ie && ee) {
          const Me = ie.match(ye);
          if (Me && 2 === Me.length) {
            const ie = parseInt(Me[1]),
              ye = ee.split("\n", -1);
            ye.length >= ie && (be = `Offending line [${ie}] in ${He?"fragment":"vertex"} code: ${ye[ie-1]}`)
          }
        }
        return [ee, be]
      }
      _processCompilationErrors(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof ee?.stack ? ee.stack : ee?.message ?? String(ee);
        const He = this._attributesNames,
          ye = this._fallbacks;
        if (be.e.Error("Unable to compile effect:"), be.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), be.e.Error(`Attributes: ${He.join(" ")}`), be.e.Error("Defines:\n" + this.defines), Fe.LogShaderCodeOnCompilationError) {
          let ee, ie = null,
            He = null;
          this._pipelineContext?._getVertexShaderCode() && ([ee, ie] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), ee && (be.e.Error("Vertex code:"), be.e.Error(ee))), this._pipelineContext?._getFragmentShaderCode() && ([ee, He] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), ee && (be.e.Error("Fragment code:"), be.e.Error(ee))), ie && be.e.Error(ie), He && be.e.Error(He)
        }
        be.e.Error("Error: " + this._compilationError);
        const Me = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        ie && (this._pipelineContext = ie, this._isReady = !0, Me()), ye ? (this._pipelineContext = null, ye.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, be.e.Error("Trying next fallback."), this.defines = ye.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Me(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, ie || Me())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(ee, ie) {
        this._engine._bindTexture(this._samplers[ee], ie, ee)
      }
      setTexture(ee, ie) {
        this._engine.setTexture(this._samplers[ee], this._uniforms[ee], ie, ee)
      }
      setTextureArray(ee, ie) {
        const He = ee + "Ex";
        if (-1 === this._samplerList.indexOf(He + "0")) {
          const ye = this._samplerList.indexOf(ee);
          for (let ee = 1; ee < ie.length; ee++) {
            const ie = He + (ee - 1).toString();
            this._samplerList.splice(ye + ee, 0, ie)
          }
          let be = 0;
          for (const ee of this._samplerList) this._samplers[ee] = be, be += 1
        }
        this._engine.setTextureArray(this._samplers[ee], this._uniforms[ee], ie, ee)
      }
      bindUniformBuffer(ee, ie) {
        const He = this._uniformBuffersNames[ie];
        void 0 === He || Fe._BaseCache[He] === ee && this._engine._features.useUBOBindingCache || (Fe._BaseCache[He] = ee, this._engine.bindUniformBufferBase(ee, He, ie))
      }
      bindUniformBlock(ee, ie) {
        this._engine.bindUniformBlock(this._pipelineContext, ee, ie)
      }
      setInt(ee, ie) {
        return this._pipelineContext.setInt(ee, ie), this
      }
      setInt2(ee, ie, He) {
        return this._pipelineContext.setInt2(ee, ie, He), this
      }
      setInt3(ee, ie, He, ye) {
        return this._pipelineContext.setInt3(ee, ie, He, ye), this
      }
      setInt4(ee, ie, He, ye, be) {
        return this._pipelineContext.setInt4(ee, ie, He, ye, be), this
      }
      setIntArray(ee, ie) {
        return this._pipelineContext.setIntArray(ee, ie), this
      }
      setIntArray2(ee, ie) {
        return this._pipelineContext.setIntArray2(ee, ie), this
      }
      setIntArray3(ee, ie) {
        return this._pipelineContext.setIntArray3(ee, ie), this
      }
      setIntArray4(ee, ie) {
        return this._pipelineContext.setIntArray4(ee, ie), this
      }
      setUInt(ee, ie) {
        return this._pipelineContext.setUInt(ee, ie), this
      }
      setUInt2(ee, ie, He) {
        return this._pipelineContext.setUInt2(ee, ie, He), this
      }
      setUInt3(ee, ie, He, ye) {
        return this._pipelineContext.setUInt3(ee, ie, He, ye), this
      }
      setUInt4(ee, ie, He, ye, be) {
        return this._pipelineContext.setUInt4(ee, ie, He, ye, be), this
      }
      setUIntArray(ee, ie) {
        return this._pipelineContext.setUIntArray(ee, ie), this
      }
      setUIntArray2(ee, ie) {
        return this._pipelineContext.setUIntArray2(ee, ie), this
      }
      setUIntArray3(ee, ie) {
        return this._pipelineContext.setUIntArray3(ee, ie), this
      }
      setUIntArray4(ee, ie) {
        return this._pipelineContext.setUIntArray4(ee, ie), this
      }
      setFloatArray(ee, ie) {
        return this._pipelineContext.setArray(ee, ie), this
      }
      setFloatArray2(ee, ie) {
        return this._pipelineContext.setArray2(ee, ie), this
      }
      setFloatArray3(ee, ie) {
        return this._pipelineContext.setArray3(ee, ie), this
      }
      setFloatArray4(ee, ie) {
        return this._pipelineContext.setArray4(ee, ie), this
      }
      setArray(ee, ie) {
        return this._pipelineContext.setArray(ee, ie), this
      }
      setArray2(ee, ie) {
        return this._pipelineContext.setArray2(ee, ie), this
      }
      setArray3(ee, ie) {
        return this._pipelineContext.setArray3(ee, ie), this
      }
      setArray4(ee, ie) {
        return this._pipelineContext.setArray4(ee, ie), this
      }
      setMatrices(ee, ie) {
        return this._pipelineContext.setMatrices(ee, ie), this
      }
      setMatrix(ee, ie) {
        return this._pipelineContext.setMatrix(ee, ie), this
      }
      setMatrix3x3(ee, ie) {
        return this._pipelineContext.setMatrix3x3(ee, ie), this
      }
      setMatrix2x2(ee, ie) {
        return this._pipelineContext.setMatrix2x2(ee, ie), this
      }
      setFloat(ee, ie) {
        return this._pipelineContext.setFloat(ee, ie), this
      }
      setBool(ee, ie) {
        return this._pipelineContext.setInt(ee, ie ? 1 : 0), this
      }
      setVector2(ee, ie) {
        return this._pipelineContext.setVector2(ee, ie), this
      }
      setFloat2(ee, ie, He) {
        return this._pipelineContext.setFloat2(ee, ie, He), this
      }
      setVector3(ee, ie) {
        return this._pipelineContext.setVector3(ee, ie), this
      }
      setFloat3(ee, ie, He, ye) {
        return this._pipelineContext.setFloat3(ee, ie, He, ye), this
      }
      setVector4(ee, ie) {
        return this._pipelineContext.setVector4(ee, ie), this
      }
      setQuaternion(ee, ie) {
        return this._pipelineContext.setQuaternion(ee, ie), this
      }
      setFloat4(ee, ie, He, ye, be) {
        return this._pipelineContext.setFloat4(ee, ie, He, ye, be), this
      }
      setColor3(ee, ie) {
        return this._pipelineContext.setColor3(ee, ie), this
      }
      setColor4(ee, ie, He) {
        return this._pipelineContext.setColor4(ee, ie, He), this
      }
      setDirectColor4(ee, ie) {
        return this._pipelineContext.setDirectColor4(ee, ie), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Fe.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Ke.m)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        ie && (Me.d.GetShadersStore(ye)[`${ee}PixelShader`] = ie), He && (Me.d.GetShadersStore(ye)[`${ee}VertexShader`] = He)
      }
      static ResetCache() {
        Fe._BaseCache = {}
      }
    }
    Fe.LogShaderCodeOnCompilationError = !0, Fe.PersistentMode = !1, Fe.AutomaticallyClearCodeCache = !1, Fe._UniqueIdSeed = 0, Fe._BaseCache = {}, Fe.ShadersStore = Me.d.ShadersStore, Fe.IncludesShadersStore = Me.d.IncludesShadersStore
  },
  41264: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      e: () => de,
      i: () => Oe
    });
    var ye = He(40945),
      be = He(37917),
      Me = He(37946),
      Ke = He(41238);
    const Ue = new be.b,
      Fe = new be.b,
      Je = new be.b,
      oe = {
        Xx: () => {},
        eyeAtCamera: !0
      };

    function Re(ee, ie, He) {
      const ye = He.Qbe(),
        be = ie.Qbe();
      for (let Me = 0; Me < 16; Me++) ye[Me] = be[Me];
      return ye[12] -= ee.x, ye[13] -= ee.y, ye[14] -= ee.z, He.markAsUpdated(), He
    }

    function ke(ee, ie, He) {
      return (0, Me.e)(ie, Fe), Re(ee, Fe, Je), (0, Me.e)(Je, He), He
    }

    function qe(ee, ie, He) {
      if (!oe.eyeAtCamera) return ke(ee, ie, He);
      const ye = He.Qbe(),
        be = ie.Qbe();
      for (let Me = 0; Me < 16; Me++) ye[Me] = be[Me];
      return ye[12] = 0, ye[13] = 0, ye[14] = 0, He.markAsUpdated(), He
    }

    function fe(ee, ie, He, ye) {
      return (0, Me.p)(qe(ee, ie, ye), He, ye), ye
    }

    function Te(ee, ie, He, ye) {
      return (0, Me.e)(He, Fe), (0, Me.p)(ie, Fe, Je), Re(ee, Je, Fe), qe(ee, He, Je), (0, Me.p)(Fe, Je, ye), ye
    }

    function pe(ee, ie, He, ye, be, Ke) {
      return (0, Me.e)(He, Fe), (0, Me.p)(ie, Fe, Je), Re(ee, Je, Fe), fe(ee, ye, be, Je), (0, Me.p)(Fe, Je, Ke), Ke
    }

    function Xe(ee, ie) {
      const He = oe.Xx();
      if (!He || Ue === ie) return ie;
      Ue.updateFlag = ie.updateFlag;
      const ye = He.floatingOriginOffset;
      switch (ee) {
        case "world":
          return Re(ye, ie, Ue);
        case "view":
          return qe(ye, ie, Ue);
        case "worldView":
          return Te(ye, ie, He.getViewMatrix(), Ue);
        case "viewProjection":
          return fe(ye, He.getViewMatrix(), He.getProjectionMatrix(), Ue);
        case "worldViewProjection":
          return pe(ye, ie, He.getTransformMatrix(), He.getViewMatrix(), He.getProjectionMatrix(), Ue);
        default:
          if (ee.startsWith("u_")) {
            const be = ee.toLowerCase();
            if (be.startsWith("u_worldviewprojection")) return pe(ye, ie, He.getTransformMatrix(), He.getViewMatrix(), He.getProjectionMatrix(), Ue);
            if (be.startsWith("u_viewprojection")) return fe(ye, He.getViewMatrix(), He.getProjectionMatrix(), Ue);
            if (be.startsWith("u_worldview")) return Te(ye, ie, He.getViewMatrix(), Ue);
            if (be.startsWith("u_world")) return Re(ye, ie, Ue);
            if (be.startsWith("u_view")) return qe(ye, ie, Ue)
          }
          return ie
      }
    }
    const ze = Ke.b,
      Be = ye.c,
      Ee = ze.prototype._updateMatrixForUniform,
      ge = ye.c.prototype.setMatrix;

    function Oe() {
      ye.c.prototype.setMatrix = ge, Be._setMatrixOverride = void 0, ze.prototype._updateMatrixForUniform = Ee, ze.prototype._updateMatrixForUniformOverride = void 0
    }

    function de() {
      Be.prototype._setMatrixOverride = ge, Be.prototype.setMatrix = function(ee, ie) {
        return this._setMatrixOverride(ee, Xe(ee, ie)), this
      }, ze.prototype._updateMatrixForUniformOverride = Ee, ze.prototype._updateMatrixForUniform = function(ee, ie) {
        this._updateMatrixForUniformOverride(ee, Xe(ee, ie))
      }
    }
  },
  41235: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      g: () => be
    });
    var ye = He(41227);

    function be(ee, ie) {
      ie.WHITEBALANCE && ee.push("whiteBalanceMatrix"), ie.EXPOSURE && ee.push("exposureLinear"), ie.CONTRAST && ee.push("contrast"), ie.COLORGRADING && ee.push("colorTransformSettings"), (ie.VIGNETTE || ie.DITHER) && ee.push("vInverseScreenSize"), ie.VIGNETTE && (ee.push("vignetteSettings1"), ee.push("vignetteSettings2")), ie.COLORCURVES && (0, ye.c)(ee), ie.DITHER && ee.push("ditherIntensity")
    }

    function Me(ee, ie) {
      ie.COLORGRADING && ee.push("txColorTransform")
    }
  },
  41222: (ee, ie, He) => {
    He.d(ie, {
      e: () => De,
      g: () => Ye
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37931),
      Ke = He(38022),
      Ue = He(37938),
      Fe = He(37917);
    const Je = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      oe = 1e6 / Je[Je.length - 1][0],
      Re = 150;

    function ke(ee, ie) {
      const He = Number.isNaN(ee) ? oe : Math.max(ee, oe),
        ye = (0, Ue.Clamp)(1e6 / He, Je[0][0], Je[Je.length - 1][0]);
      let be = 0,
        Me = Je.length - 1;
      for (; Me - be > 1;) {
        const ee = be + Me >> 1;
        Je[ee][0] <= ye ? be = ee : Me = ee
      }
      const Ke = be,
        [ke, qe, fe, Te] = Je[Ke],
        [pe, Xe, ze, Be] = Je[Ke + 1],
        Ee = (ye - ke) / (pe - ke),
        ge = Fe.n.Lerp(new Fe.n(qe, fe), new Fe.n(Xe, ze), Ee),
        Oe = Fe.n.Normalize(new Fe.n(1, Te)),
        de = Fe.n.Normalize(new Fe.n(1, Be)),
        We = Fe.n.Normalize(Fe.n.Lerp(Oe, de, Ee)),
        te = (0, Ue.Clamp)(ie, -150, Re);
      ge.XMe(We.scale(te / 3e3));
      const Ze = 2 * ge.x - 8 * ge.y + 4,
        we = 3 * ge.x / Ze,
        De = 2 * ge.y / Ze;
      return new Fe.p(we / De, 1, (1 - we - De) / De)
    }
    const qe = Fe.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      fe = Fe.b.Invert(qe);

    function Te(ee, ie) {
      const He = ie > 0 ? ee / ie : 10;
      return (0, Ue.Clamp)(He, .1, 10)
    }

    function pe(ee, ie) {
      const He = Fe.p.TransformNormal(ee, qe),
        ye = Fe.p.TransformNormal(ie, qe),
        be = Fe.b.FromArray([Te(ye.x, He.x), 0, 0, 0, 0, Te(ye.y, He.y), 0, 0, 0, 0, Te(ye.z, He.z), 0, 0, 0, 0, 1]);
      return qe.multiply(be).multiply(fe)
    }
    const Xe = new Fe.p(.95047, 1, 1.08883),
      ze = Fe.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(pe(Xe, ke(6500, 0))),
      Be = Fe.b.Invert(ze),
      Ee = Fe.p.TransformNormal(new Fe.p(1, 1, 1), ze);
    var ge = He(41141),
      Oe = He(41227);
    let de = (() => {
      var ee;
      let ie, He, Me, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe = [],
        Xe = [],
        ze = [],
        Be = [],
        Ee = [],
        de = [],
        We = [],
        te = [],
        Ze = [],
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [],
        ve = [],
        ue = [],
        me = [],
        le = [];
      return ee = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Ke.g(0, 0, 0, 0), this._globalCurve = new Ke.g(0, 0, 0, 0), this._highlightsCurve = new Ke.g(0, 0, 0, 0), this._midtonesCurve = new Ke.g(0, 0, 0, 0), this._shadowsCurve = new Ke.g(0, 0, 0, 0), this._positiveCurve = new Ke.g(0, 0, 0, 0), this._negativeCurve = new Ke.g(0, 0, 0, 0), this._globalHue = (0, ye.l)(this, pe, 30), this._globalDensity = ((0, ye.l)(this, Xe), (0, ye.l)(this, ze, 0)), this._globalSaturation = ((0, ye.l)(this, Be), (0, ye.l)(this, Ee, 0)), this._globalExposure = ((0, ye.l)(this, de), (0, ye.l)(this, We, 0)), this._highlightsHue = ((0, ye.l)(this, te), (0, ye.l)(this, Ze, 30)), this._highlightsDensity = ((0, ye.l)(this, we), (0, ye.l)(this, De, 0)), this._highlightsSaturation = ((0, ye.l)(this, Pe), (0, ye.l)(this, Ae, 0)), this._highlightsExposure = ((0, ye.l)(this, Ye), (0, ye.l)(this, Ve, 0)), this._midtonesHue = ((0, ye.l)(this, ae), (0, ye.l)(this, ce, 30)), this._midtonesDensity = ((0, ye.l)(this, xe), (0, ye.l)(this, Le, 0)), this._midtonesSaturation = ((0, ye.l)(this, Ce), (0, ye.l)(this, ve, 0)), this._midtonesExposure = ((0, ye.l)(this, ue), (0, ye.l)(this, me, 0)), this._shadowsHue = ((0, ye.l)(this, le), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(ee) {
          this._globalHue = ee, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(ee) {
          this._globalDensity = ee, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(ee) {
          this._globalSaturation = ee, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(ee) {
          this._globalExposure = ee, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(ee) {
          this._highlightsHue = ee, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(ee) {
          this._highlightsDensity = ee, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(ee) {
          this._highlightsSaturation = ee, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(ee) {
          this._highlightsExposure = ee, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(ee) {
          this._midtonesHue = ee, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(ee) {
          this._midtonesDensity = ee, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(ee) {
          this._midtonesSaturation = ee, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(ee) {
          this._midtonesExposure = ee, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(ee) {
          this._shadowsHue = ee, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(ee) {
          this._shadowsDensity = ee, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(ee) {
          this._shadowsSaturation = ee, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(ee) {
          this._shadowsExposure = ee, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(ie, He, ye, be, Me) {
          null != ie && (ie = ee._Clamp(ie, 0, 360), He = ee._Clamp(He, -100, 100), ye = ee._Clamp(ye, -100, 100), be = ee._Clamp(be, -100, 100), He = ee._ApplyColorGradingSliderNonlinear(He), He *= .5, be = ee._ApplyColorGradingSliderNonlinear(be), He < 0 && (He *= -1, ie = (ie + 180) % 360), ee._FromHSBToRef(ie, He, 50 + .25 * be, Me), Me.scaleToRef(2, Me), Me.a = 1 + .01 * ye)
        }
        static _ApplyColorGradingSliderNonlinear(ee) {
          ee /= 100;
          let ie = Math.abs(ee);
          return ie = Math.pow(ie, 2), ee < 0 && (ie *= -1), ie *= 100, ie
        }
        static _FromHSBToRef(ie, He, ye, be) {
          let Me = ee._Clamp(ie, 0, 360);
          const Ke = ee._Clamp(He / 100, 0, 1),
            Ue = ee._Clamp(ye / 100, 0, 1);
          if (0 === Ke) be.r = Ue, be.g = Ue, be.b = Ue;
          else {
            Me /= 60;
            const ee = Math.floor(Me),
              ie = Me - ee,
              He = Ue * (1 - Ke),
              ye = Ue * (1 - Ke * ie),
              Fe = Ue * (1 - Ke * (1 - ie));
            switch (ee) {
              case 0:
                be.r = Ue, be.g = Fe, be.b = He;
                break;
              case 1:
                be.r = ye, be.g = Ue, be.b = He;
                break;
              case 2:
                be.r = He, be.g = Ue, be.b = Fe;
                break;
              case 3:
                be.r = He, be.g = ye, be.b = Ue;
                break;
              case 4:
                be.r = Fe, be.g = He, be.b = Ue;
                break;
              default:
                be.r = Ue, be.g = He, be.b = ye
            }
          }
          be.a = 1
        }
        static _Clamp(ee, ie, He) {
          return Math.min(Math.max(ee, ie), He)
        }
        clone() {
          return ge.c.Clone((() => new ee), this)
        }
        serialize() {
          return ge.c.Serialize(this)
        }
        _bind(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), ee && (ee.setFloat4(ie, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), ee.setFloat4(He, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), ee.setFloat4(ye, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Ke = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], qe = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: ee => "_globalHue" in ee,
            get: ee => ee._globalHue,
            set: (ee, ie) => {
              ee._globalHue = ie
            }
          },
          metadata: Ke
        }, pe, Xe), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "_globalDensity" in ee,
            get: ee => ee._globalDensity,
            set: (ee, ie) => {
              ee._globalDensity = ie
            }
          },
          metadata: Ke
        }, ze, Be), (0, ye.i)(null, null, Me, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: ee => "_globalSaturation" in ee,
            get: ee => ee._globalSaturation,
            set: (ee, ie) => {
              ee._globalSaturation = ie
            }
          },
          metadata: Ke
        }, Ee, de), (0, ye.i)(null, null, Ue, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: ee => "_globalExposure" in ee,
            get: ee => ee._globalExposure,
            set: (ee, ie) => {
              ee._globalExposure = ie
            }
          },
          metadata: Ke
        }, We, te), (0, ye.i)(null, null, Fe, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: ee => "_highlightsHue" in ee,
            get: ee => ee._highlightsHue,
            set: (ee, ie) => {
              ee._highlightsHue = ie
            }
          },
          metadata: Ke
        }, Ze, we), (0, ye.i)(null, null, Je, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "_highlightsDensity" in ee,
            get: ee => ee._highlightsDensity,
            set: (ee, ie) => {
              ee._highlightsDensity = ie
            }
          },
          metadata: Ke
        }, De, Pe), (0, ye.i)(null, null, oe, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: ee => "_highlightsSaturation" in ee,
            get: ee => ee._highlightsSaturation,
            set: (ee, ie) => {
              ee._highlightsSaturation = ie
            }
          },
          metadata: Ke
        }, Ae, Ye), (0, ye.i)(null, null, Re, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: ee => "_highlightsExposure" in ee,
            get: ee => ee._highlightsExposure,
            set: (ee, ie) => {
              ee._highlightsExposure = ie
            }
          },
          metadata: Ke
        }, Ve, ae), (0, ye.i)(null, null, ke, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: ee => "_midtonesHue" in ee,
            get: ee => ee._midtonesHue,
            set: (ee, ie) => {
              ee._midtonesHue = ie
            }
          },
          metadata: Ke
        }, ce, xe), (0, ye.i)(null, null, qe, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "_midtonesDensity" in ee,
            get: ee => ee._midtonesDensity,
            set: (ee, ie) => {
              ee._midtonesDensity = ie
            }
          },
          metadata: Ke
        }, Le, Ce), (0, ye.i)(null, null, fe, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: ee => "_midtonesSaturation" in ee,
            get: ee => ee._midtonesSaturation,
            set: (ee, ie) => {
              ee._midtonesSaturation = ie
            }
          },
          metadata: Ke
        }, ve, ue), (0, ye.i)(null, null, Te, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: ee => "_midtonesExposure" in ee,
            get: ee => ee._midtonesExposure,
            set: (ee, ie) => {
              ee._midtonesExposure = ie
            }
          },
          metadata: Ke
        }, me, le), Ke && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ke
        })
      })(), ee.PrepareUniforms = Oe.c, ee
    })();

    function We(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      ee._bind(ie, He, ye, be)
    }
    var te = He(41044),
      Ze = He(41235),
      we = He(37949);
    let De = (() => {
        var ee;
        let ie, He, Je, qe, fe, Te, Xe, Oe, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, je, se, Ie, he = [],
          Ne = [],
          Ge = [],
          re = [],
          Qe = [],
          ei = [],
          ii = [],
          Hi = [],
          yi = [],
          bi = [],
          Mi = [],
          Ki = [],
          Ui = [],
          Fi = [],
          Ji = [],
          oi = [],
          Ri = [],
          ki = [],
          qi = [],
          fi = [],
          Ti = [],
          Xi = [],
          zi = [],
          Bi = [],
          Ei = [],
          gi = [],
          Oi = [],
          di = [],
          Wi = [],
          ti = [],
          Zi = [],
          wi = [],
          Di = [],
          Pi = [],
          Ai = [],
          Yi = [],
          Vi = [],
          ai = [],
          ci = [],
          xi = [],
          Li = [],
          Ci = [],
          vi = [],
          ui = [],
          mi = [],
          li = [],
          Si = [],
          ni = [],
          ji = [],
          si = [],
          Ii = [],
          Ni = [],
          Gi = [],
          ri = [],
          Qi = [],
          eH = [];
        return ee = class {
          constructor() {
            this.colorCurves = (0, ye.l)(this, he, new de), this._colorCurvesEnabled = ((0, ye.l)(this, Ne), (0, ye.l)(this, Ge, !1)), this._colorGradingTexture = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, void 0)), this._colorGradingEnabled = ((0, ye.l)(this, ei), (0, ye.l)(this, ii, !1)), this._colorGradingWithGreenDepth = ((0, ye.l)(this, Hi), (0, ye.l)(this, yi, !0)), this._colorGradingBGR = ((0, ye.l)(this, bi), (0, ye.l)(this, Mi, !0)), this._exposure = ((0, ye.l)(this, Ki), (0, ye.l)(this, Ui, 1)), this._toneMappingEnabled = ((0, ye.l)(this, Fi), (0, ye.l)(this, Ji, !1)), this._toneMappingType = ((0, ye.l)(this, oi), (0, ye.l)(this, Ri, ee.TONEMAPPING_STANDARD)), this._contrast = ((0, ye.l)(this, ki), (0, ye.l)(this, qi, 1)), this._whiteBalanceEnabled = ((0, ye.l)(this, fi), (0, ye.l)(this, Ti, !1)), this._temperature = ((0, ye.l)(this, Xi), (0, ye.l)(this, zi, 6500)), this._tint = ((0, ye.l)(this, Bi), (0, ye.l)(this, Ei, 0)), this._whiteBalanceMatrix = ((0, ye.l)(this, gi), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, ye.l)(this, Oi, 0), this.vignetteCenterX = ((0, ye.l)(this, di), (0, ye.l)(this, Wi, 0)), this.vignetteCenterY = ((0, ye.l)(this, ti), (0, ye.l)(this, Zi, 0)), this.vignetteWeight = ((0, ye.l)(this, wi), (0, ye.l)(this, Di, 1.5)), this.vignetteColor = ((0, ye.l)(this, Pi), (0, ye.l)(this, Ai, new Ke.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, ye.l)(this, Yi), (0, ye.l)(this, Vi, .5)), this._vignetteBlendMode = ((0, ye.l)(this, ai), (0, ye.l)(this, ci, ee.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, ye.l)(this, xi), (0, ye.l)(this, Li, !1)), this._ditheringEnabled = ((0, ye.l)(this, Ci), (0, ye.l)(this, vi, !1)), this._ditheringIntensity = ((0, ye.l)(this, ui), (0, ye.l)(this, mi, 1 / 255)), this._skipFinalColorClamp = ((0, ye.l)(this, li), (0, ye.l)(this, Si, !1)), this._applyByPostProcess = ((0, ye.l)(this, ni), (0, ye.l)(this, ji, !1)), this._isEnabled = ((0, ye.l)(this, si), (0, ye.l)(this, Ii, !0)), this.outputTextureWidth = ((0, ye.l)(this, Ni), (0, ye.l)(this, Gi, 0)), this.outputTextureHeight = ((0, ye.l)(this, ri), (0, ye.l)(this, Qi, 0)), this.onUpdateParameters = ((0, ye.l)(this, eH), new Me.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(ee) {
            this._colorCurvesEnabled !== ee && (this._colorCurvesEnabled = ee, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(ee) {
            this._colorGradingTexture !== ee && (this._colorGradingTexture = ee, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(ee) {
            this._colorGradingEnabled !== ee && (this._colorGradingEnabled = ee, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(ee) {
            this._colorGradingWithGreenDepth !== ee && (this._colorGradingWithGreenDepth = ee, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(ee) {
            this._colorGradingBGR !== ee && (this._colorGradingBGR = ee, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(ee) {
            this._exposure !== ee && (this._exposure = ee, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(ee) {
            this._toneMappingEnabled !== ee && (this._toneMappingEnabled = ee, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(ee) {
            this._toneMappingType !== ee && (this._toneMappingType = ee, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(ee) {
            this._contrast !== ee && (this._contrast = ee, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(ee) {
            this._whiteBalanceEnabled !== ee && (this._whiteBalanceEnabled = ee, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(ee) {
            ee = Number.isNaN(ee) ? oe : Math.max(ee, oe), this._temperature !== ee && (this._temperature = ee, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(ee) {
            ee = (0, Ue.Clamp)(ee, -150, Re), this._tint !== ee && (this._tint = ee, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(ee, ie) {
              const He = pe(ke(ee, ie), Ee),
                ye = ze.multiply(He).multiply(Be);
              return Fe.b.GetAsMatrix3x3(ye)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(ee) {
            this.vignetteCenterY = ee
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(ee) {
            this.vignetteCenterX = ee
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(ee) {
            this._vignetteBlendMode !== ee && (this._vignetteBlendMode = ee, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(ee) {
            this._vignetteEnabled !== ee && (this._vignetteEnabled = ee, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(ee) {
            this._ditheringEnabled !== ee && (this._ditheringEnabled = ee, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(ee) {
            this._ditheringIntensity !== ee && (this._ditheringIntensity = ee, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(ee) {
            this._skipFinalColorClamp !== ee && (this._skipFinalColorClamp = ee, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(ee) {
            this._applyByPostProcess !== ee && (this._applyByPostProcess = ee, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(ee) {
            this._isEnabled !== ee && (this._isEnabled = ee, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(ie) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return ie.WHITEBALANCE = !1, ie.VIGNETTE = !1, ie.TONEMAPPING = 0, ie.CONTRAST = !1, ie.EXPOSURE = !1, ie.COLORCURVES = !1, ie.COLORGRADING = !1, ie.COLORGRADING3D = !1, ie.DITHER = !1, ie.IMAGEPROCESSING = !1, ie.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(ie.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (ie.WHITEBALANCE = this._whiteBalanceEnabled, ie.VIGNETTE = this.vignetteEnabled, ie.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === ee._VIGNETTEMODE_MULTIPLY, ie.VIGNETTEBLENDMODEOPAQUE = !ie.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case ee.TONEMAPPING_KHR_PBR_NEUTRAL:
                ie.TONEMAPPING = 3;
                break;
              case ee.TONEMAPPING_ACES:
                ie.TONEMAPPING = 2;
                break;
              default:
                ie.TONEMAPPING = 1
            } else ie.TONEMAPPING = 0;
            ie.CONTRAST = 1 !== this.contrast, ie.EXPOSURE = 1 !== this.exposure, ie.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, ie.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, ie.COLORGRADING ? ie.COLORGRADING3D = this.colorGradingTexture.is3D : ie.COLORGRADING3D = !1, ie.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, ie.SAMPLER3DBGRMAP = this.colorGradingBGR, ie.DITHER = this._ditheringEnabled, ie.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, ie.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, ie.IMAGEPROCESSING = ie.WHITEBALANCE || ie.VIGNETTE || !!ie.TONEMAPPING || ie.CONTRAST || ie.EXPOSURE || ie.COLORCURVES || ie.COLORGRADING || ie.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(ee, ie) {
            if (this._whiteBalanceEnabled && ee.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && We(this.colorCurves, ee), this._vignetteEnabled || this._ditheringEnabled) {
              const He = 1 / (this.outputTextureWidth || ee.Nf().getRenderWidth()),
                ye = 1 / (this.outputTextureHeight || ee.Nf().getRenderHeight());
              if (ee.setFloat2("vInverseScreenSize", He, ye), this._ditheringEnabled && ee.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const be = null != ie ? ie : ye / He;
                let Me = Math.tan(.5 * this.vignetteCameraFov),
                  Ke = Me * be;
                const Ue = Math.sqrt(Ke * Me);
                Ke = (0, te.m)(Ke, Ue, this.vignetteStretch), Me = (0, te.m)(Me, Ue, this.vignetteStretch), ee.setFloat4("vignetteSettings1", Ke, Me, -Ke * this.vignetteCenterX, -Me * this.vignetteCenterY);
                const Fe = -2 * this.vignetteWeight;
                ee.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Fe)
              }
            }
            if (ee.setFloat("exposureLinear", this.exposure), ee.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              ee.setTexture("txColorTransform", this.colorGradingTexture);
              const ie = this.colorGradingTexture.getSize().height;
              ee.setFloat4("colorTransformSettings", (ie - 1) / ie, .5 / ie, ie, this.colorGradingTexture.level)
            }
          }
          clone() {
            return ge.c.Clone((() => new ee), this)
          }
          serialize() {
            return ge.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ie = [(0, be.l)()], He = [(0, be.R)()], Je = [(0, be.H)("colorGradingTexture")], qe = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], Xe = [(0, be.R)()], Oe = [(0, be.R)()], we = [(0, be.R)()], De = [(0, be.R)()], Pe = [(0, be.R)()], Ae = [(0, be.R)()], Ye = [(0, be.R)()], Ve = [(0, be.R)()], ae = [(0, be.R)()], ce = [(0, be.R)()], xe = [(0, be.R)()], Le = [(0, be.t)()], Ce = [(0, be.R)()], ve = [(0, be.R)()], ue = [(0, be.R)()], me = [(0, be.R)()], le = [(0, be.R)()], Se = [(0, be.R)()], ne = [(0, be.R)()], je = [(0, be.R)()], se = [(0, be.R)()], Ie = [(0, be.R)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: ee => "colorCurves" in ee,
              get: ee => ee.colorCurves,
              set: (ee, ie) => {
                ee.colorCurves = ie
              }
            },
            metadata: Me
          }, he, Ne), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: ee => "_colorCurvesEnabled" in ee,
              get: ee => ee._colorCurvesEnabled,
              set: (ee, ie) => {
                ee._colorCurvesEnabled = ie
              }
            },
            metadata: Me
          }, Ge, re), (0, ye.i)(null, null, Je, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_colorGradingTexture" in ee,
              get: ee => ee._colorGradingTexture,
              set: (ee, ie) => {
                ee._colorGradingTexture = ie
              }
            },
            metadata: Me
          }, Qe, ei), (0, ye.i)(null, null, qe, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: ee => "_colorGradingEnabled" in ee,
              get: ee => ee._colorGradingEnabled,
              set: (ee, ie) => {
                ee._colorGradingEnabled = ie
              }
            },
            metadata: Me
          }, ii, Hi), (0, ye.i)(null, null, fe, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: ee => "_colorGradingWithGreenDepth" in ee,
              get: ee => ee._colorGradingWithGreenDepth,
              set: (ee, ie) => {
                ee._colorGradingWithGreenDepth = ie
              }
            },
            metadata: Me
          }, yi, bi), (0, ye.i)(null, null, Te, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: ee => "_colorGradingBGR" in ee,
              get: ee => ee._colorGradingBGR,
              set: (ee, ie) => {
                ee._colorGradingBGR = ie
              }
            },
            metadata: Me
          }, Mi, Ki), (0, ye.i)(null, null, Xe, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: ee => "_exposure" in ee,
              get: ee => ee._exposure,
              set: (ee, ie) => {
                ee._exposure = ie
              }
            },
            metadata: Me
          }, Ui, Fi), (0, ye.i)(null, null, Oe, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: ee => "_toneMappingEnabled" in ee,
              get: ee => ee._toneMappingEnabled,
              set: (ee, ie) => {
                ee._toneMappingEnabled = ie
              }
            },
            metadata: Me
          }, Ji, oi), (0, ye.i)(null, null, we, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: ee => "_toneMappingType" in ee,
              get: ee => ee._toneMappingType,
              set: (ee, ie) => {
                ee._toneMappingType = ie
              }
            },
            metadata: Me
          }, Ri, ki), (0, ye.i)(null, null, De, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: ee => "_contrast" in ee,
              get: ee => ee._contrast,
              set: (ee, ie) => {
                ee._contrast = ie
              }
            },
            metadata: Me
          }, qi, fi), (0, ye.i)(null, null, Pe, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: ee => "_whiteBalanceEnabled" in ee,
              get: ee => ee._whiteBalanceEnabled,
              set: (ee, ie) => {
                ee._whiteBalanceEnabled = ie
              }
            },
            metadata: Me
          }, Ti, Xi), (0, ye.i)(null, null, Ae, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: ee => "_temperature" in ee,
              get: ee => ee._temperature,
              set: (ee, ie) => {
                ee._temperature = ie
              }
            },
            metadata: Me
          }, zi, Bi), (0, ye.i)(null, null, Ye, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: ee => "_tint" in ee,
              get: ee => ee._tint,
              set: (ee, ie) => {
                ee._tint = ie
              }
            },
            metadata: Me
          }, Ei, gi), (0, ye.i)(null, null, Ve, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: ee => "vignetteStretch" in ee,
              get: ee => ee.vignetteStretch,
              set: (ee, ie) => {
                ee.vignetteStretch = ie
              }
            },
            metadata: Me
          }, Oi, di), (0, ye.i)(null, null, ae, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: ee => "vignetteCenterX" in ee,
              get: ee => ee.vignetteCenterX,
              set: (ee, ie) => {
                ee.vignetteCenterX = ie
              }
            },
            metadata: Me
          }, Wi, ti), (0, ye.i)(null, null, ce, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: ee => "vignetteCenterY" in ee,
              get: ee => ee.vignetteCenterY,
              set: (ee, ie) => {
                ee.vignetteCenterY = ie
              }
            },
            metadata: Me
          }, Zi, wi), (0, ye.i)(null, null, xe, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "vignetteWeight" in ee,
              get: ee => ee.vignetteWeight,
              set: (ee, ie) => {
                ee.vignetteWeight = ie
              }
            },
            metadata: Me
          }, Di, Pi), (0, ye.i)(null, null, Le, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "vignetteColor" in ee,
              get: ee => ee.vignetteColor,
              set: (ee, ie) => {
                ee.vignetteColor = ie
              }
            },
            metadata: Me
          }, Ai, Yi), (0, ye.i)(null, null, Ce, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: ee => "vignetteCameraFov" in ee,
              get: ee => ee.vignetteCameraFov,
              set: (ee, ie) => {
                ee.vignetteCameraFov = ie
              }
            },
            metadata: Me
          }, Vi, ai), (0, ye.i)(null, null, ve, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "_vignetteBlendMode" in ee,
              get: ee => ee._vignetteBlendMode,
              set: (ee, ie) => {
                ee._vignetteBlendMode = ie
              }
            },
            metadata: Me
          }, ci, xi), (0, ye.i)(null, null, ue, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: ee => "_vignetteEnabled" in ee,
              get: ee => ee._vignetteEnabled,
              set: (ee, ie) => {
                ee._vignetteEnabled = ie
              }
            },
            metadata: Me
          }, Li, Ci), (0, ye.i)(null, null, me, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: ee => "_ditheringEnabled" in ee,
              get: ee => ee._ditheringEnabled,
              set: (ee, ie) => {
                ee._ditheringEnabled = ie
              }
            },
            metadata: Me
          }, vi, ui), (0, ye.i)(null, null, le, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: ee => "_ditheringIntensity" in ee,
              get: ee => ee._ditheringIntensity,
              set: (ee, ie) => {
                ee._ditheringIntensity = ie
              }
            },
            metadata: Me
          }, mi, li), (0, ye.i)(null, null, Se, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: ee => "_skipFinalColorClamp" in ee,
              get: ee => ee._skipFinalColorClamp,
              set: (ee, ie) => {
                ee._skipFinalColorClamp = ie
              }
            },
            metadata: Me
          }, Si, ni), (0, ye.i)(null, null, ne, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: ee => "_applyByPostProcess" in ee,
              get: ee => ee._applyByPostProcess,
              set: (ee, ie) => {
                ee._applyByPostProcess = ie
              }
            },
            metadata: Me
          }, ji, si), (0, ye.i)(null, null, je, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: ee => "_isEnabled" in ee,
              get: ee => ee._isEnabled,
              set: (ee, ie) => {
                ee._isEnabled = ie
              }
            },
            metadata: Me
          }, Ii, Ni), (0, ye.i)(null, null, se, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: ee => "outputTextureWidth" in ee,
              get: ee => ee.outputTextureWidth,
              set: (ee, ie) => {
                ee.outputTextureWidth = ie
              }
            },
            metadata: Me
          }, Gi, ri), (0, ye.i)(null, null, Ie, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "outputTextureHeight" in ee,
              get: ee => ee.outputTextureHeight,
              set: (ee, ie) => {
                ee.outputTextureHeight = ie
              }
            },
            metadata: Me
          }, Qi, eH), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee.TONEMAPPING_STANDARD = 0, ee.TONEMAPPING_ACES = 1, ee.TONEMAPPING_KHR_PBR_NEUTRAL = 2, ee.PrepareUniforms = Ze.g, ee.PrepareSamplers = Ze.d, ee._VIGNETTEMODE_MULTIPLY = 0, ee._VIGNETTEMODE_OPAQUE = 1, ee
      })(),
      Pe = !1;

    function Ae(ee) {
      const ie = ge.c.Parse((() => new De), ee, null, null);
      return void 0 !== ee.vignetteCentreX && (ie.vignetteCenterX = ee.vignetteCentreX), void 0 !== ee.vignetteCentreY && (ie.vignetteCenterY = ee.vignetteCentreY), ie
    }

    function Ye() {
      Pe || (Pe = !0, De.Parse = Ae, ge.c._ImageProcessingConfigurationParser = Ae, (0, we.e)("BABYLON.ImageProcessingConfiguration", De))
    }
  },
  41238: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(39467),
      be = He(41203);
    class Me {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Me = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = ee, this._noUBO = !ee.supportsUniformBuffers || be, this._dynamic = He, this._name = ye ?? "no-name", this._data = ie || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Me && this._engine._features.trackUbosInFrame || !0 === Me) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.oie = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.oie = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(ee) {
        let ie;
        if (ie = ee <= 2 ? ee : 4, this._uniformLocationPointer % ie !== 0) {
          const ee = this._uniformLocationPointer;
          this._uniformLocationPointer += ie - this._uniformLocationPointer % ie;
          const He = this._uniformLocationPointer - ee;
          for (let ie = 0; ie < He; ie++) this._data.push(0)
        }
      }
      addUniform(ee, ie) {
        let He, ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (ye > 0 && "number" === typeof ie && (this._uniformArraySizes[ee] = {
            strideSize: ie,
            arraySize: ye
          }), void 0 === this._uniformLocations[ee] && (this._uniformNames.push(ee), !this._noUBO)) {
          if (ye > 0) {
            if (ie instanceof Array) throw "addUniform should not be use with Array in UBO: " + ee;
            if (this._fillAlignment(4), 16 == ie) ie *= ye;
            else {
              ie = ie * ye + (4 - ie) * ye
            }
            He = [];
            for (let ee = 0; ee < ie; ee++) He.push(0)
          } else {
            if (ie instanceof Array) He = ie, ie = He.length;
            else {
              He = [];
              for (let ee = 0; ee < ie; ee++) He.push(0)
            }
            this._fillAlignment(ie)
          }
          this._uniformSizes[ee] = ie, this._uniformLocations[ee] = this._uniformLocationPointer, this._uniformLocationPointer += ie;
          for (let ee = 0; ee < ie; ee++) this._data.push(He[ee]);
          this._needSync = !0
        }
      }
      addMatrix(ee, ie) {
        this.addUniform(ee, Array.prototype.slice.call(ie.Qbe()))
      }
      addFloat2(ee, ie, He) {
        const ye = [ie, He];
        this.addUniform(ee, ye)
      }
      addFloat3(ee, ie, He, ye) {
        const be = [ie, He, ye];
        this.addUniform(ee, be)
      }
      addColor3(ee, ie) {
        const He = [ie.r, ie.g, ie.b];
        this.addUniform(ee, He)
      }
      addColor4(ee, ie, He) {
        const ye = [ie.r, ie.g, ie.b, He];
        this.addUniform(ee, ye)
      }
      addVector3(ee, ie) {
        const He = [ie.x, ie.y, ie.z];
        this.addUniform(ee, He)
      }
      addMatrix3x3(ee) {
        this.addUniform(ee, 12)
      }
      addMatrix2x2(ee) {
        this.addUniform(ee, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const ee = [];
        let ie = 0;
        for (const He in this._uniformLocations)
          if (ee.push(He), 10 === ++ie) break;
        return ee.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const ee of this._ownerListsBySlot.values()) this._removeOwnerBacklink(ee);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(ee) {
        this._name = ee
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(ee, ie) {
        for (let He = 0; He < ee.length; ++He)
          if (ee[He] !== ie[He]) return !1;
        return !0
      }
      _copyBuffer(ee, ie) {
        for (let He = 0; He < ee.length; ++He) ie[He] = ee[He]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(ee) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let ie = this._slotByOwner.get(ee);
        if (void 0 === ie && (ie = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(ee, ie), this._ownerCount++, ee._uniformBuffersWithOwnedSlot || (ee._uniformBuffersWithOwnedSlot = []), ee._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(ie, ee._uniformBuffersWithOwnedSlot)), this._slotGeneration[ie] === this._dataGeneration) return this._bufferIndex = ie, this._buffer = this._buffers[ie][0], this.bindUniformBuffer(), this._slotFrameId[ie] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const He = this._buffers[ie][1];
        this._slotFrameId[ie] === this._currentFrameId && He && !this._buffersEqual(this._bufferData, He) && (ie = this._takeFreeSlot(!1)), this._bufferIndex = ie, this._buffer = this._buffers[ie][0], this.bindUniformBuffer();
        const ye = this._buffers[ie][1];
        ye && this._buffersEqual(this._bufferData, ye) || (ye && this._copyBuffer(this._bufferData, ye), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[ie] = this._currentFrameId, this._slotGeneration[ie] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(ee) {
        for (let He = 0; He < this._freeSlots.length; ++He) {
          const ie = this._freeSlots[He];
          if (this._slotFrameId[ie] !== this._currentFrameId) return ee && (this._freeSlots[He] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), ie
        }
        this._rebuild();
        const ie = this._buffers.length - 1;
        return ee || this._freeSlots.push(ie), ie
      }
      _releaseOwnerSlot(ee) {
        const ie = this._slotByOwner?.get(ee);
        if (void 0 === ie) return;
        this._slotByOwner.delete(ee);
        const He = this._ownerListsBySlot.get(ie);
        He && (this._removeOwnerBacklink(He), this._ownerListsBySlot.delete(ie)), this._ownerCount--, this._freeSlots.push(ie)
      }
      _removeOwnerBacklink(ee) {
        const ie = ee.indexOf(this); - 1 !== ie && (ee[ie] = ee[ee.length - 1], ee.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(ee, ie, He) {
        this._checkNewFrame();
        let be = this._uniformLocations[ee];
        if (void 0 === be) {
          if (this._buffer) return void ye.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + ee);
          this.addUniform(ee, He), be = this._uniformLocations[ee]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let ee = 0; ee < He; ee++) this._bufferData[be + ee] = ie[ee];
          this._dataGeneration++
        } else {
          let ee = !1;
          for (let ye = 0; ye < He; ye++)(16 === He && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[be + ye] !== Math.fround(ie[ye])) && (ee = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[be + ye] = ie[ye]);
          this._needSync = this._needSync || ee, ee && this._dataGeneration++
        }
      }
      updateUniformArray(ee, ie, He) {
        this._checkNewFrame();
        const Me = this._uniformLocations[ee];
        if (void 0 === Me) return void ye.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Ke = this._uniformArraySizes[ee];
        if (this._dynamic) {
          for (let ee = 0; ee < He; ee++) this._bufferData[Me + ee] = ie[ee];
          this._dataGeneration++
        } else {
          let ee = !1,
            ye = 0,
            Ue = 0;
          for (let Fe = 0; Fe < He; Fe++)
            if (this._bufferData[Me + 4 * Ue + ye] !== be.h.FloatRound(ie[Fe]) && (ee = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Me + 4 * Ue + ye] = ie[Fe]), ye++, ye === Ke.strideSize) {
              for (; ye < 4; ye++) this._bufferData[Me + 4 * Ue + ye] = 0;
              ye = 0, Ue++
            } this._needSync = this._needSync || ee, ee && this._dataGeneration++
        }
      }
      _cacheMatrix(ee, ie) {
        this._checkNewFrame();
        const He = this._valueCache[ee],
          ye = ie.updateFlag;
        return (void 0 === He || He !== ye) && (this._valueCache[ee] = ye, !0)
      }
      _updateMatrix3x3ForUniform(ee, ie) {
        for (let He = 0; He < 3; He++) Me._TempBuffer[4 * He] = ie[3 * He], Me._TempBuffer[4 * He + 1] = ie[3 * He + 1], Me._TempBuffer[4 * He + 2] = ie[3 * He + 2], Me._TempBuffer[4 * He + 3] = 0;
        this.updateUniform(ee, Me._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(ee, ie) {
        this._currentEffect.setMatrix3x3(ee, ie)
      }
      _updateMatrix2x2ForEffect(ee, ie) {
        this._currentEffect.setMatrix2x2(ee, ie)
      }
      _updateMatrix2x2ForUniform(ee, ie) {
        for (let He = 0; He < 2; He++) Me._TempBuffer[4 * He] = ie[2 * He], Me._TempBuffer[4 * He + 1] = ie[2 * He + 1], Me._TempBuffer[4 * He + 2] = 0, Me._TempBuffer[4 * He + 3] = 0;
        this.updateUniform(ee, Me._TempBuffer, 8)
      }
      _updateFloatForEffect(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(ee + He, ie)
      }
      _updateFloatForUniform(ee, ie) {
        Me._TempBuffer[0] = ie, this.updateUniform(ee, Me._TempBuffer, 1)
      }
      _updateFloat2ForEffect(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(ee + ye, ie, He)
      }
      _updateFloat2ForUniform(ee, ie, He) {
        Me._TempBuffer[0] = ie, Me._TempBuffer[1] = He, this.updateUniform(ee, Me._TempBuffer, 2)
      }
      _updateFloat3ForEffect(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(ee + be, ie, He, ye)
      }
      _updateFloat3ForUniform(ee, ie, He, ye) {
        Me._TempBuffer[0] = ie, Me._TempBuffer[1] = He, Me._TempBuffer[2] = ye, this.updateUniform(ee, Me._TempBuffer, 3)
      }
      _updateFloat4ForEffect(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(ee + Me, ie, He, ye, be)
      }
      _updateFloat4ForUniform(ee, ie, He, ye, be) {
        Me._TempBuffer[0] = ie, Me._TempBuffer[1] = He, Me._TempBuffer[2] = ye, Me._TempBuffer[3] = be, this.updateUniform(ee, Me._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[ee]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(ee + He, ie);
            break;
          case 3:
            this._currentEffect.setFloatArray3(ee + He, ie);
            break;
          case 4:
            this._currentEffect.setFloatArray4(ee + He, ie);
            break;
          default:
            this._currentEffect.setFloatArray(ee + He, ie)
        }
      }
      _updateFloatArrayForUniform(ee, ie) {
        this.updateUniformArray(ee, ie, ie.length)
      }
      _updateArrayForEffect(ee, ie) {
        this._currentEffect.setArray(ee, ie)
      }
      _updateArrayForUniform(ee, ie) {
        this.updateUniformArray(ee, ie, ie.length)
      }
      _updateIntArrayForEffect(ee, ie) {
        this._currentEffect.setIntArray(ee, ie)
      }
      _updateIntArrayForUniform(ee, ie) {
        Me._TempBufferInt32View.set(ie), this.updateUniformArray(ee, Me._TempBuffer, ie.length)
      }
      _updateUIntArrayForEffect(ee, ie) {
        this._currentEffect.setUIntArray(ee, ie)
      }
      _updateUIntArrayForUniform(ee, ie) {
        Me._TempBufferUInt32View.set(ie), this.updateUniformArray(ee, Me._TempBuffer, ie.length)
      }
      _updateMatrixForEffect(ee, ie) {
        this._currentEffect.setMatrix(ee, ie)
      }
      _updateMatrixForUniform(ee, ie) {
        this._cacheMatrix(ee, ie) && this.updateUniform(ee, ie.Qbe(), 16)
      }
      _updateMatricesForEffect(ee, ie) {
        this._currentEffect.setMatrices(ee, ie)
      }
      _updateMatricesForUniform(ee, ie) {
        this.updateUniform(ee, ie, ie.length)
      }
      _updateVector3ForEffect(ee, ie) {
        this._currentEffect.setVector3(ee, ie)
      }
      _updateVector3ForUniform(ee, ie) {
        Me._TempBuffer[0] = ie.x, Me._TempBuffer[1] = ie.y, Me._TempBuffer[2] = ie.z, this.updateUniform(ee, Me._TempBuffer, 3)
      }
      _updateVector4ForEffect(ee, ie) {
        this._currentEffect.setVector4(ee, ie)
      }
      _updateVector4ForUniform(ee, ie) {
        Me._TempBuffer[0] = ie.x, Me._TempBuffer[1] = ie.y, Me._TempBuffer[2] = ie.z, Me._TempBuffer[3] = ie.w, this.updateUniform(ee, Me._TempBuffer, 4)
      }
      _updateColor3ForEffect(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(ee + He, ie)
      }
      _updateColor3ForUniform(ee, ie) {
        Me._TempBuffer[0] = ie.r, Me._TempBuffer[1] = ie.g, Me._TempBuffer[2] = ie.b, this.updateUniform(ee, Me._TempBuffer, 3)
      }
      _updateColor4ForEffect(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(ee + ye, ie, He)
      }
      _updateDirectColor4ForEffect(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(ee + He, ie)
      }
      _updateColor4ForUniform(ee, ie, He) {
        Me._TempBuffer[0] = ie.r, Me._TempBuffer[1] = ie.g, Me._TempBuffer[2] = ie.b, Me._TempBuffer[3] = He, this.updateUniform(ee, Me._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(ee, ie) {
        Me._TempBuffer[0] = ie.r, Me._TempBuffer[1] = ie.g, Me._TempBuffer[2] = ie.b, Me._TempBuffer[3] = ie.a, this.updateUniform(ee, Me._TempBuffer, 4)
      }
      _updateIntForEffect(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(ee + He, ie)
      }
      _updateIntForUniform(ee, ie) {
        Me._TempBufferInt32View[0] = ie, this.updateUniform(ee, Me._TempBuffer, 1)
      }
      _updateInt2ForEffect(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(ee + ye, ie, He)
      }
      _updateInt2ForUniform(ee, ie, He) {
        Me._TempBufferInt32View[0] = ie, Me._TempBufferInt32View[1] = He, this.updateUniform(ee, Me._TempBuffer, 2)
      }
      _updateInt3ForEffect(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(ee + be, ie, He, ye)
      }
      _updateInt3ForUniform(ee, ie, He, ye) {
        Me._TempBufferInt32View[0] = ie, Me._TempBufferInt32View[1] = He, Me._TempBufferInt32View[2] = ye, this.updateUniform(ee, Me._TempBuffer, 3)
      }
      _updateInt4ForEffect(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(ee + Me, ie, He, ye, be)
      }
      _updateInt4ForUniform(ee, ie, He, ye, be) {
        Me._TempBufferInt32View[0] = ie, Me._TempBufferInt32View[1] = He, Me._TempBufferInt32View[2] = ye, Me._TempBufferInt32View[3] = be, this.updateUniform(ee, Me._TempBuffer, 4)
      }
      _updateUIntForEffect(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(ee + He, ie)
      }
      _updateUIntForUniform(ee, ie) {
        Me._TempBufferUInt32View[0] = ie, this.updateUniform(ee, Me._TempBuffer, 1)
      }
      _updateUInt2ForEffect(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(ee + ye, ie, He)
      }
      _updateUInt2ForUniform(ee, ie, He) {
        Me._TempBufferUInt32View[0] = ie, Me._TempBufferUInt32View[1] = He, this.updateUniform(ee, Me._TempBuffer, 2)
      }
      _updateUInt3ForEffect(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(ee + be, ie, He, ye)
      }
      _updateUInt3ForUniform(ee, ie, He, ye) {
        Me._TempBufferUInt32View[0] = ie, Me._TempBufferUInt32View[1] = He, Me._TempBufferUInt32View[2] = ye, this.updateUniform(ee, Me._TempBuffer, 3)
      }
      _updateUInt4ForEffect(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(ee + Me, ie, He, ye, be)
      }
      _updateUInt4ForUniform(ee, ie, He, ye, be) {
        Me._TempBufferUInt32View[0] = ie, Me._TempBufferUInt32View[1] = He, Me._TempBufferUInt32View[2] = ye, Me._TempBufferUInt32View[3] = be, this.updateUniform(ee, Me._TempBuffer, 4)
      }
      setTexture(ee, ie) {
        this._currentEffect.setTexture(ee, ie)
      }
      setTextureArray(ee, ie) {
        this._currentEffect.setTextureArray(ee, ie)
      }
      bindTexture(ee, ie) {
        this._currentEffect._bindTexture(ee, ie)
      }
      updateUniformDirectly(ee, ie) {
        this.updateUniform(ee, ie, ie.length), this.update()
      }
      bindToEffect(ee, ie) {
        this._currentEffect = ee, this._currentEffectName = ie
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(ee) {
        if (!this._buffers) return this._buffer === ee;
        for (let ie = 0; ie < this._buffers.length; ++ie) {
          if (this._buffers[ie][0] === ee) return this._bufferIndex = ie, this._buffer = ee, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[ie][1] && (this._bufferData.set(this._buffers[ie][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(ee) {
        return void 0 !== this._uniformLocations[ee]
      }
      dispose() {
        if (this._noUBO) return;
        const ee = this._engine._uniformBuffers,
          ie = ee.indexOf(this);
        if (-1 !== ie && (ee[ie] = ee[ee.length - 1], ee.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let ee = 0; ee < this._buffers.length; ++ee) {
            const ie = this._buffers[ee][0];
            this._engine._releaseBuffer(ie)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Me._MAX_UNIFORM_SIZE = 256, Me._TempBuffer = new Float32Array(Me._MAX_UNIFORM_SIZE), Me._TempBufferInt32View = new Int32Array(Me._TempBuffer.buffer), Me._TempBufferUInt32View = new Uint32Array(Me._TempBuffer.buffer)
  },
  41030: (ee, ie, He) => {
    He.d(ie, {
      d: () => be
    });
    var ye = He(41036);
    class be extends ye.c {
      constructor(ee) {
        super(), this._buffer = ee
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41129: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe,
      c: () => Je
    });
    const ye = "__bjs_serializable__",
      be = new WeakMap;

    function Me(ee, ie) {
      return Object.prototype.hasOwnProperty.call(ee, ie)
    }
    const Ke = function() {
      let ee = Symbol.metadata;
      return ee || (ee = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: ee
      })), ee
    }();

    function Ue(ee) {
      return "function" === typeof ee ? ee : ee?.constructor
    }

    function Fe(ee) {
      if (!ee) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Ke)}) polyfill must run before decorated classes are evaluated.`);
      return Me(ee, ye) || (ee[ye] = {}), ee[ye]
    }

    function Je(ee) {
      const ie = Ue(ee),
        He = ie ? ie[Ke] : void 0;
      if (!He) return {};
      const Fe = be.get(He);
      if (Fe) return Fe;
      const Je = {},
        oe = [];
      let Re = He;
      for (; Re;) oe.push(Re), Re = Object.getPrototypeOf(Re);
      for (const be of oe)
        if (Me(be, ye)) {
          const ee = be[ye];
          for (const ie in ee) Je[ie] = ee[ie]
        } return be.set(He, Je), Je
    }
  },
  41121: (ee, ie, He) => {
    He.d(ie, {
      C: () => ke,
      F: () => Te,
      H: () => Ue,
      L: () => oe,
      P: () => Re,
      R: () => Ke,
      c: () => Be,
      d: () => Me,
      h: () => ze,
      l: () => qe,
      p: () => Fe,
      t: () => fe,
      w: () => Je,
      z: () => pe
    });
    var ye = He(41129);

    function be(ee, ie) {
      return (He, be) => {
        if (!be.metadata) return;
        const Me = String(be.name),
          Ke = (0, ye.b)(be.metadata);
        Ke[Me] || (Ke[Me] = {
          type: ee,
          sourceName: ie
        })
      }
    }

    function Me(ee) {
      return function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (He, ye) => {
          const be = ie || "_" + String(ye.name);
          return {
            init(ee) {
              return void 0 === ee && be in this || (this[be] = ee), ee
            },
            get() {
              return this[be]
            },
            set(ie) {
              "function" === typeof this[be]?.equals && this[be].equals(ie) || this[be] !== ie && (this[be] = ie, this[ee]())
            }
          }
        }
      }(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Ke(ee) {
      return be(0, ee)
    }

    function Ue(ee) {
      return be(1, ee)
    }

    function Fe(ee) {
      return be(2, ee)
    }

    function Je(ee) {
      return be(3, ee)
    }

    function oe(ee) {
      return be(4, ee)
    }

    function Re(ee) {
      return be(5, ee)
    }

    function ke(ee) {
      return be(6, ee)
    }

    function qe(ee) {
      return be(7, ee)
    }

    function fe(ee) {
      return be(8, ee)
    }

    function Te(ee) {
      return be(10, ee)
    }

    function pe(ee) {
      return be(12, ee)
    }

    function Xe(ee, ie, He) {
      const ye = String(ie.name);
      let be = null;
      const Me = function() {
        if (null === be) {
          be = ee, "undefined" !== typeof _native && _native[ye] && (be = He(_native[ye], ee));
          const Ke = this && (ie.static ? this : Object.getPrototypeOf(this));
          Ke?.[ye] === Me && (Ke[ye] = be)
        }
        for (var Ke = arguments.length, Ue = new Array(Ke), Fe = 0; Fe < Ke; Fe++) Ue[Fe] = arguments[Fe];
        return be.apply(this, Ue)
      };
      return Me
    }

    function ze(ee, ie) {
      return Xe(ee, ie, (ee => ee))
    }

    function Be(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (He, ye) => {
        const be = ie || "_" + String(ye.name);
        return {
          get() {
            return this[be]?.value
          },
          set(ie) {
            "function" === typeof this[be]?.value?.equals && this[be].value.equals(ie) || this[be].value !== ie && (this[be].value = ie, this[ee]())
          }
        }
      }
    }
    ze.filter = function(ee) {
      return (ie, He) => Xe(ie, He, ((ie, He) => function() {
        for (var ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
        return ee(...be) ? ie(...be) : He.apply(this, be)
      }))
    }
  },
  41141: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je
    });
    var ye = He(40985),
      be = He(41144),
      Me = He(38022),
      Ke = He(37917),
      Ue = He(41129);
    const Fe = function(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Me = ee();
      be.b && be.b.HasTags(ie) && be.b.AddTagsTo(Me, be.b.GetTags(ie, !0));
      const Ke = (0, Ue.c)(Me),
        Fe = {};
      for (const be in Ke) {
        const ee = Ke[be],
          Ue = ie[be],
          oe = ee.type;
        if (void 0 !== Ue && null !== Ue && ("uniqueId" !== be || Je.AllowLoadingUniqueId)) switch (oe) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Ue.slice ? Me[be] = Ue.slice() : Me[be] = Ue;
            break;
          case 1:
            ye.cloneTexturesOnlyOnce && Fe[Ue.uniqueId] ? Me[be] = Fe[Ue.uniqueId] : (Me[be] = He || Ue.isRenderTarget ? Ue : Ue.clone(), Fe[Ue.uniqueId] = Me[be]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            Me[be] = He ? Ue : Ue.clone()
        }
      }
      return Me
    };
    class Je {
      static AppendSerializedAnimations(ee, ie) {
        if (ee.animations) {
          ie.animations = [];
          for (let He = 0; He < ee.animations.length; He++) {
            const ye = ee.animations[He];
            ie.animations.push(ye.serialize())
          }
        }
      }
      static Serialize(ee, ie) {
        ie || (ie = {}), be.b && (ie.tags = be.b.GetTags(ee));
        const He = (0, Ue.c)(ee);
        for (const ye in He) {
          const be = He[ye],
            Me = be.sourceName || ye,
            Ke = be.type,
            Ue = ee[ye];
          if (void 0 !== Ue && null !== Ue && ("uniqueId" !== ye || Je.AllowLoadingUniqueId)) switch (Ke) {
            case 0:
              Array.isArray(Ue) ? ie[Me] = Ue.slice() : ie[Me] = Ue;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              ie[Me] = Ue.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              ie[Me] = Ue.Qbe();
              break;
            case 6:
            case 11:
              ie[Me] = Ue.id
          }
        }
        return ie
      }
      static ParseProperties(ee, ie, He, ye) {
        ye || (ye = "");
        const be = (0, Ue.c)(ie);
        for (const Ue in be) {
          const Fe = be[Ue],
            oe = ee[Fe.sourceName || Ue],
            Re = Fe.type;
          if (void 0 !== oe && null !== oe && ("uniqueId" !== Ue || Je.AllowLoadingUniqueId)) {
            const ee = ie;
            switch (Re) {
              case 0:
                ee[Ue] = oe;
                break;
              case 1:
                He && (ee[Ue] = Je._TextureParser(oe, He, ye));
                break;
              case 2:
                ee[Ue] = Me.c.FromArray(oe);
                break;
              case 3:
                ee[Ue] = Je._FresnelParametersParser(oe);
                break;
              case 4:
                ee[Ue] = Ke.n.FromArray(oe);
                break;
              case 5:
                ee[Ue] = Ke.p.FromArray(oe);
                break;
              case 6:
                He && (ee[Ue] = He.getLastMeshById(oe));
                break;
              case 7:
                ee[Ue] = Je._ColorCurvesParser(oe);
                break;
              case 8:
                ee[Ue] = Me.g.FromArray(oe);
                break;
              case 9:
                ee[Ue] = Je._ImageProcessingConfigurationParser(oe);
                break;
              case 10:
                ee[Ue] = Ke.f.FromArray(oe);
                break;
              case 11:
                He && (ee[Ue] = He.getCameraById(oe));
                break;
              case 12:
                ee[Ue] = Ke.b.FromArray(oe);
                break;
              case 13:
                ee[Ue] = Ke.s.FromArray(oe)
            }
          }
        }
      }
      static Parse(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Me = ee();
        return be.b && be.b.AddTagsTo(Me, ie.tags), Je.ParseProperties(ie, Me, He, ye), Me
      }
      static Clone(ee, ie) {
        return Fe(ee, ie, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(ee, ie) {
        return Fe(ee, ie, !0)
      }
    }
    Je.AllowLoadingUniqueId = !1, Je._ImageProcessingConfigurationParser = ee => {
      throw (0, ye.l)("ImageProcessingConfiguration")
    }, Je._FresnelParametersParser = ee => {
      throw (0, ye.l)("FresnelParameters")
    }, Je._ColorCurvesParser = ee => {
      throw (0, ye.l)("ColorCurves")
    }, Je._TextureParser = (ee, ie, He) => {
      throw (0, ye.l)("Texture")
    }
  },
  41067: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(41005);
    class be {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = be.Enabled, this._lastSecValueCount++
      }
      addCount(ee, ie) {
        be.Enabled && (this._current += ee, this._hasCurrentValue = !0, ie && this._fetchResult())
      }
      beginMonitoring() {
        be.Enabled && (this._startMonitoringTime = ye.e.Now)
      }
      endMonitoring() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!be.Enabled) return;
        ee && this.fetchNewFrame();
        const ie = ye.e.Now;
        this._current = ie - this._startMonitoringTime, this._hasCurrentValue = !0, ee && this._fetchResult()
      }
      ZR() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const ee = ye.e.Now;
        ee - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = ee, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    be.Enabled = !0
  },
  41216: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      f: () => ye
    });
    class ye {
      constructor(ee) {
        this.length = 0, this.data = new Array(ee), this._id = ye._GlobalId++
      }
      push(ee) {
        this.data[this.length++] = ee, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(ee) {
        for (let ie = 0; ie < this.length; ie++) ee(this.data[ie])
      }
      sort(ee) {
        this.data.sort(ee)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(ee) {
        if (0 !== ee.length) {
          this.length + ee.length > this.data.length && (this.data.length = 2 * (this.length + ee.length));
          for (let ie = 0; ie < ee.length; ie++) this.data[this.length++] = (ee.data || ee)[ie]
        }
      }
      indexOf(ee) {
        const ie = this.data.indexOf(ee);
        return ie >= this.length ? -1 : ie
      }
      contains(ee) {
        return -1 !== this.indexOf(ee)
      }
    }
    ye._GlobalId = 0;
    class be extends ye {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(ee) {
        super.push(ee), ee.__smartArrayFlags || (ee.__smartArrayFlags = {}), ee.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(ee) {
        return (!ee.__smartArrayFlags || ee.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(ee), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(ee) {
        if (0 !== ee.length) {
          this.length + ee.length > this.data.length && (this.data.length = 2 * (this.length + ee.length));
          for (let ie = 0; ie < ee.length; ie++) {
            const He = (ee.data || ee)[ie];
            this.pushNoDuplicate(He)
          }
        }
      }
    }
  },
  41144: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    class ye {
      static Eval(ee, ie) {
        return "true" === (ee = ee.match(/\([^()]*\)/g) ? ee.replace(/\([^()]*\)/g, (ee => (ee = ee.slice(1, ee.length - 1), ye._HandleParenthesisContent(ee, ie)))) : ye._HandleParenthesisContent(ee, ie)) || "false" !== ee && ye.Eval(ee, ie)
      }
      static _HandleParenthesisContent(ee, ie) {
        let He;
        ie = ie || (ee => "true" === ee);
        const be = ee.split("||");
        for (const Me in be)
          if (Object.prototype.hasOwnProperty.call(be, Me)) {
            let ee = ye._SimplifyNegation(be[Me].trim());
            const Ke = ee.split("&&");
            if (Ke.length > 1)
              for (let be = 0; be < Ke.length; ++be) {
                const Me = ye._SimplifyNegation(Ke[be].trim());
                if (He = "true" !== Me && "false" !== Me ? "!" === Me[0] ? !ie(Me.substring(1)) : ie(Me) : "true" === Me, !He) {
                  ee = "false";
                  break
                }
              }
            if (He || "true" === ee) {
              He = !0;
              break
            }
            He = "true" !== ee && "false" !== ee ? "!" === ee[0] ? !ie(ee.substring(1)) : ie(ee) : "true" === ee
          } return He ? "true" : "false"
      }
      static _SimplifyNegation(ee) {
        return "!true" === (ee = (ee = ee.replace(/^[\s!]+/, (ee => (ee = ee.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? ee = "false" : "!false" === ee && (ee = "true"), ee
      }
    }
    class be {
      static EnableFor(ee) {
        ee._tags = ee._tags || {}, ee.hasTags = () => be.HasTags(ee), ee.addTags = ie => be.AddTagsTo(ee, ie), ee.removeTags = ie => be.RemoveTagsFrom(ee, ie), ee.matchesTagsQuery = ie => be.MatchesQuery(ee, ie)
      }
      static DisableFor(ee) {
        delete ee._tags, delete ee.hasTags, delete ee.addTags, delete ee.removeTags, delete ee.matchesTagsQuery
      }
      static HasTags(ee) {
        if (!ee._tags) return !1;
        const ie = ee._tags;
        for (const He in ie)
          if (Object.prototype.hasOwnProperty.call(ie, He)) return !0;
        return !1
      }
      static GetTags(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!ee._tags) return null;
        if (ie) {
          const ie = [];
          for (const He in ee._tags) Object.prototype.hasOwnProperty.call(ee._tags, He) && !0 === ee._tags[He] && ie.push(He);
          return ie.join(" ")
        }
        return ee._tags
      }
      static AddTagsTo(ee, ie) {
        if (!ie) return;
        if ("string" !== typeof ie) return;
        const He = ie.split(" ");
        for (const ye of He) be._AddTagTo(ee, ye)
      }
      static _AddTagTo(ee, ie) {
        "" !== (ie = ie.trim()) && "true" !== ie && "false" !== ie && (ie.match(/[\s]/) || ie.match(/^([!]|([|]|[&]){2})/) || (be.EnableFor(ee), ee._tags[ie] = !0))
      }
      static RemoveTagsFrom(ee, ie) {
        if (!be.HasTags(ee)) return;
        const He = ie.split(" ");
        for (const ye in He) be._RemoveTagFrom(ee, He[ye])
      }
      static _RemoveTagFrom(ee, ie) {
        delete ee._tags[ie]
      }
      static MatchesQuery(ee, ie) {
        return void 0 === ie || ("" === ie ? be.HasTags(ee) : ye.Eval(ie, (ie => be.HasTags(ee) && ee._tags[ie])))
      }
    }
  },
  41256: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(41247),
      be = He(37931);
    class Me {
      constructor(ee) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new be.d, this._scene = ee
      }
      _prepareBuffers() {
        if (this._vertexBuffers[ye.h.PositionKind]) return;
        const ee = [];
        ee.push(1, 1), ee.push(-1, 1), ee.push(-1, -1), ee.push(1, -1), this._vertexBuffers[ye.h.PositionKind] = new ye.h(this._scene.Nf(), ee, ye.h.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const ee = [];
        ee.push(0), ee.push(1), ee.push(2), ee.push(0), ee.push(2), ee.push(3), this._indexBuffer = this._scene.Nf().createIndexBuffer(ee)
      }
      _getActivePostProcesses(ee) {
        const ie = this._activePostProcesses;
        ie.length = 0;
        for (let He = 0; He < ee.length; He++) {
          const ye = ee[He];
          ye && ie.push(ye)
        }
        return ie
      }
      _rebuild() {
        const ee = this._vertexBuffers[ye.h.PositionKind];
        ee && (ee._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = this._scene.activeCamera;
        return !!He && (ie = ie || this._getActivePostProcesses(He._postProcesses), !(!ie || 0 === ie.length || !this._scene.postProcessesEnabled) && (ie[0].activate(He, ee, null !== ie && void 0 !== ie), !0))
      }
      directRender(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ee.length;
        const Ue = this._scene.Nf();
        for (let Fe = 0; Fe < Ke; Fe++) {
          Fe < ee.length - 1 ? ee[Fe + 1].activate(this._scene.activeCamera || this._scene, ie?.texture) : (ie ? Ue.bindFramebuffer(ie, ye, void 0, void 0, He, be) : Me || Ue.restoreDefaultFramebuffer(), Ue._debugInsertMarker?.(`post process ${ee[Fe].name} output`));
          const Ke = ee[Fe],
            Je = Ke.apply();
          Je && (Ke.onBeforeRenderObservable.notifyObservers(Je), this._prepareBuffers(), Ue.bindBuffers(this._vertexBuffers, this._indexBuffer, Je), Ue.drawElementsType(0, 0, 6), Ke.onAfterRenderObservable.notifyObservers(Je))
        }
        Ue.setDepthBuffer(!0), Ue.setDepthWrite(!0)
      }
      _finalizeFrame(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Me = this._scene.activeCamera;
        if (!Me) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (ye = ye || this._getActivePostProcesses(Me._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Ke = this._scene.Nf();
        for (let Ue = 0, Fe = ye.length; Ue < Fe; Ue++) {
          const Je = ye[Ue];
          if (Ue < Fe - 1 ? Je._outputTexture = ye[Ue + 1].activate(Me, ie?.texture) : (ie ? (Ke.bindFramebuffer(ie, He, void 0, void 0, be), Je._outputTexture = ie) : (Ke.restoreDefaultFramebuffer(), Je._outputTexture = null), Ke._debugInsertMarker?.(`post process ${ye[Ue].name} output`)), ee) break;
          const oe = Je.apply();
          oe && (Je.onBeforeRenderObservable.notifyObservers(oe), this._prepareBuffers(), Ke.bindBuffers(this._vertexBuffers, this._indexBuffer, oe), Ke.drawElementsType(0, 0, 6), Je.onAfterRenderObservable.notifyObservers(oe))
        }
        Ke.setDepthBuffer(!0), Ke.setDepthWrite(!0), Ke.setAlphaMode(0)
      }
      dispose() {
        const ee = this._vertexBuffers[ye.h.PositionKind];
        ee && (ee.dispose(), this._vertexBuffers[ye.h.PositionKind] = null), this._indexBuffer && (this._scene.Nf()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41273: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je
    });
    var ye = He(41216),
      be = He(37917);
    const Me = [],
      Ke = [];
    let Ue = !1;

    function Fe(ee, ie) {
      for (; ee.length < ie;) ee.push(void 0)
    }
    class Je {
      set opaqueSortCompareFn(ee) {
        this._opaqueSortCompareFn = ee || Je.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(ee) {
        this._alphaTestSortCompareFn = ee || Je.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(ee) {
        this._transparentSortCompareFn = ee || Je.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = ee, this._opaqueSubMeshes = new ye.f(256), this._transparentSubMeshes = new ye.f(256), this._alphaTestSubMeshes = new ye.f(256), this._depthOnlySubMeshes = new ye.f(256), this._particleSystems = new ye.f(256), this._spriteManagers = new ye.f(256), this._empty = !0, this._edgesRenderers = new ye.d(16), this.disableDepthPrePass = !1, this._scene = ie, this.opaqueSortCompareFn = He, this.alphaTestSortCompareFn = be, this.transparentSortCompareFn = Me
      }
      render(ee, ie, He, ye) {
        let be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ke = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Ue = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Fe = arguments.length > 8 ? arguments[8] : void 0;
        if (ee) return void ee(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Je = this._scene.Nf();
        be && 0 !== this._depthOnlySubMeshes.length && (Je.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Je.setColorWrite(!0)), Me && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Ke && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const oe = Je.getStencilBuffer();
        if (Je.setStencilBuffer(!1), ie && this._renderSprites(), He && this._renderParticles(ye), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Ue && (Fe || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Je.setStencilBuffer(oe), Fe) Fe(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const ee = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            ee.length && this._renderTransparent(ee)
          } else this._renderTransparent(this._transparentSubMeshes);
          Je.setAlphaMode(0)
        }
        if (Je.setStencilBuffer(!1), Me && this._edgesRenderers.length) {
          for (let ee = 0; ee < this._edgesRenderers.length; ee++) this._edgesRenderers.data[ee].render();
          Je.setAlphaMode(0)
        }
        Je.setStencilBuffer(oe)
      }
      _renderOpaqueSorted(ee) {
        Je._RenderSorted(ee, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(ee) {
        Je._RenderSorted(ee, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(ee) {
        Je._RenderSorted(ee, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(ee, ie, He, ye, Me) {
        let oe, Re = 0;
        const ke = He ? He.globalPosition : Je._ZeroVector;
        if (ye && ie !== Je.PainterSortCompare)
          for (; Re < ee.length; Re++) oe = ee.data[Re], oe._alphaIndex = oe.getMesh().alphaIndex, oe._distanceToCamera = be.p.Distance(oe.WC().OMe.centerWorld, ke);
        const qe = ee.length;
        let fe = ee.data;
        const Te = qe !== fe.length && !Ue;
        if (Te) {
          for (Ue = !0, Fe(Ke, qe), Re = 0; Re < qe; Re++) Ke[Re] = fe[Re];
          fe = Ke
        } else qe !== fe.length && (fe = fe.slice(0, qe));
        try {
          ie && Je._StableSort(fe, qe, ie), Je._DrawSorted(fe, qe, ye, Me)
        } finally {
          Te && (Ke.fill(void 0, 0, qe), Ue = !1)
        }
      }
      static _DrawSorted(ee, ie, He, ye) {
        let be;
        const Me = ee[0].getMesh().Xx();
        for (let Ke = 0; Ke < ie; Ke++) {
          if (be = ee[Ke], Me._activeMeshesFrozenButKeepClipping && !be.isInFrustum(Me._frustumPlanes)) continue;
          let ie = !1;
          if (He) {
            const ee = be.iT();
            if (ee && ee.needDepthPrePass && !ye) {
              ie = !0;
              const He = ee.Xx().Nf();
              He.setColorWrite(!1), He.setAlphaMode(0), be.render(!1), He.setColorWrite(!0)
            }
          }
          const Ue = be._renderingMesh;
          !ie && Ue._renderRunFollower(be, He) || be.render(He)
        }
      }
      static _StableSort(ee, ie, He) {
        for (let ye = 0; ye < ie; ye += 16) {
          const be = Math.min(ye + 16, ie);
          for (let ie = ye + 1; ie < be; ie++) {
            const be = ee[ie];
            let Me = ye,
              Ke = ie;
            for (; Me < Ke;) {
              const ie = Me + Ke >>> 1;
              He(be, ee[ie]) < 0 ? Ke = ie : Me = ie + 1
            }
            for (let He = ie; He > Me; He--) ee[He] = ee[He - 1];
            ee[Me] = be
          }
        }
        if (!(ie <= 16)) {
          Fe(Me, ie);
          try {
            let ye = ee,
              be = Me;
            for (let ee = 16; ee < ie; ee *= 2) {
              for (let Ke = 0; Ke < ie; Ke += 2 * ee) {
                const Me = Math.min(Ke + ee, ie),
                  Ue = Math.min(Ke + 2 * ee, ie);
                let Fe = Ke,
                  Je = Me,
                  oe = Ke;
                if (Me < Ue && He(ye[Me], ye[Me - 1]) < 0)
                  for (; Fe < Me && Je < Ue;) be[oe++] = He(ye[Je], ye[Fe]) < 0 ? ye[Je++] : ye[Fe++];
                for (; Fe < Me;) be[oe++] = ye[Fe++];
                for (; Je < Ue;) be[oe++] = ye[Je++]
              }
              const Me = be;
              be = ye, ye = Me
            }
            if (ye !== ee)
              for (let He = 0; He < ie; He++) ee[He] = ye[He]
          } finally {
            Me.fill(void 0, 0, ie)
          }
        }
      }
      static defaultTransparentSortCompare(ee, ie) {
        return ee._alphaIndex > ie._alphaIndex ? 1 : ee._alphaIndex < ie._alphaIndex ? -1 : Je.backToFrontSortCompare(ee, ie)
      }
      static backToFrontSortCompare(ee, ie) {
        return ee._distanceToCamera < ie._distanceToCamera ? 1 : ee._distanceToCamera > ie._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(ee, ie) {
        return ee._distanceToCamera < ie._distanceToCamera ? -1 : ee._distanceToCamera > ie._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(ee, ie) {
        const He = ee.getMesh(),
          ye = ie.getMesh();
        return He.material && ye.material ? He.material.uniqueId - ye.material.uniqueId : He.uniqueId - ye.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(ee, ie, He) {
        void 0 === ie && (ie = ee.getMesh()), void 0 === He && (He = ee.iT()), null !== He && void 0 !== He && (He.needAlphaBlendingForMesh(ie) ? this._transparentSubMeshes.push(ee) : He.needAlphaTestingForMesh(ie) ? (He.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(ee), this._alphaTestSubMeshes.push(ee)) : (He.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(ee), this._opaqueSubMeshes.push(ee)), ie._renderingGroup = this, ie._edgesRenderer && ie.isEnabled() && ie.isVisible && ie._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(ie._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(ee) {
        this._spriteManagers.push(ee), this._empty = !1
      }
      dispatchParticles(ee) {
        this._particleSystems.push(ee), this._empty = !1
      }
      _renderParticles(ee) {
        if (0 === this._particleSystems.length) return;
        const ie = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let He = 0; He < this._particleSystems.length; He++) {
          const ye = this._particleSystems.data[He];
          if (0 === (ie && ie.layerMask & ye.layerMask)) continue;
          const be = ye.emitter;
          be.position && ee && -1 === ee.indexOf(be) || this._scene._activeParticles.addCount(ye.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const ee = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let ie = 0; ie < this._spriteManagers.length; ie++) {
          const He = this._spriteManagers.data[ie];
          0 !== (ee && ee.layerMask & He.layerMask) && He.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Je._ZeroVector = be.p.Zero()
  },
  41269: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(41273);
    class be {}
    class Me {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(ee) {
        this._disableDepthPrePass = ee;
        for (const ie of this._renderingGroups) ie.disableDepthPrePass = ee
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(ee) {
        ee !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = ee, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const ee of this._scene.meshes)
          if (ee.pW)
            for (const ie of ee.pW) ie._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const ee of this._scene.spriteManagers) ee._wasDispatched = !1;
        for (const ee of this._scene.zW) ee._wasDispatched = !1
      }
      constructor(ee) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new be, this._maintainStateBetweenFrames = !1, this._scene = ee;
        for (let ie = Me.MIN_RENDERINGGROUPS; ie < Me.MAX_RENDERINGGROUPS; ie++) this._autoClearDepthStencil[ie] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(ee) {
        const ie = ee || 0;
        return this._prepareRenderingGroup(ie), this._renderingGroups[ie]
      }
      _clearDepthStencilBuffer() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Nf().clear(null, !1, ee, ie), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(ee, ie, He, ye) {
        let be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ue = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Fe = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Je = arguments.length > 8 ? arguments[8] : void 0,
          oe = arguments.length > 9 ? arguments[9] : void 0;
        const Re = this._renderingGroupInfo;
        Re.yp = this._scene, Re.camera = this._scene.activeCamera, Re.renderingManager = this;
        const ke = oe ?? this._scene.spriteManagers;
        if (ke && ye)
          for (let Me = 0; Me < ke.length; Me++) {
            const ee = ke[Me];
            this.dispatchSprites(ee)
          }
        for (let qe = Me.MIN_RENDERINGGROUPS; qe < Me.MAX_RENDERINGGROUPS; qe++) {
          this._depthStencilBufferAlreadyCleaned = qe === Me.MIN_RENDERINGGROUPS;
          const oe = this._renderingGroups[qe];
          if (!oe || oe._empty) continue;
          const ke = 1 << qe;
          if (Re.renderingGroupId = qe, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Re, ke), Me.AUTOCLEAR) {
            const ee = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(qe) : this._autoClearDepthStencil[qe];
            ee && ee.autoClear && this._clearDepthStencilBuffer(ee.depth, ee.stencil)
          }
          for (let ee = 0, ie = this._scene._beforeRenderingGroupDrawStage; ee < ie.length; ee++) {
            ie[ee].action(qe)
          }
          oe.render(ee, ye, He, ie, be, Ke, Ue, Fe, Je);
          for (let ee = 0, ie = this._scene._afterRenderingGroupDrawStage; ee < ie.length; ee++) {
            ie[ee].action(qe)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Re, ke)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let ee = Me.MIN_RENDERINGGROUPS; ee < Me.MAX_RENDERINGGROUPS; ee++) {
            const ie = this._renderingGroups[ee];
            ie && ie.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let ee = Me.MIN_RENDERINGGROUPS; ee < Me.MAX_RENDERINGGROUPS; ee++) {
            const ie = this._renderingGroups[ee];
            ie && ie.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let ee = Me.MIN_RENDERINGGROUPS; ee < Me.MAX_RENDERINGGROUPS; ee++) {
          const ie = this._renderingGroups[ee];
          ie && ie.dispose()
        }
      }
      _prepareRenderingGroup(ee) {
        void 0 === this._renderingGroups[ee] && (this._renderingGroups[ee] = new ye.b(ee, this._scene, this._customOpaqueSortCompareFn[ee], this._customAlphaTestSortCompareFn[ee], this._customTransparentSortCompareFn[ee]), this._renderingGroups[ee].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(ee) {
        this.maintainStateBetweenFrames && ee._wasDispatched || (ee._wasDispatched = !0, this.getRenderingGroup(ee.renderingGroupId).dispatchSprites(ee))
      }
      dispatchParticles(ee) {
        this.maintainStateBetweenFrames && ee._wasDispatched || (ee._wasDispatched = !0, this.getRenderingGroup(ee.renderingGroupId).dispatchParticles(ee))
      }
      dispatch(ee, ie, He) {
        void 0 === ie && (ie = ee.getMesh()), this.maintainStateBetweenFrames && ee._wasDispatched || (ee._wasDispatched = !0, this.getRenderingGroup(ie.renderingGroupId).dispatch(ee, ie, He))
      }
      setRenderingOrder(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[ee] = ie, this._customAlphaTestSortCompareFn[ee] = He, this._customTransparentSortCompareFn[ee] = ye, this._renderingGroups[ee]) {
          const ie = this._renderingGroups[ee];
          ie.opaqueSortCompareFn = this._customOpaqueSortCompareFn[ee], ie.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[ee], ie.transparentSortCompareFn = this._customTransparentSortCompareFn[ee]
        }
      }
      setRenderingAutoClearDepthStencil(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[ee] = {
          autoClear: ie,
          depth: He,
          stencil: ye
        }
      }
      getAutoClearDepthStencilSetup(ee) {
        return this._autoClearDepthStencil[ee]
      }
    }
    Me.MAX_RENDERINGGROUPS = 4, Me.MIN_RENDERINGGROUPS = 0, Me.AUTOCLEAR = !0
  },
  41013: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee) {
        this._supportBlendParametersPerTarget = ee, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(ee) {
        this.setAlphaBlend(ee)
      }
      setAlphaBlend(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[ie] !== ee && (ee ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[ie] = ee, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(ee, ie, He, ye) {
        this._blendConstants[0] === ee && this._blendConstants[1] === ie && this._blendConstants[2] === He && this._blendConstants[3] === ye || (this._blendConstants[0] = ee, this._blendConstants[1] = ie, this._blendConstants[2] = He, this._blendConstants[3] = ye, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(ee, ie, He, ye) {
        const be = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[be + 0] === ee && this._blendFunctionParameters[be + 1] === ie && this._blendFunctionParameters[be + 2] === He && this._blendFunctionParameters[be + 3] === ye || (this._blendFunctionParameters[be + 0] = ee, this._blendFunctionParameters[be + 1] = ie, this._blendFunctionParameters[be + 2] = He, this._blendFunctionParameters[be + 3] = ye, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(ee, ie) {
        const He = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[He + 0] === ee && this._blendEquationParameters[He + 1] === ie || (this._blendEquationParameters[He + 0] = ee, this._blendEquationParameters[He + 1] = ie, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== ie && (this._numTargets = ie, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== He && (this._blendDisabledTargetsMask = He, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (ee.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === ie || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (ie > 1 && 0 !== He && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & He) ? ee.enable(ee.BLEND) : ee.disable(ee.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (ee.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (ee.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const ye = ee;
        if (this._isAlphaBlendDirty) {
          for (let be = 0; be < ie; be++) {
            const ie = be < this._numTargetEnabled ? be : 0;
            this._alphaBlend[ie] && 0 === (He & 1 << be) ? ye.enableIndexed(ee.BLEND, be) : ye.disableIndexed(ee.BLEND, be)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let ee = 0; ee < ie; ee++) {
            const ie = ee < this._numTargetEnabled ? 4 * ee : 0;
            ye.blendFuncSeparateIndexed(ee, this._blendFunctionParameters[ie + 0], this._blendFunctionParameters[ie + 1], this._blendFunctionParameters[ie + 2], this._blendFunctionParameters[ie + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let ee = 0; ee < ie; ee++) {
            const ie = ee < this._numTargetEnabled ? 2 * ee : 0;
            ye.blendEquationSeparateIndexed(ee, this._blendEquationParameters[ie + 0], this._blendEquationParameters[ie + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(ee, ie) {
        let He = 32774;
        switch (ee) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, ie);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, ie);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, ie);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, ie);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, ie);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, ie);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, ie);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, ie);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, ie);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, ie);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ie);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, ie);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, ie);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, ie);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, ie);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, ie);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ie), He = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ie), He = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, ie);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, ie)
        }
        this.setAlphaEquationParameters(He, He, ie)
      }
    }
  },
  41298: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {}
    ye._IsPickingAvailable = !1
  },
  41199: (ee, ie, He) => {
    He.d(ie, {
      d: () => JH,
      f: () => UH
    });
    var ye = He(41203),
      be = He(40995),
      Me = He(41005),
      Ke = He(37931),
      Ue = He(41216);
    class Fe {
      constructor() {
        this._count = 0, this._data = {}
      }
      jD(ee) {
        this.clear(), ee.forEach(((ee, ie) => this.add(ee, ie)))
      }
      get(ee) {
        const ie = this._data[ee];
        if (void 0 !== ie) return ie
      }
      getOrAddWithFactory(ee, ie) {
        let He = this.get(ee);
        return void 0 !== He || (He = ie(ee), He && this.add(ee, He)), He
      }
      getOrAdd(ee, ie) {
        const He = this.get(ee);
        return void 0 !== He ? He : (this.add(ee, ie), ie)
      }
      contains(ee) {
        return void 0 !== this._data[ee]
      }
      add(ee, ie) {
        return void 0 === this._data[ee] && (this._data[ee] = ie, ++this._count, !0)
      }
      set(ee, ie) {
        return void 0 !== this._data[ee] && (this._data[ee] = ie, !0)
      }
      getAndRemove(ee) {
        const ie = this.get(ee);
        return void 0 !== ie ? (delete this._data[ee], --this._count, ie) : null
      }
      remove(ee) {
        return !!this.contains(ee) && (delete this._data[ee], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(ee) {
        for (const ie in this._data) {
          ee(ie, this._data[ie])
        }
      }
      first(ee) {
        for (const ie in this._data) {
          const He = ee(ie, this._data[ie]);
          if (He) return He
        }
        return null
      }
    }
    var Je = He(41144),
      oe = He(37917),
      Re = He(41222),
      ke = He(41238),
      qe = He(41242);
    class fe {
      constructor(ee, ie, He, ye, be, Me) {
        this.source = ee, this.pointerX = ie, this.pointerY = He, this.meshUnderPointer = ye, this.sourceEvent = be, this.additionalData = Me
      }
      static CreateNew(ee, ie, He) {
        const ye = ee.Xx();
        return new fe(ee, ye.pointerX, ye.pointerY, ye.meshUnderPointer || ee, ie, He)
      }
      static CreateNewFromSprite(ee, ie, He, ye) {
        return new fe(ee, ie.pointerX, ie.pointerY, ie.meshUnderPointer, He, ye)
      }
      static CreateNewFromScene(ee, ie) {
        return new fe(null, ee.pointerX, ee.pointerY, ee.meshUnderPointer, ie)
      }
      static CreateNewFromPrimitive(ee, ie, He, ye) {
        return new fe(ee, ie.x, ie.y, null, He, ye)
      }
    }
    var Te = He(41256),
      pe = He(41264),
      Xe = He(41269),
      ze = He(41279),
      Be = He(40968),
      Ee = He(37929),
      ge = He(40985),
      Oe = He(41286);
    class de {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const ee in de.Triggers)
          if (Object.prototype.hasOwnProperty.call(de.Triggers, ee)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const ee in de.Triggers)
          if (Object.prototype.hasOwnProperty.call(de.Triggers, ee)) {
            const ie = parseInt(ee);
            if (ie >= 1 && ie <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(ee) {
        for (const ie in de.Triggers)
          if (Object.prototype.hasOwnProperty.call(de.Triggers, ie)) {
            if (parseInt(ie) === ee) return !0
          } return !1
      }
    }
    de.Triggers = {};
    var We, te, Ze, we, De, Pe, Ae, Ye = He(41289);
    ! function(ee) {
      ee[ee.Generic = 0] = "Generic", ee[ee.Keyboard = 1] = "Keyboard", ee[ee.Mouse = 2] = "Mouse", ee[ee.Touch = 3] = "Touch", ee[ee.DualShock = 4] = "DualShock", ee[ee.Xbox = 5] = "Xbox", ee[ee.Switch = 6] = "Switch", ee[ee.DualSense = 7] = "DualSense"
    }(We || (We = {})),
    function(ee) {
      ee[ee.Horizontal = 0] = "Horizontal", ee[ee.Vertical = 1] = "Vertical", ee[ee.LeftClick = 2] = "LeftClick", ee[ee.MiddleClick = 3] = "MiddleClick", ee[ee.RightClick = 4] = "RightClick", ee[ee.BrowserBack = 5] = "BrowserBack", ee[ee.BrowserForward = 6] = "BrowserForward", ee[ee.MouseWheelX = 7] = "MouseWheelX", ee[ee.MouseWheelY = 8] = "MouseWheelY", ee[ee.MouseWheelZ = 9] = "MouseWheelZ", ee[ee.Move = 12] = "Move"
    }(te || (te = {})),
    function(ee) {
      ee[ee.Horizontal = 0] = "Horizontal", ee[ee.Vertical = 1] = "Vertical", ee[ee.LeftClick = 2] = "LeftClick", ee[ee.MiddleClick = 3] = "MiddleClick", ee[ee.RightClick = 4] = "RightClick", ee[ee.BrowserBack = 5] = "BrowserBack", ee[ee.BrowserForward = 6] = "BrowserForward", ee[ee.MouseWheelX = 7] = "MouseWheelX", ee[ee.MouseWheelY = 8] = "MouseWheelY", ee[ee.MouseWheelZ = 9] = "MouseWheelZ", ee[ee.DeltaHorizontal = 10] = "DeltaHorizontal", ee[ee.DeltaVertical = 11] = "DeltaVertical"
    }(Ze || (Ze = {})),
    function(ee) {
      ee[ee.Cross = 0] = "Cross", ee[ee.Circle = 1] = "Circle", ee[ee.Square = 2] = "Square", ee[ee.Triangle = 3] = "Triangle", ee[ee.L1 = 4] = "L1", ee[ee.R1 = 5] = "R1", ee[ee.L2 = 6] = "L2", ee[ee.R2 = 7] = "R2", ee[ee.Share = 8] = "Share", ee[ee.Options = 9] = "Options", ee[ee.L3 = 10] = "L3", ee[ee.R3 = 11] = "R3", ee[ee.DPadUp = 12] = "DPadUp", ee[ee.DPadDown = 13] = "DPadDown", ee[ee.DPadLeft = 14] = "DPadLeft", ee[ee.DPadRight = 15] = "DPadRight", ee[ee.Home = 16] = "Home", ee[ee.TouchPad = 17] = "TouchPad", ee[ee.LStickXAxis = 18] = "LStickXAxis", ee[ee.LStickYAxis = 19] = "LStickYAxis", ee[ee.RStickXAxis = 20] = "RStickXAxis", ee[ee.RStickYAxis = 21] = "RStickYAxis"
    }(we || (we = {})),
    function(ee) {
      ee[ee.Cross = 0] = "Cross", ee[ee.Circle = 1] = "Circle", ee[ee.Square = 2] = "Square", ee[ee.Triangle = 3] = "Triangle", ee[ee.L1 = 4] = "L1", ee[ee.R1 = 5] = "R1", ee[ee.L2 = 6] = "L2", ee[ee.R2 = 7] = "R2", ee[ee.Create = 8] = "Create", ee[ee.Options = 9] = "Options", ee[ee.L3 = 10] = "L3", ee[ee.R3 = 11] = "R3", ee[ee.DPadUp = 12] = "DPadUp", ee[ee.DPadDown = 13] = "DPadDown", ee[ee.DPadLeft = 14] = "DPadLeft", ee[ee.DPadRight = 15] = "DPadRight", ee[ee.Home = 16] = "Home", ee[ee.TouchPad = 17] = "TouchPad", ee[ee.LStickXAxis = 18] = "LStickXAxis", ee[ee.LStickYAxis = 19] = "LStickYAxis", ee[ee.RStickXAxis = 20] = "RStickXAxis", ee[ee.RStickYAxis = 21] = "RStickYAxis"
    }(De || (De = {})),
    function(ee) {
      ee[ee.A = 0] = "A", ee[ee.B = 1] = "B", ee[ee.X = 2] = "X", ee[ee.Y = 3] = "Y", ee[ee.LB = 4] = "LB", ee[ee.RB = 5] = "RB", ee[ee.LT = 6] = "LT", ee[ee.RT = 7] = "RT", ee[ee.Back = 8] = "Back", ee[ee.Start = 9] = "Start", ee[ee.LS = 10] = "LS", ee[ee.RS = 11] = "RS", ee[ee.DPadUp = 12] = "DPadUp", ee[ee.DPadDown = 13] = "DPadDown", ee[ee.DPadLeft = 14] = "DPadLeft", ee[ee.DPadRight = 15] = "DPadRight", ee[ee.Home = 16] = "Home", ee[ee.LStickXAxis = 17] = "LStickXAxis", ee[ee.LStickYAxis = 18] = "LStickYAxis", ee[ee.RStickXAxis = 19] = "RStickXAxis", ee[ee.RStickYAxis = 20] = "RStickYAxis"
    }(Pe || (Pe = {})),
    function(ee) {
      ee[ee.B = 0] = "B", ee[ee.A = 1] = "A", ee[ee.Y = 2] = "Y", ee[ee.X = 3] = "X", ee[ee.L = 4] = "L", ee[ee.R = 5] = "R", ee[ee.ZL = 6] = "ZL", ee[ee.ZR = 7] = "ZR", ee[ee.Minus = 8] = "Minus", ee[ee.Plus = 9] = "Plus", ee[ee.LS = 10] = "LS", ee[ee.RS = 11] = "RS", ee[ee.DPadUp = 12] = "DPadUp", ee[ee.DPadDown = 13] = "DPadDown", ee[ee.DPadLeft = 14] = "DPadLeft", ee[ee.DPadRight = 15] = "DPadRight", ee[ee.Home = 16] = "Home", ee[ee.Capture = 17] = "Capture", ee[ee.LStickXAxis = 18] = "LStickXAxis", ee[ee.LStickYAxis = 19] = "LStickYAxis", ee[ee.RStickXAxis = 20] = "RStickXAxis", ee[ee.RStickYAxis = 21] = "RStickYAxis"
    }(Ae || (Ae = {}));
    var Ve = He(41292);
    class ae {
      static CreateDeviceEvent(ee, ie, He, ye, be, Me, Ke) {
        switch (ee) {
          case We.Keyboard:
            return this._CreateKeyboardEvent(He, ye, be, Me);
          case We.Mouse:
            if (He === te.MouseWheelX || He === te.MouseWheelY || He === te.MouseWheelZ) return this._CreateWheelEvent(ee, ie, He, ye, be, Me);
          case We.Touch:
            return this._CreatePointerEvent(ee, ie, He, ye, be, Me, Ke);
          default:
            throw `Unable to generate event for device ${We[ee]}`
        }
      }
      static _CreatePointerEvent(ee, ie, He, ye, be, Me, Ke) {
        const Ue = this._CreateMouseEvent(ee, ie, He, ye, be, Me);
        ee === We.Mouse ? (Ue.deviceType = We.Mouse, Ue.pointerId = 1, Ue.pointerType = "mouse") : (Ue.deviceType = We.Touch, Ue.pointerId = Ke ?? ie, Ue.pointerType = "touch");
        let Fe = 0;
        return Fe += be.pollInput(ee, ie, te.LeftClick), Fe += 2 * be.pollInput(ee, ie, te.RightClick), Fe += 4 * be.pollInput(ee, ie, te.MiddleClick), Ue.buttons = Fe, He === te.Move ? Ue.type = "pointermove" : He >= te.LeftClick && He <= te.RightClick && (Ue.type = 1 === ye ? "pointerdown" : "pointerup", Ue.button = He - 2), Ue
      }
      static _CreateWheelEvent(ee, ie, He, ye, be, Me) {
        const Ke = this._CreateMouseEvent(ee, ie, He, ye, be, Me);
        switch (Ke.pointerId = 1, Ke.type = "wheel", Ke.deltaMode = Ve.d.DOM_DELTA_PIXEL, Ke.deltaX = 0, Ke.deltaY = 0, Ke.deltaZ = 0, He) {
          case te.MouseWheelX:
            Ke.deltaX = ye;
            break;
          case te.MouseWheelY:
            Ke.deltaY = ye;
            break;
          case te.MouseWheelZ:
            Ke.deltaZ = ye
        }
        return Ke
      }
      static _CreateMouseEvent(ee, ie, He, ye, be, Me) {
        const Ke = this._CreateEvent(Me),
          Ue = be.pollInput(ee, ie, te.Horizontal),
          Fe = be.pollInput(ee, ie, te.Vertical);
        return Me ? (Ke.movementX = 0, Ke.movementY = 0, Ke.offsetX = Ke.movementX - Me.getBoundingClientRect().x, Ke.offsetY = Ke.movementY - Me.getBoundingClientRect().y) : (Ke.movementX = be.pollInput(ee, ie, 10), Ke.movementY = be.pollInput(ee, ie, 11), Ke.offsetX = 0, Ke.offsetY = 0), this._CheckNonCharacterKeys(Ke, be), Ke.clientX = Ue, Ke.clientY = Fe, Ke.x = Ue, Ke.y = Fe, Ke.deviceType = ee, Ke.deviceSlot = ie, Ke.inputIndex = He, Ke
      }
      static _CreateKeyboardEvent(ee, ie, He, ye) {
        const be = this._CreateEvent(ye);
        return this._CheckNonCharacterKeys(be, He), be.deviceType = We.Keyboard, be.deviceSlot = 0, be.inputIndex = ee, be.type = 1 === ie ? "keydown" : "keyup", be.key = String.fromCharCode(ee), be.keyCode = ee, be
      }
      static _CheckNonCharacterKeys(ee, ie) {
        const He = ie.isDeviceAvailable(We.Keyboard),
          ye = He && 1 === ie.pollInput(We.Keyboard, 0, 18),
          be = He && 1 === ie.pollInput(We.Keyboard, 0, 17),
          Me = He && (1 === ie.pollInput(We.Keyboard, 0, 91) || 1 === ie.pollInput(We.Keyboard, 0, 92) || 1 === ie.pollInput(We.Keyboard, 0, 93)),
          Ke = He && 1 === ie.pollInput(We.Keyboard, 0, 16);
        ee.altKey = ye, ee.ctrlKey = be, ee.metaKey = Me, ee.shiftKey = Ke
      }
      static _CreateEvent(ee) {
        const ie = {
          preventDefault: () => {}
        };
        return ie.target = ee, ie
      }
    }
    class ce {
      constructor(ee, ie, He) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(ee, ie, ((ee, ie, ye, be) => {
          const Me = ae.CreateDeviceEvent(ee, ie, ye, be, this);
          He(ee, ie, Me)
        })) : this._createDummyNativeInput()
      }
      pollInput(ee, ie, He) {
        return this._nativeInput.pollInput(ee, ie, He)
      }
      isDeviceAvailable(ee) {
        return ee === We.Mouse || ee === We.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const xe = Object.keys(te).length / 2;
    class Le {
      constructor(ee, ie, He, be) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = ye.h.IsSafari(), this._usingMacOs = (0, Be.k)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = ee => {}, this._keyboardUpEvent = ee => {}, this._keyboardBlurEvent = ee => {}, this._pointerMoveEvent = ee => {}, this._pointerDownEvent = ee => {}, this._pointerUpEvent = ee => {}, this._pointerCancelEvent = ee => {}, this._pointerCancelTouch = ee => {}, this._pointerLeaveEvent = ee => {}, this._pointerWheelEvent = ee => {}, this._pointerBlurEvent = ee => {}, this._pointerMacOsChromeOutEvent = ee => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Be.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Be.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = ee => {}, this._gamepadDisconnectedEvent = ee => {}, this._eventPrefix = ye.h.GetPointerPrefix(ee), this._engine = ee, this._onDeviceConnected = ie, this._onDeviceDisconnected = He, this._onInputChanged = be, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(ee, ie, He) {
        const be = this._inputs[ee][ie];
        if (!be) throw `Unable to find device ${We[ee]}`;
        ee >= We.DualShock && ee <= We.DualSense && this._updateDevice(ee, ie, He);
        const Me = be[He];
        if (void 0 === Me) throw `Unable to find input ${He} for device ${We[ee]} in slot ${ie}`;
        return He === te.Move && ye.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Me
      }
      isDeviceAvailable(ee) {
        return void 0 !== this._inputs[ee]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const ee = this?._engine.getInputElement();
        if (ee && (!this._eventsAttached || this._elementToAttachTo !== ee)) {
          if (this._disableEvents(), this._inputs)
            for (const ee of this._inputs)
              if (ee)
                for (const ie in ee) {
                  const He = ee[+ie];
                  if (He)
                    for (let ee = 0; ee < He.length; ee++) He[ee] = 0
                }
          this._elementToAttachTo = ee, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const ee = navigator.getGamepads();
          for (const ie of ee) ie && this._addGamePad(ie)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(We.Mouse, 0, 0, 0)
      }
      _addGamePad(ee) {
        const ie = this._getGamepadDeviceType(ee.id),
          He = ee.index;
        this._gamepads = this._gamepads || new Array(ee.index + 1), this._registerDevice(ie, He, ee.buttons.length + ee.axes.length), this._gamepads[He] = ie
      }
      _addPointerDevice(ee, ie, He, ye) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(ee, ie, xe);
        const be = this._inputs[ee][ie];
        be[0] = He, be[1] = ye
      }
      _registerDevice(ee, ie, He) {
        if (void 0 === ie) throw `Unable to register device ${We[ee]} to undefined slot.`;
        if (this._inputs[ee] || (this._inputs[ee] = {}), !this._inputs[ee][ie]) {
          const ye = new Array(He);
          ye.fill(0), this._inputs[ee][ie] = ye, this._onDeviceConnected(ee, ie)
        }
      }
      _unregisterDevice(ee, ie) {
        this._inputs[ee][ie] && (delete this._inputs[ee][ie], this._onDeviceDisconnected(ee, ie))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = ee => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(We.Keyboard, 0, 255));
          const ie = this._inputs[We.Keyboard][0];
          if (ie) {
            ie[ee.keyCode] = 1;
            const He = ee;
            He.inputIndex = ee.keyCode, this._usingMacOs && ee.metaKey && "Meta" !== ee.key && (this._metaKeys.includes(ee.keyCode) || this._metaKeys.push(ee.keyCode)), this._onInputChanged(We.Keyboard, 0, He)
          }
        }, this._keyboardUpEvent = ee => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(We.Keyboard, 0, 255));
          const ie = this._inputs[We.Keyboard][0];
          if (ie) {
            ie[ee.keyCode] = 0;
            const He = ee;
            if (He.inputIndex = ee.keyCode, this._usingMacOs && "Meta" === ee.key && this._metaKeys.length > 0) {
              for (const ee of this._metaKeys) {
                const He = ae.CreateDeviceEvent(We.Keyboard, 0, ee, 0, this, this._elementToAttachTo);
                ie[ee] = 0, this._onInputChanged(We.Keyboard, 0, He)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(We.Keyboard, 0, He)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const ee = this._inputs[We.Keyboard][0];
            for (let ie = 0; ie < ee.length; ie++)
              if (0 !== ee[ie]) {
                ee[ie] = 0;
                const He = ae.CreateDeviceEvent(We.Keyboard, 0, ie, 0, this, this._elementToAttachTo);
                this._onInputChanged(We.Keyboard, 0, He)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Be.k)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let ye = 0; ye < this._maxTouchPoints; ye++) this._activeTouchIds[ye] = -1;
        this._pointerMoveEvent = ee => {
          const ie = this._getPointerType(ee);
          let He = ie === We.Mouse ? 0 : this._activeTouchIds.indexOf(ee.pointerId);
          if (ie === We.Touch && -1 === He) {
            if (0 === ee.buttons) return;
            const be = this._activeTouchIds.indexOf(-1);
            if (!(be >= 0)) return void ye.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            He = be, this._activeTouchIds[be] = ee.pointerId, this._onDeviceConnected(ie, He)
          }
          this._inputs[ie] || (this._inputs[ie] = {}), this._inputs[ie][He] || this._addPointerDevice(ie, He, ee.clientX, ee.clientY);
          const be = this._inputs[ie][He];
          if (be) {
            const ye = ee;
            ye.inputIndex = te.Move, be[te.Horizontal] = ee.clientX, be[te.Vertical] = ee.clientY, ie === We.Touch && 0 === be[te.LeftClick] && (be[te.LeftClick] = 1), void 0 === ee.pointerId && (ee.pointerId = this._mouseId), this._onInputChanged(ie, He, ye), this._usingSafari || -1 === ee.button || (ye.inputIndex = ee.button + 2, be[ee.button + 2] = be[ee.button + 2] ? 0 : 1, this._onInputChanged(ie, He, ye))
          }
        }, this._pointerDownEvent = ee => {
          const ie = this._getPointerType(ee);
          let He = ie === We.Mouse ? 0 : ee.pointerId;
          if (ie === We.Touch) {
            let ie = this._activeTouchIds.indexOf(ee.pointerId);
            if (-1 === ie && (ie = this._activeTouchIds.indexOf(-1)), !(ie >= 0)) return void ye.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            He = ie, this._activeTouchIds[ie] = ee.pointerId
          }
          this._inputs[ie] || (this._inputs[ie] = {}), this._inputs[ie][He] ? ie === We.Touch && this._onDeviceConnected(ie, He) : this._addPointerDevice(ie, He, ee.clientX, ee.clientY);
          const be = this._inputs[ie][He];
          if (be) {
            const ye = be[te.Horizontal],
              Ke = be[te.Vertical];
            if (ie === We.Mouse) {
              if (void 0 === ee.pointerId && (ee.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Me) {}
            } else if (ee.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(ee.pointerId)
            } catch (Me) {}
            be[te.Horizontal] = ee.clientX, be[te.Vertical] = ee.clientY, be[ee.button + 2] = 1;
            const Ue = ee;
            Ue.inputIndex = ee.button + 2, this._onInputChanged(ie, He, Ue), ye === ee.clientX && Ke === ee.clientY || (Ue.inputIndex = te.Move, this._onInputChanged(ie, He, Ue))
          }
        }, this._pointerUpEvent = ee => {
          const ie = this._getPointerType(ee),
            He = ie === We.Mouse ? 0 : this._activeTouchIds.indexOf(ee.pointerId);
          if (ie === We.Touch) {
            if (-1 === He) return;
            this._activeTouchIds[He] = -1
          }
          const ye = this._inputs[ie]?.[He];
          let be = ee.button,
            Me = ye && 0 !== ye[be + 2];
          if (!Me && this._isUsingFirefox && this._usingMacOs && ye && (be = 2 === be ? 0 : 2, Me = 0 !== ye[be + 2]), Me) {
            const Me = ye[te.Horizontal],
              Ke = ye[te.Vertical];
            ye[te.Horizontal] = ee.clientX, ye[te.Vertical] = ee.clientY, ye[be + 2] = 0;
            const Ue = ee;
            void 0 === ee.pointerId && (ee.pointerId = this._mouseId), Me === ee.clientX && Ke === ee.clientY || (Ue.inputIndex = te.Move, this._onInputChanged(ie, He, Ue)), Ue.inputIndex = be + 2, ie === We.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : ee.pointerId && this._elementToAttachTo.hasPointerCapture?.(ee.pointerId) && this._elementToAttachTo.releasePointerCapture(ee.pointerId), this._onInputChanged(ie, He, Ue), ie === We.Touch && this._onDeviceDisconnected(ie, He)
          }
        }, this._pointerCancelTouch = ee => {
          const ie = this._activeTouchIds.indexOf(ee);
          if (-1 === ie) return;
          this._elementToAttachTo.hasPointerCapture?.(ee) && this._elementToAttachTo.releasePointerCapture(ee), this._inputs[We.Touch][ie][te.LeftClick] = 0;
          const He = ae.CreateDeviceEvent(We.Touch, ie, te.LeftClick, 0, this, this._elementToAttachTo, ee);
          this._onInputChanged(We.Touch, ie, He), this._activeTouchIds[ie] = -1, this._onDeviceDisconnected(We.Touch, ie)
        }, this._pointerCancelEvent = ee => {
          if ("mouse" === ee.pointerType) {
            const ee = this._inputs[We.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ie = te.LeftClick; ie <= te.BrowserForward; ie++)
              if (1 === ee[ie]) {
                ee[ie] = 0;
                const He = ae.CreateDeviceEvent(We.Mouse, 0, ie, 0, this, this._elementToAttachTo);
                this._onInputChanged(We.Mouse, 0, He)
              }
          } else this._pointerCancelTouch(ee.pointerId)
        }, this._pointerLeaveEvent = ee => {
          "pen" === ee.pointerType && this._pointerCancelTouch(ee.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let ee = !1;
        const ie = function() {};
        try {
          const He = Object.defineProperty({}, "passive", {
            get: function() {
              ee = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", ie, He), this._elementToAttachTo.removeEventListener("test", ie, He)
        } catch (He) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(We.Mouse)) {
            const ee = this._inputs[We.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ie = te.LeftClick; ie <= te.BrowserForward; ie++)
              if (1 === ee[ie]) {
                ee[ie] = 0;
                const He = ae.CreateDeviceEvent(We.Mouse, 0, ie, 0, this, this._elementToAttachTo);
                this._onInputChanged(We.Mouse, 0, He)
              }
          }
          if (this.isDeviceAvailable(We.Touch)) {
            const ee = this._inputs[We.Touch];
            for (let ie = 0; ie < this._activeTouchIds.length; ie++) {
              const He = this._activeTouchIds[ie];
              if (this._elementToAttachTo.hasPointerCapture?.(He) && this._elementToAttachTo.releasePointerCapture(He), -1 !== He && 1 === ee[ie]?.[te.LeftClick]) {
                ee[ie][te.LeftClick] = 0;
                const ye = ae.CreateDeviceEvent(We.Touch, ie, te.LeftClick, 0, this, this._elementToAttachTo, He);
                this._onInputChanged(We.Touch, ie, ye), this._activeTouchIds[ie] = -1, this._onDeviceDisconnected(We.Touch, ie)
              }
            }
          }
        }, this._pointerWheelEvent = ee => {
          const ie = We.Mouse;
          this._inputs[ie] || (this._inputs[ie] = []), this._inputs[ie][0] || (this._pointerActive = !0, this._registerDevice(ie, 0, xe));
          const He = this._inputs[ie][0];
          if (He) {
            He[te.MouseWheelX] = ee.deltaX || 0, He[te.MouseWheelY] = ee.deltaY || ee.wheelDelta || 0, He[te.MouseWheelZ] = ee.deltaZ || 0;
            const ye = ee;
            void 0 === ee.pointerId && (ee.pointerId = this._mouseId), 0 !== He[te.MouseWheelX] && (ye.inputIndex = te.MouseWheelX, this._onInputChanged(ie, 0, ye)), 0 !== He[te.MouseWheelY] && (ye.inputIndex = te.MouseWheelY, this._onInputChanged(ie, 0, ye)), 0 !== He[te.MouseWheelZ] && (ye.inputIndex = te.MouseWheelZ, this._onInputChanged(ie, 0, ye))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = ee => {
          ee.buttons > 1 && this._pointerCancelEvent(ee)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!ee && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(We.Mouse)) {
            const ee = this._inputs[We.Mouse][0];
            ee[te.MouseWheelX] = 0, ee[te.MouseWheelY] = 0, ee[te.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = ee => {
          this._addGamePad(ee.gamepad)
        }, this._gamepadDisconnectedEvent = ee => {
          if (this._gamepads) {
            const ie = this._getGamepadDeviceType(ee.gamepad.id),
              He = ee.gamepad.index;
            this._unregisterDevice(ie, He), delete this._gamepads[He]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(ee, ie, He) {
        const ye = navigator.getGamepads()[ie];
        if (ye && ee === this._gamepads[ie]) {
          const be = this._inputs[ee][ie];
          He >= ye.buttons.length ? be[He] = ye.axes[He - ye.buttons.length].valueOf() : be[He] = ye.buttons[He].value
        }
      }
      _getGamepadDeviceType(ee) {
        return -1 !== ee.indexOf("054c") ? -1 !== ee.indexOf("0ce6") ? We.DualSense : We.DualShock : -1 !== ee.indexOf("Xbox One") || -1 !== ee.search("Xbox 360") || -1 !== ee.search("xinput") || -1 !== ee.indexOf("045e") && -1 === ee.indexOf("Surface Dock") ? We.Xbox : -1 !== ee.indexOf("057e") ? We.Switch : We.Generic
      }
      _getPointerType(ee) {
        let ie = We.Mouse;
        return ("touch" === ee.pointerType || "pen" === ee.pointerType || ee.touches) && (ie = We.Touch), ie
      }
    }
    class Ce {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = ie, this.deviceSlot = He, this.onInputChangedObservable = new Ke.d, this._deviceInputSystem = ee
      }
      getInput(ee) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, ee)
      }
    }
    class ve {
      constructor(ee) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = ee => {
          for (let ie = 0; ie < this._devices.length; ie++) {
            const He = this._devices[ie];
            for (const ye in He) {
              const He = +ye;
              ee._addDevice(new Ce(this._deviceInputSystem, ie, He))
            }
          }
          this._registeredManagers.push(ee)
        }, this.unregisterManager = ee => {
          const ie = this._registeredManagers.indexOf(ee);
          ie > -1 && this._registeredManagers.splice(ie, 1)
        };
        const ie = Object.keys(We).length / 2;
        this._devices = new Array(ie);
        const He = (ee, ie) => {
            this._devices[ee] || (this._devices[ee] = new Array), this._devices[ee][ie] || (this._devices[ee][ie] = ie);
            for (const He of this._registeredManagers) {
              const ye = new Ce(this._deviceInputSystem, ee, ie);
              He._addDevice(ye)
            }
          },
          ye = (ee, ie) => {
            this._devices[ee]?.[ie] && delete this._devices[ee][ie];
            for (const He of this._registeredManagers) He._removeDevice(ee, ie)
          },
          be = (ee, ie, He) => {
            if (He)
              for (const ye of this._registeredManagers) ye._onInputChanged(ee, ie, He)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new ce(He, ye, be) : this._deviceInputSystem = new Le(ee, He, ye, be)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class ue {
      getDeviceSource(ee, ie) {
        if (void 0 === ie) {
          if (void 0 === this._firstDevice[ee]) return null;
          ie = this._firstDevice[ee]
        }
        return this._devices[ee] && void 0 !== this._devices[ee][ie] ? this._devices[ee][ie] : null
      }
      getDeviceSources(ee) {
        return this._devices[ee] ? this._devices[ee].filter((ee => !!ee)) : []
      }
      constructor(ee) {
        const ie = Object.keys(We).length / 2;
        this._devices = new Array(ie), this._firstDevice = new Array(ie), this._engine = ee, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new ve(ee)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Ke.d((ee => {
          for (const ie of this._devices)
            if (ie)
              for (const He of ie) He && this.onDeviceConnectedObservable.notifyObserver(ee, He)
        })), this.onDeviceDisconnectedObservable = new Ke.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = ee.Bx.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Bx.remove(this._onDisposeObserver)
      }
      _addDevice(ee) {
        this._devices[ee.deviceType] || (this._devices[ee.deviceType] = []), this._devices[ee.deviceType][ee.deviceSlot] || (this._devices[ee.deviceType][ee.deviceSlot] = ee, this._updateFirstDevices(ee.deviceType)), this.onDeviceConnectedObservable.notifyObservers(ee)
      }
      _removeDevice(ee, ie) {
        const He = this._devices[ee]?.[ie];
        this.onDeviceDisconnectedObservable.notifyObservers(He), this._devices[ee]?.[ie] && delete this._devices[ee][ie], this._updateFirstDevices(ee)
      }
      _onInputChanged(ee, ie, He) {
        this._devices[ee]?.[ie]?.onInputChangedObservable.notifyObservers(He)
      }
      _updateFirstDevices(ee) {
        switch (ee) {
          case We.Keyboard:
          case We.Mouse:
            this._firstDevice[ee] = 0;
            break;
          case We.Touch:
          case We.DualSense:
          case We.DualShock:
          case We.Xbox:
          case We.Switch:
          case We.Generic: {
            delete this._firstDevice[ee];
            const ie = this._devices[ee];
            if (ie)
              for (let He = 0; He < ie.length; He++)
                if (ie[He]) {
                  this._firstDevice[ee] = He;
                  break
                } break
          }
        }
      }
    }
    var me = He(41298);
    class le {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get IJ() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(ee) {
        this._singleClick = ee
      }
      set IJ(ee) {
        this._doubleClick = ee
      }
      set hasSwiped(ee) {
        this._hasSwiped = ee
      }
      set ignore(ee) {
        this._ignore = ee
      }
    }
    class Se {
      constructor(ee) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new oe.n(0, 0), this._previousStartingPointerPosition = new oe.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = ee || Ee.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(ee) {
        return this._meshUnderPointerId[ee] || null
      }
      get unTranslatedPointer() {
        return new oe.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(ee) {
        this._pointerX = ee
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(ee) {
        this._pointerY = ee
      }
      _updatePointerPosition(ee) {
        const ie = this._scene.Nf().getInputElementClientRect();
        ie && (this._pointerX = ee.clientX - ie.left, this._pointerY = ee.clientY - ie.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(ee, ie) {
        const He = this._scene,
          ye = He.Nf(),
          be = ye.getInputElement();
        be && (be.tabIndex = ye.canvasTabIndex, He.doNotHandleCursors || (be.style.cursor = He.defaultCursor)), this._setCursorAndPointerOverMesh(ee, ie, He);
        for (const Ue of He._pointerMoveStage) {
          ee = ee || this._pickMove(ie);
          const He = !!ee?.pickedMesh;
          ee = Ue.action(this._unTranslatedPointerX, this._unTranslatedPointerY, ee, He, be)
        }
        const Me = ie.inputIndex >= te.MouseWheelX && ie.inputIndex <= te.MouseWheelZ ? Oe.c.POINTERWHEEL : Oe.c.POINTERMOVE;
        let Ke;
        He.onPointerMove && (ee = ee || this._pickMove(ie), He.onPointerMove(ie, ee, Me)), ee ? (Ke = new Oe.i(Me, ie, ee), this._setRayOnPointerInfo(ee, ie)) : (Ke = new Oe.i(Me, ie, null, this), this._movePointerInfo = Ke), He.onPointerObservable.hasObservers() && He.onPointerObservable.notifyObservers(Ke, Me)
      }
      _setRayOnPointerInfo(ee, ie) {
        const He = this._scene;
        ee && me.c._IsPickingAvailable && (ee.ray || (ee.ray = He.createPickingRay(ie.offsetX, ie.offsetY, oe.b.Identity(), He.activeCamera)))
      }
      _addCameraPointerObserver(ee, ie) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(ee, ie)
      }
      _removeCameraPointerObserver(ee) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(ee)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(ee, ie, He) {
        const ye = this._scene,
          be = new Oe.f(He, ie, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return ee && (be.originalPickingInfo = ee, be.ray = ee.ray, "xr-near" === ie.pointerType && ee.originMesh && (be.nearInteractionPickingInfo = ee)), ye.onPrePointerObservable.notifyObservers(be, He), !!be.skipOnPointerObservable
      }
      _pickMove(ee) {
        const ie = this._scene,
          He = ie.tq(this._unTranslatedPointerX, this._unTranslatedPointerY, ie.pointerMovePredicate, ie.pointerMoveFastCheck, ie.cameraToUseForPointers, ie.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(He, ee, ie), He
      }
      _updateMeshUnderPointer() {
        const ee = this._scene;
        if (!ee.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || ee.skipPointerMovePicking || !ee.cameraToUseForPointers && !ee.activeCamera) return;
        this._ensurePointerMovePredicate();
        const ie = this._pointerX,
          He = this._pointerY,
          ye = this._unTranslatedPointerX,
          be = this._unTranslatedPointerY;
        for (const Me of this._latestPointerMoveEvents.values()) this._pointerX = Me.pointerX, this._pointerY = Me.pointerY, this._unTranslatedPointerX = Me.unTranslatedPointerX, this._unTranslatedPointerY = Me.unTranslatedPointerY, this._pickMove(Me.event);
        this._pointerX = ie, this._pointerY = He, this._unTranslatedPointerX = ye, this._unTranslatedPointerY = be
      }
      _ensurePointerMovePredicate() {
        const ee = this._scene;
        ee.pointerMovePredicate || (ee.pointerMovePredicate = ie => (ie._isPointerMovePickable ?? ie.Mp) && ie.isVisible && ie.isReady() && ie.isEnabled() && (ie.enablePointerMoveEvents || ee.constantlyUpdateMeshUnderPointer || null !== ie._getActionManagerForTrigger()) && (!ee.cameraToUseForPointers || 0 !== (ee.cameraToUseForPointers.layerMask & ie.layerMask)))
      }
      _setCursorAndPointerOverMesh(ee, ie, He) {
        const ye = He.Nf().getInputElement();
        if (ee?.pickedMesh) {
          if (this.setPointerOverMesh(ee.pickedMesh, ie.pointerId, ee, ie), !He.doNotHandleCursors && ye && this._pointerOverMesh) {
            const ee = this._pointerOverMesh._getActionManagerForTrigger();
            ee && ee.hasPointerTriggers && (ye.style.cursor = ee.hoverCursor || He.hoverCursor)
          }
        } else this.setPointerOverMesh(null, ie.pointerId, ee, ie)
      }
      simulatePointerMove(ee, ie) {
        const He = new PointerEvent("pointermove", ie);
        He.inputIndex = te.Move, this._checkPrePointerObservable(ee, He, Oe.c.POINTERMOVE) || this._processPointerMove(ee, He)
      }
      simulatePointerDown(ee, ie) {
        const He = new PointerEvent("pointerdown", ie);
        He.inputIndex = He.button + 2, this._checkPrePointerObservable(ee, He, Oe.c.POINTERDOWN) || this._processPointerDown(ee, He)
      }
      _processPointerDown(ee, ie) {
        const He = this._scene;
        if (ee?.pickedMesh) {
          this._pickedDownMesh = ee.pickedMesh;
          const ye = ee.pickedMesh._getActionManagerForTrigger();
          if (ye) {
            if (ye.hasPickTriggers) switch (ye.processTrigger(5, new fe(ee.pickedMesh, He.pointerX, He.pointerY, ee.pickedMesh, ie, ee)), ie.button) {
              case 0:
                ye.processTrigger(2, new fe(ee.pickedMesh, He.pointerX, He.pointerY, ee.pickedMesh, ie, ee));
                break;
              case 1:
                ye.processTrigger(4, new fe(ee.pickedMesh, He.pointerX, He.pointerY, ee.pickedMesh, ie, ee));
                break;
              case 2:
                ye.processTrigger(3, new fe(ee.pickedMesh, He.pointerX, He.pointerY, ee.pickedMesh, ie, ee))
            }
            ye.hasSpecificTrigger(8) && window.setTimeout((() => {
              const ee = He.tq(this._unTranslatedPointerX, this._unTranslatedPointerY, (ee => ee.Mp && ee.isVisible && ee.isReady() && ee.actionManager && ee.actionManager.hasSpecificTrigger(8) && ee === this._pickedDownMesh), !1, He.cameraToUseForPointers);
              ee?.pickedMesh && ye && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Se.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, ye.processTrigger(8, fe.CreateNew(ee.pickedMesh, ie)))
            }), Se.LongPressDelay)
          }
        } else
          for (const Me of He._pointerDownStage) ee = Me.action(this._unTranslatedPointerX, this._unTranslatedPointerY, ee, ie, !1);
        let ye;
        const be = Oe.c.POINTERDOWN;
        ee ? (He.onPointerDown && He.onPointerDown(ie, ee, be), ye = new Oe.i(be, ie, ee), this._setRayOnPointerInfo(ee, ie)) : ye = new Oe.i(be, ie, null, this), He.onPointerObservable.hasObservers() && He.onPointerObservable.notifyObservers(ye, be)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(ee, ie, He) {
        const ye = new PointerEvent("pointerup", ie);
        ye.inputIndex = te.Move;
        const be = new le;
        He ? be.IJ = !0 : be.singleClick = !0, this._checkPrePointerObservable(ee, ye, Oe.c.POINTERUP) || this._processPointerUp(ee, ye, be)
      }
      _processPointerUp(ee, ie, He) {
        const ye = this._scene;
        if (ee?.pickedMesh) {
          if (this._pickedUpMesh = ee.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (ye.onPointerPick && ye.onPointerPick(ie, ee), He.singleClick && !He.ignore && ye.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const He = Oe.c.POINTERPICK,
              be = new Oe.i(He, ie, ee);
            this._setRayOnPointerInfo(ee, ie), ye.onPointerObservable.notifyObservers(be, He)
          }
          const be = ee.pickedMesh._getActionManagerForTrigger();
          if (be && !He.ignore) {
            be.processTrigger(7, fe.CreateNew(ee.pickedMesh, ie, ee)), !He.hasSwiped && He.singleClick && be.processTrigger(1, fe.CreateNew(ee.pickedMesh, ie, ee));
            const ye = ee.pickedMesh._getActionManagerForTrigger(6);
            He.IJ && ye && ye.processTrigger(6, fe.CreateNew(ee.pickedMesh, ie, ee))
          }
        } else if (!He.ignore)
          for (const be of ye._pointerUpStage) ee = be.action(this._unTranslatedPointerX, this._unTranslatedPointerY, ee, ie, He.IJ);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const ee = this._pickedDownMesh._getActionManagerForTrigger(16);
          ee && ee.processTrigger(16, fe.CreateNew(this._pickedDownMesh, ie))
        }
        if (!He.ignore) {
          const be = new Oe.i(Oe.c.POINTERUP, ie, ee);
          if (this._setRayOnPointerInfo(ee, ie), ye.onPointerObservable.notifyObservers(be, Oe.c.POINTERUP), ye.onPointerUp && ye.onPointerUp(ie, ee, Oe.c.POINTERUP), !He.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let be = 0;
            if (He.singleClick ? be = Oe.c.POINTERTAP : He.IJ && (be = Oe.c.POINTERDOUBLETAP), be) {
              const He = new Oe.i(be, ie, ee);
              ye.onPointerObservable.hasObservers() && ye.onPointerObservable.hasSpecificMask(be) && ye.onPointerObservable.notifyObservers(He, be)
            }
          }
        }
      }
      isPointerCaptured() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[ee]
      }
      attachControl() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const be = this._scene,
          Me = be.Nf();
        ye || (ye = Me.getInputElement()), this._alreadyAttached && this.detachControl(), ye && (this._alreadyAttachedTo = ye), this._deviceSourceManager = new ue(Me), this._initActionManager = ee => {
          if (!this._meshPickProceed) {
            const ie = be.skipPointerUpPicking || 0 === be._registeredActions && !this._checkForPicking() && !be.onPointerUp ? null : be.tq(this._unTranslatedPointerX, this._unTranslatedPointerY, be.pointerUpPredicate, be.pointerUpFastCheck, be.cameraToUseForPointers, be.pointerUpTrianglePredicate);
            this._currentPickResult = ie, ie && (ee = ie.hit && ie.pickedMesh ? ie.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return ee
        }, this._delayedSimpleClick = (ee, ie, He) => {
          if ((Date.now() - this._previousStartingPointerTime > Se.DoubleClickDelay && !this._doubleClickOccured || ee !== this._previousButtonPressed) && (this._doubleClickOccured = !1, ie.singleClick = !0, ie.ignore = !1, this._delayedClicks[ee])) {
            const ie = this._delayedClicks[ee].evt,
              He = Oe.c.POINTERTAP,
              ye = new Oe.i(He, ie, this._currentPickResult);
            be.onPointerObservable.hasObservers() && be.onPointerObservable.hasSpecificMask(He) && be.onPointerObservable.notifyObservers(ye, He), this._delayedClicks[ee] = null
          }
        }, this._initClickEvent = (ee, ie, He, ye) => {
          const be = new le;
          this._currentPickResult = null;
          let Me = null,
            Ke = ee.hasSpecificMask(Oe.c.POINTERPICK) || ie.hasSpecificMask(Oe.c.POINTERPICK) || ee.hasSpecificMask(Oe.c.POINTERTAP) || ie.hasSpecificMask(Oe.c.POINTERTAP) || ee.hasSpecificMask(Oe.c.POINTERDOUBLETAP) || ie.hasSpecificMask(Oe.c.POINTERDOUBLETAP);
          !Ke && de && (Me = this._initActionManager(Me, be), Me && (Ke = Me.hasPickTriggers));
          let Ue = !1;
          if (Ke = Ke && !this._isMultiTouchGesture, Ke) {
            const Ke = He.button;
            if (be.hasSwiped = this._isPointerSwiping(), !be.hasSwiped) {
              let Fe = !Se.ExclusiveDoubleClickMode;
              if (Fe || (Fe = !ee.hasSpecificMask(Oe.c.POINTERDOUBLETAP) && !ie.hasSpecificMask(Oe.c.POINTERDOUBLETAP), Fe && !de.HasSpecificTrigger(6) && (Me = this._initActionManager(Me, be), Me && (Fe = !Me.hasSpecificTrigger(6)))), Fe)(Date.now() - this._previousStartingPointerTime > Se.DoubleClickDelay || Ke !== this._previousButtonPressed) && (be.singleClick = !0, ye(be, this._currentPickResult), Ue = !0);
              else {
                const ee = {
                  evt: He,
                  clickInfo: be,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Ke, be, ye), Se.DoubleClickDelay)
                };
                this._delayedClicks[Ke] = ee
              }
              let Je = ee.hasSpecificMask(Oe.c.POINTERDOUBLETAP) || ie.hasSpecificMask(Oe.c.POINTERDOUBLETAP);
              !Je && de.HasSpecificTrigger(6) && (Me = this._initActionManager(Me, be), Me && (Je = Me.hasSpecificTrigger(6))), Je && (Ke === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Se.DoubleClickDelay && !this._doubleClickOccured ? (be.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Ke, Se.ExclusiveDoubleClickMode ? (this._delayedClicks[Ke] && (clearTimeout(this._delayedClicks[Ke]?.timeoutId), this._delayedClicks[Ke] = null), ye(be, this._previousPickResult)) : ye(be, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, be.IJ = !0, be.ignore = !1, Se.ExclusiveDoubleClickMode && this._delayedClicks[Ke] && (clearTimeout(this._delayedClicks[Ke]?.timeoutId), this._delayedClicks[Ke] = null), ye(be, this._currentPickResult)), Ue = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Ke))
            }
          }
          Ue || ye(be, this._currentPickResult)
        }, this._onPointerMove = ee => {
          if (this._updatePointerPosition(ee), this._latestPointerMoveEvents.set(ee.pointerId, {
              event: ee,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Se.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Se.DragMovementThreshold), Me.isPointerLock && Me._verifyPointerLock(), this._checkPrePointerObservable(null, ee, ee.inputIndex >= te.MouseWheelX && ee.inputIndex <= te.MouseWheelZ ? Oe.c.POINTERWHEEL : Oe.c.POINTERMOVE)) return;
          if (!be.cameraToUseForPointers && !be.activeCamera) return;
          if (be.skipPointerMovePicking) return void this._processPointerMove(new qe.e, ee);
          this._ensurePointerMovePredicate();
          const ie = be._registeredActions > 0 || be.constantlyUpdateMeshUnderPointer ? this._pickMove(ee) : null;
          this._processPointerMove(ie, ee)
        }, this._onPointerDown = ee => {
          const ie = this._activePointerIds.indexOf(-1);
          if (-1 === ie ? this._activePointerIds.push(ee.pointerId) : this._activePointerIds[ie] = ee.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Se.ExclusiveDoubleClickMode)
            for (let ye = 0; ye < this._delayedClicks.length; ye++)
              if (this._delayedClicks[ye])
                if (ee.button === ye) clearTimeout(this._delayedClicks[ye]?.timeoutId);
                else {
                  const ee = this._delayedClicks[ye].clickInfo;
                  this._doubleClickOccured = !1, ee.singleClick = !0, ee.ignore = !1;
                  const ie = this._delayedClicks[ye].evt,
                    He = Oe.c.POINTERTAP,
                    Me = new Oe.i(He, ie, this._currentPickResult);
                  be.onPointerObservable.hasObservers() && be.onPointerObservable.hasSpecificMask(He) && be.onPointerObservable.notifyObservers(Me, He), this._delayedClicks[ye] = null
                } if (this._updatePointerPosition(ee), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = ee.button), be.preventDefaultOnPointerDown && ye && (ee.preventDefault(), ye.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, ee, Oe.c.POINTERDOWN)) return;
          if (!be.cameraToUseForPointers && !be.activeCamera) return;
          let He;
          this._pointerCaptures[ee.pointerId] = !0, be.pointerDownPredicate || (be.pointerDownPredicate = ee => ee.Mp && ee.isVisible && ee.isReady() && ee.isEnabled() && (!be.cameraToUseForPointers || 0 !== (be.cameraToUseForPointers.layerMask & ee.layerMask))), this._pickedDownMesh = null, He = be.skipPointerDownPicking || 0 === be._registeredActions && !this._checkForPicking() && !be.onPointerDown ? new qe.e : be.tq(this._unTranslatedPointerX, this._unTranslatedPointerY, be.pointerDownPredicate, be.pointerDownFastCheck, be.cameraToUseForPointers, be.pointerDownTrianglePredicate), this._processPointerDown(He, ee)
        }, this._onPointerUp = ee => {
          const ie = this._activePointerIds.indexOf(ee.pointerId); - 1 !== ie && (this._activePointerIds[ie] = -1, this._activePointerIdsCount--, "touch" === ee.pointerType && this._latestPointerMoveEvents.delete(ee.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(ee), be.preventDefaultOnPointerUp && ye && (ee.preventDefault(), ye.focus()), this._initClickEvent(be.onPrePointerObservable, be.onPointerObservable, ee, ((ie, He) => {
            if (be.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !ie.ignore)) {
              if (this._checkPrePointerObservable(null, ee, Oe.c.POINTERUP)) return this._swipeButtonPressed === ee.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === ee.buttons && (this._pointerCaptures[ee.pointerId] = !1));
              ie.hasSwiped || (ie.singleClick && be.onPrePointerObservable.hasSpecificMask(Oe.c.POINTERTAP) && this._checkPrePointerObservable(null, ee, Oe.c.POINTERTAP) && (this._skipPointerTap = !0), ie.IJ && be.onPrePointerObservable.hasSpecificMask(Oe.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, ee, Oe.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[ee.pointerId] ? (0 === ee.buttons && (this._pointerCaptures[ee.pointerId] = !1), (be.cameraToUseForPointers || be.activeCamera) && (be.pointerUpPredicate || (be.pointerUpPredicate = ee => ee.Mp && ee.isVisible && ee.isReady() && ee.isEnabled() && (!be.cameraToUseForPointers || 0 !== (be.cameraToUseForPointers.layerMask & ee.layerMask))), !this._meshPickProceed && (de && de.HasTriggers || this._checkForPicking() || be.onPointerUp) && this._initActionManager(null, ie), He || (He = this._currentPickResult), this._processPointerUp(He, ee, ie), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === ee.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === ee.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = ee => {
          const ie = Ye.e.KEYDOWN;
          if (be.onPreKeyboardObservable.hasObservers()) {
            const He = new Ye.g(ie, ee);
            if (be.onPreKeyboardObservable.notifyObservers(He, ie), He.skipOnKeyboardObservable) return
          }
          if (be.onKeyboardObservable.hasObservers()) {
            const He = new Ye.j(ie, ee);
            be.onKeyboardObservable.notifyObservers(He, ie)
          }
          be.actionManager && be.actionManager.processTrigger(14, fe.CreateNewFromScene(be, ee))
        }, this._onKeyUp = ee => {
          const ie = Ye.e.KEYUP;
          if (be.onPreKeyboardObservable.hasObservers()) {
            const He = new Ye.g(ie, ee);
            if (be.onPreKeyboardObservable.notifyObservers(He, ie), He.skipOnKeyboardObservable) return
          }
          if (be.onKeyboardObservable.hasObservers()) {
            const He = new Ye.j(ie, ee);
            be.onKeyboardObservable.notifyObservers(He, ie)
          }
          be.actionManager && be.actionManager.processTrigger(15, fe.CreateNewFromScene(be, ee))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((ye => {
          ye.deviceType === We.Mouse ? ye.onInputChangedObservable.add((be => {
            this._originMouseEvent = be, be.inputIndex === te.LeftClick || be.inputIndex === te.MiddleClick || be.inputIndex === te.RightClick || be.inputIndex === te.BrowserBack || be.inputIndex === te.BrowserForward ? ie && 1 === ye.getInput(be.inputIndex) ? this._onPointerDown(be) : ee && 0 === ye.getInput(be.inputIndex) && this._onPointerUp(be) : He && (be.inputIndex === te.Move ? this._onPointerMove(be) : be.inputIndex !== te.MouseWheelX && be.inputIndex !== te.MouseWheelY && be.inputIndex !== te.MouseWheelZ || this._onPointerMove(be))
          })) : ye.deviceType === We.Touch ? ye.onInputChangedObservable.add((be => {
            be.inputIndex === te.LeftClick && (ie && 1 === ye.getInput(be.inputIndex) ? (this._onPointerDown(be), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : ee && 0 === ye.getInput(be.inputIndex) && (this._onPointerUp(be), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), He && be.inputIndex === te.Move && this._onPointerMove(be)
          })) : ye.deviceType === We.Keyboard && ye.onInputChangedObservable.add((ee => {
            "keydown" === ee.type ? this._onKeyDown(ee) : "keyup" === ee.type && this._onKeyUp(ee)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[ie] === ee && (!ee || !ee._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const be = this._meshUnderPointerId[ie];
        let Me;
        be && (Me = be._getActionManagerForTrigger(10), Me && Me.processTrigger(10, new fe(be, this._pointerX, this._pointerY, ee, ye, {
          pointerId: ie
        }))), ee ? (this._meshUnderPointerId[ie] = ee, this._pointerOverMesh = ee, Me = ee._getActionManagerForTrigger(9), Me && Me.processTrigger(9, new fe(ee, this._pointerX, this._pointerY, ee, ye, {
          pointerId: ie,
          pickResult: He
        }))) : (delete this._meshUnderPointerId[ie], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: ee,
          pointerId: ie
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(ee) {
        this._pointerOverMesh === ee && (this._pointerOverMesh = null), this._pickedDownMesh === ee && (this._pickedDownMesh = null), this._pickedUpMesh === ee && (this._pickedUpMesh = null);
        for (const ie in this._meshUnderPointerId) this._meshUnderPointerId[ie] === ee && delete this._meshUnderPointerId[ie]
      }
    }
    Se.DragMovementThreshold = 10, Se.LongPressDelay = 500, Se.DoubleClickDelay = 300, Se.ExclusiveDoubleClickMode = !1;
    var ne = He(41067),
      je = He(38022),
      se = He(38581);
    class Ie {
      static get UniqueId() {
        const ee = this._UniqueIdCounter;
        return this._UniqueIdCounter++, ee
      }
    }
    Ie._UniqueIdCounter = 1;
    var he = He(41159),
      Ne = He(41301),
      Ge = He(37925);
    class re {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var Qe, ei, ii, Hi, yi, bi, Mi, Ki, Ui, Fi, Ji, oi, Ri, ki, qi, fi, Ti, Xi, zi, Bi, Ei, gi, Oi, di, Wi, ti, Zi, wi, Di, Pi, Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi, ui, mi, li, Si, ni, ji, si, Ii, Ni, Gi, ri, Qi, eH, iH, HH = He(39467),
      yH = He(37949);
    const bH = new oe.s,
      MH = new oe.s;
    var KH;
    ! function(ee) {
      ee[ee.BackwardCompatible = 0] = "BackwardCompatible", ee[ee.Intermediate = 1] = "Intermediate", ee[ee.Aggressive = 2] = "Aggressive"
    }(KH || (KH = {}));
    class UH {
      static DefaultMaterialFactory(ee) {
        throw (0, ge.l)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, ge.l)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(ee) {
        ee !== this._clearColor && (this._clearColor = ee, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(ee) {
        if (ee !== this._performancePriority) {
          switch (this._performancePriority = ee, ee) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(ee)
        }
      }
      set forceWireframe(ee) {
        this._forceWireframe !== ee && (this._forceWireframe = ee, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(ee) {
        this._skipFrustumClipping !== ee && (this._skipFrustumClipping = ee)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(ee) {
        this._forcePointsCloud !== ee && (this._forcePointsCloud = ee, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(ee) {
        this._environmentTexture !== ee && (this._environmentTexture = ee, this.onEnvironmentTextureChangedObservable.notifyObservers(ee), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let ee = [];
        ee = ee.concat(this.meshes), ee = ee.concat(this.lights), ee = ee.concat(this.cameras), ee = ee.concat(this.transformNodes);
        for (const ie of this.skeletons) ee = ee.concat(ie.bones);
        return ee
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(ee) {
        this._animationPropertiesOverride = ee
      }
      set onDispose(ee) {
        this._onDisposeObserver && this.Bx.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bx.add(ee)
      }
      set beforeRender(ee) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), ee && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(ee))
      }
      set afterRender(ee) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), ee && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(ee))
      }
      set beforeCameraRender(ee) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(ee)
      }
      set afterCameraRender(ee) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(ee)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(ee) {
        this._pointerPickingConfiguration.pointerDownPredicate = ee
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(ee) {
        this._pointerPickingConfiguration.pointerUpPredicate = ee
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(ee) {
        this._pointerPickingConfiguration.pointerMovePredicate = ee
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(ee) {
        this._pointerPickingConfiguration.pointerDownFastCheck = ee
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(ee) {
        this._pointerPickingConfiguration.pointerUpFastCheck = ee
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(ee) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = ee
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(ee) {
        this._pointerPickingConfiguration.skipPointerMovePicking = ee
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(ee) {
        this._pointerPickingConfiguration.skipPointerDownPicking = ee
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(ee) {
        this._pointerPickingConfiguration.skipPointerUpPicking = ee
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Se.DragMovementThreshold
      }
      static set DragMovementThreshold(ee) {
        Se.DragMovementThreshold = ee
      }
      static get LongPressDelay() {
        return Se.LongPressDelay
      }
      static set LongPressDelay(ee) {
        Se.LongPressDelay = ee
      }
      static get DoubleClickDelay() {
        return Se.DoubleClickDelay
      }
      static set DoubleClickDelay(ee) {
        Se.DoubleClickDelay = ee
      }
      static get ExclusiveDoubleClickMode() {
        return Se.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(ee) {
        Se.ExclusiveDoubleClickMode = ee
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? oe.p.ZeroReadOnly
      }
      bindEyePosition(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = this._eyePosition,
          be = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Me = this.floatingOriginOffset,
          Ke = bH.set(ye.x, ye.y, ye.z, be ? -1 : 1),
          Ue = Ke.subtractFromFloatsToRef(Me.x, Me.y, Me.z, 0, MH);
        return ee && (He ? ee.setFloat3(ie, Ue.x, Ue.y, Ue.z) : ee.setVector4(ie, Ue)), Ke
      }
      finalizeSceneUbo() {
        const ee = this.getSceneUniformBuffer(),
          ie = this.bindEyePosition(null),
          He = this.floatingOriginOffset;
        return ee.updateFloat4("vEyePosition", ie.x - He.x, ie.y - He.y, ie.z - He.z, ie.w), ee.update(), ee
      }
      set useRightHandedSystem(ee) {
        this._useRightHandedSystem !== ee && (this._useRightHandedSystem = ee, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(ee) {
        this._currentStepId = ee
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(ee) {
        this._fogEnabled !== ee && (this._fogEnabled = ee, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(ee) {
        this._fogMode !== ee && (this._fogMode = ee, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(ee) {
        this._shadowsEnabled !== ee && (this._shadowsEnabled = ee, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(ee) {
        this._lightsEnabled !== ee && (this._lightsEnabled = ee, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(ee) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), ee && (this._unObserveActiveCameras = (0, Ge.j)(ee, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = ee
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(ee) {
        ee !== this._activeCamera && (this._activeCamera = ee, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return UH.DefaultMaterialFactory !== UH._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = UH.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(ee) {
        this._defaultMaterial = ee
      }
      set texturesEnabled(ee) {
        this._texturesEnabled !== ee && (this._texturesEnabled = ee, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(ee) {
        if (this._frameGraph) return this._frameGraph = ee, void(ee || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = ee, ee && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(ee) {
        this._skeletonsEnabled !== ee && (this._skeletonsEnabled = ee, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = UH.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const ee of this._transientComponents) ee.register();
          this._transientComponents.length = 0
        }
      }
      Cbe(ee) {
        this._components.push(ee), this._transientComponents.push(ee);
        const ie = ee;
        ie.addFromContainer && ie.serialize && this._serializableComponents.push(ie)
      }
      _getComponent(ee) {
        for (const ie of this._components)
          if (ie.name === ee) return ie;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(ee, ie) {
        this._inputManager = new Se(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new je.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new Ke.d, this.ambientColor = new je.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Ke.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.zW = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Bx = new Ke.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Ke.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Ke.d, this.onAfterRenderCameraObservable = new Ke.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Ke.d, this.onAfterAnimationsObservable = new Ke.d, this.onBeforeDrawPhaseObservable = new Ke.d, this.onAfterDrawPhaseObservable = new Ke.d, this.onReadyObservable = new Ke.d, this.onBeforeCameraRenderObservable = new Ke.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Ke.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Ke.d, this.onAfterActiveMeshesEvaluationObservable = new Ke.d, this.onBeforeParticlesRenderingObservable = new Ke.d, this.onAfterParticlesRenderingObservable = new Ke.d, this.onDataLoadedObservable = new Ke.d, this.onNewCameraAddedObservable = new Ke.d, this.onCameraRemovedObservable = new Ke.d, this.onNewLightAddedObservable = new Ke.d, this.onLightRemovedObservable = new Ke.d, this.onNewGeometryAddedObservable = new Ke.d, this.onGeometryRemovedObservable = new Ke.d, this.onNewTransformNodeAddedObservable = new Ke.d, this.onTransformNodeRemovedObservable = new Ke.d, this.onNewMeshAddedObservable = new Ke.d, this.onMeshRemovedObservable = new Ke.d, this.onNewSkeletonAddedObservable = new Ke.d, this.onSkeletonRemovedObservable = new Ke.d, this.onNewParticleSystemAddedObservable = new Ke.d, this.onParticleSystemRemovedObservable = new Ke.d, this.onNewAnimationGroupAddedObservable = new Ke.d, this.onAnimationGroupRemovedObservable = new Ke.d, this.onNewMaterialAddedObservable = new Ke.d, this.onNewMultiMaterialAddedObservable = new Ke.d, this.onMaterialRemovedObservable = new Ke.d, this.onMultiMaterialRemovedObservable = new Ke.d, this.onNewTextureAddedObservable = new Ke.d, this.onTextureRemovedObservable = new Ke.d, this.onNewFrameGraphAddedObservable = new Ke.d, this.onFrameGraphRemovedObservable = new Ke.d, this.onNewObjectRendererAddedObservable = new Ke.d, this.onObjectRendererRemovedObservable = new Ke.d, this.onNewPostProcessAddedObservable = new Ke.d, this.onPostProcessRemovedObservable = new Ke.d, this.onNewEffectLayerAddedObservable = new Ke.d, this.onEffectLayerRemovedObservable = new Ke.d, this.onBeforeRenderTargetsRenderObservable = new Ke.d, this.onAfterRenderTargetsRenderObservable = new Ke.d, this.onBeforeStepObservable = new Ke.d, this.onAfterStepObservable = new Ke.d, this.onActiveCameraChanged = new Ke.d, this.onActiveCamerasChanged = new Ke.d, this.onBeforeRenderingGroupObservable = new Ke.d, this.onAfterRenderingGroupObservable = new Ke.d, this.onMeshImportedObservable = new Ke.d, this.onAnimationFileImportedObservable = new Ke.d, this.onEnvironmentTextureChangedObservable = new Ke.d, this.onMeshUnderPointerUpdatedObservable = new Ke.d, this._registeredForLateAnimationBindings = new Ue.d(256), this._pointerPickingConfiguration = new re, this.onPrePointerObservable = new Ke.d, this.onPointerObservable = new Ke.d, this.onPreKeyboardObservable = new Ke.d, this.onKeyboardObservable = new Ke.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = UH.FOGMODE_NONE, this.fogColor = new je.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.nS = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new oe.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Ue.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new ne.e, this._activeIndices = new ne.e, this._activeParticles = new ne.e, this._activeBones = new ne.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Ue.f(256), this._processedMaterials = new Ue.f(256), this._renderTargets = new Ue.d(256), this._materialsRenderTargets = new Ue.d(256), this._activeParticleSystems = new Ue.f(256), this._activeSkeletons = new Ue.d(32), this._softwareSkinnedMeshes = new Ue.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = oe.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = ze.f.Create(), this._beforeClearStage = ze.f.Create(), this._beforeRenderTargetClearStage = ze.f.Create(), this._gatherRenderTargetsStage = ze.f.Create(), this._gatherActiveCameraRenderTargetsStage = ze.f.Create(), this._isReadyForMeshStage = ze.f.Create(), this._beforeEvaluateActiveMeshStage = ze.f.Create(), this._evaluateSubMeshStage = ze.f.Create(), this._preActiveMeshStage = ze.f.Create(), this._cameraDrawRenderTargetStage = ze.f.Create(), this._beforeCameraDrawStage = ze.f.Create(), this._beforeRenderTargetDrawStage = ze.f.Create(), this._beforeRenderingGroupDrawStage = ze.f.Create(), this._beforeRenderingMeshStage = ze.f.Create(), this._afterRenderingMeshStage = ze.f.Create(), this._afterRenderingGroupDrawStage = ze.f.Create(), this._afterCameraDrawStage = ze.f.Create(), this._afterCameraPostProcessStage = ze.f.Create(), this._afterRenderTargetDrawStage = ze.f.Create(), this._afterRenderTargetPostProcessStage = ze.f.Create(), this._afterRenderStage = ze.f.Create(), this._pointerMoveStage = ze.f.Create(), this._pointerDownStage = ze.f.Create(), this._pointerUpStage = ze.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Ke.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const He = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...ie
        };
        this.defaultCameraLayerMask = He.defaultCameraLayerMask, this.defaultRenderableLayerMask = He.defaultRenderableLayerMask, ee = this._engine = ee || Ee.b.LastCreatedEngine, He.virtual ? ee._virtualScenes.push(this) : (Ee.b._LastCreatedScene = this, ee.scenes.push(this)), (ee.getCreationOptions().useLargeWorldRendering || ie?.useFloatingOrigin) && ((0, pe.e)(), this._floatingOriginScene = this, pe.b.Xx = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Xe.b(this), Te.c && (this.postProcessManager = new Te.c(this)), (0, Be.m)() && this.attachControl(), this._createUbo(), Re.e && (this._imageProcessingConfiguration = new Re.e), this.setDefaultCandidateProviders(), He.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = He.useMaterialMeshMap, this.useClonedMeshMap = He.useClonedMeshMap, ie && ie.virtual || ee.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(ee) {
        return this._defaultSubMeshCandidates.data = ee.pW, this._defaultSubMeshCandidates.length = ee.pW.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = ee => this._getDefaultSubMeshCandidates(ee), this.getIntersectingSubMeshCandidates = (ee, ie) => this._getDefaultSubMeshCandidates(ee), this.getCollidingSubMeshCandidates = (ee, ie) => this._getDefaultSubMeshCandidates(ee)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(ee) {
        this._inputManager.pointerX = ee
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(ee) {
        this._inputManager.pointerY = ee
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== ie || this._cachedMaterial !== ee || this._cachedVisibility !== He
      }
      Nf() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(ee, ie) {
        return this._inputManager.simulatePointerMove(ee, ie), this
      }
      simulatePointerDown(ee, ie) {
        return this._inputManager.simulatePointerDown(ee, ie), this
      }
      simulatePointerUp(ee, ie, He) {
        return this._inputManager.simulatePointerUp(ee, ie, He), this
      }
      isPointerCaptured() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(ee)
      }
      attachControl() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(ee, ie, He)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let ee, ie = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const He = this.Nf(),
          ye = He.currentRenderPassId;
        He.currentRenderPassId = this.activeCamera?.renderPassId ?? ye;
        let be = !0;
        for (this._pendingData.length > 0 && (be = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && be && (be = this.depthPeelingRenderer.isReady()), ie && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), ee = 0; ee < this.meshes.length; ee++) {
          const ye = this.meshes[ee];
          if (!ye.pW || 0 === ye.pW.length) continue;
          if (!ye.isReady(!0)) {
            be = !1;
            continue
          }
          const Me = ye.hasThinInstances || "InstancedMesh" === ye.getClassName() || "InstancedLinesMesh" === ye.getClassName() || He.getCaps().instancedArrays && ye.instances.length > 0;
          for (let ee = 0, ie = this._isReadyForMeshStage; ee < ie.length; ee++) {
            ie[ee].action(ye, Me) || (be = !1)
          }
          if (!ie) continue;
          const Ke = ye.material || this.defaultMaterial;
          if (Ke)
            if (Ke._storeEffectOnSubMeshes)
              for (const ee of ye.pW) {
                const ie = ee.iT();
                ie && ie.hasRenderTargetTextures && null != ie.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ie) && (this._processedMaterials.push(ie), this._materialsRenderTargets.concatWithNoDuplicate(ie.getRenderTargetTextures()))
              } else Ke.hasRenderTargetTextures && null != Ke.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Ke) && (this._processedMaterials.push(Ke), this._materialsRenderTargets.concatWithNoDuplicate(Ke.getRenderTargetTextures()))
        }
        if (ie) {
          for (ee = 0; ee < this._materialsRenderTargets.length; ++ee) {
            this._materialsRenderTargets.data[ee].isReadyForRendering() || (be = !1)
          }
          for (ee = 0; ee < this.customRenderTargets.length; ++ee) {
            this.customRenderTargets[ee].isReadyForRendering() || (be = !1)
          }
        }
        for (ee = 0; ee < this.geometries.length; ee++) {
          2 === this.geometries[ee].delayLoadState && (be = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Me of this.activeCameras) Me.isReady(!0) || (be = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (be = !1));
        for (const Me of this.zW) Me.isReady() || (be = !1);
        if (this.proceduralTexturesEnabled)
          for (const Me of this.proceduralTextures) Me.isReady() || (be = !1);
        if (this.layers)
          for (const Me of this.layers) Me.isReady() || (be = !1);
        if (this.effectLayers)
          for (const Me of this.effectLayers) Me.isLayerReady() || (be = !1);
        for (const Me of this._isReadyChecks) Me.isReady() || (be = !1);
        return He.areAllEffectsReady() || (be = !1), He.currentRenderPassId = ye, be
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(ee) {
        this.onBeforeRenderObservable.add(ee)
      }
      unregisterBeforeRender(ee) {
        this.onBeforeRenderObservable.removeCallback(ee)
      }
      registerAfterRender(ee) {
        this.onAfterRenderObservable.add(ee)
      }
      unregisterAfterRender(ee) {
        this.onAfterRenderObservable.removeCallback(ee)
      }
      _executeOnceBeforeRender(ee) {
        const ie = () => {
          ee(), setTimeout((() => {
            this.unregisterBeforeRender(ie)
          }))
        };
        this.registerBeforeRender(ie)
      }
      executeOnceBeforeRender(ee, ie) {
        void 0 !== ie ? setTimeout((() => {
          this._executeOnceBeforeRender(ee)
        }), ie) : this._executeOnceBeforeRender(ee)
      }
      addPendingData(ee) {
        this._pendingData.push(ee)
      }
      removePendingData(ee) {
        const ie = this.isLoading,
          He = this._pendingData.indexOf(ee); - 1 !== He && this._pendingData.splice(He, 1), ie && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(ee) {
        -1 === this._isReadyChecks.indexOf(ee) && this._isReadyChecks.push(ee)
      }
      removeIsReadyCheck(ee) {
        const ie = this._isReadyChecks.indexOf(ee); - 1 !== ie && this._isReadyChecks.splice(ie, 1)
      }
      executeWhenReady(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(ee), null === this._executeWhenReadyTimeoutId && this._checkIsReady(ie)
      }
      async whenReadyAsync() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((ie => {
          this.executeWhenReady((() => {
            ie()
          }), ee)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Me.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && Me.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(ee)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(ee)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Me.e.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(ee, ie, He, ye) {
        this._multiviewSceneUboIsActive = !!(He && ye && this._multiviewSceneUbo), this._viewUpdateFlag === ee.updateFlag && this._projectionUpdateFlag === ie.updateFlag || (this._viewUpdateFlag = ee.updateFlag, this._projectionUpdateFlag = ie.updateFlag, this._viewMatrix = ee, this._projectionMatrix = ie, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new oe.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? se.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = se.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(He, ye) : this._sceneUbo.useUbo && (this._sceneUbo.oie("viewProjection", this._transformMatrix), this._sceneUbo.oie("view", this._viewMatrix), this._sceneUbo.oie("projection", this._projectionMatrix), this._sceneUbo.oie("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(ee, ie) {
        const He = "boolean" === typeof ie ? ie : ie?.trackUBOsInFrame,
          ye = new ke.b(this._engine, void 0, !1, ee ?? "yp", void 0, He);
        return ye.addUniform("viewProjection", 16), ye.addUniform("view", 16), ye.addUniform("projection", 16), ye.addUniform("vEyePosition", 4), ye.addUniform("inverseProjection", 16), ye
      }
      setSceneUniformBuffer(ee) {
        this._sceneUbo = ee, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : oe.p.ZeroReadOnly
      }
      getUniqueId() {
        return Ie.UniqueId
      }
      Nbe(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(ee), ee._resyncLightSources(), ee.parent || ee._addToSceneRootNodes(), be.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(ee)
          })), ie)) {
          const ie = ee.getChildMeshes();
          for (const ee of ie) this.Nbe(ee)
        }
      }
      gL(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this.meshes.indexOf(ee);
        if (-1 !== He && (this.meshes.splice(He, 1), ee.parent || ee._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(ee), this.onMeshRemovedObservable.notifyObservers(ee), ie) {
          const ie = ee.getChildMeshes();
          for (const ee of ie) this.gL(ee)
        }
        return He
      }
      addTransformNode(ee) {
        this._blockEntityCollection || ee.Xx() === this && -1 !== ee._indexInSceneTransformNodesArray || (ee._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(ee), ee.parent || ee._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(ee))
      }
      removeTransformNode(ee) {
        const ie = ee._indexInSceneTransformNodesArray;
        if (-1 !== ie) {
          if (ie !== this.transformNodes.length - 1) {
            const ee = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[ie] = ee, ee._indexInSceneTransformNodesArray = ie
          }
          ee._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), ee.parent || ee._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(ee), ie
      }
      removeSkeleton(ee) {
        const ie = this.skeletons.indexOf(ee);
        return -1 !== ie && (this.skeletons.splice(ie, 1), this.onSkeletonRemovedObservable.notifyObservers(ee), this._executeActiveContainerCleanup(this._activeSkeletons)), ie
      }
      removeMorphTargetManager(ee) {
        const ie = this.morphTargetManagers.indexOf(ee);
        return -1 !== ie && this.morphTargetManagers.splice(ie, 1), ie
      }
      removeLight(ee) {
        const ie = this.lights.indexOf(ee);
        if (-1 !== ie) {
          for (const ie of this.meshes) ie._removeLightSource(ee, !1);
          this.lights.splice(ie, 1), this.sortLightsByPriority(), ee.parent || ee._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(ee)
        }
        return ie
      }
      removeCamera(ee) {
        const ie = this.cameras.indexOf(ee);
        if (-1 !== ie && (this.cameras.splice(ie, 1), ee.parent || ee._removeFromSceneRootNodes()), this.activeCameras) {
          const ie = this.activeCameras.indexOf(ee); - 1 !== ie && this.activeCameras.splice(ie, 1)
        }
        return this.activeCamera === ee && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(ee), ie
      }
      removeParticleSystem(ee) {
        const ie = this.zW.indexOf(ee);
        return -1 !== ie && (this.zW.splice(ie, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(ee), ie
      }
      removeAnimation(ee) {
        const ie = this.animations.indexOf(ee);
        return -1 !== ie && this.animations.splice(ie, 1), ie
      }
      stopAnimation(ee, ie, He) {}
      removeAnimationGroup(ee) {
        const ie = this.animationGroups.indexOf(ee);
        return -1 !== ie && this.animationGroups.splice(ie, 1), this.onAnimationGroupRemovedObservable.notifyObservers(ee), ie
      }
      removeMultiMaterial(ee) {
        const ie = this.multiMaterials.indexOf(ee);
        return -1 !== ie && this.multiMaterials.splice(ie, 1), this.onMultiMaterialRemovedObservable.notifyObservers(ee), ie
      }
      removeMaterial(ee) {
        const ie = ee._indexInSceneMaterialArray;
        if (-1 !== ie && ie < this.materials.length) {
          if (ie !== this.materials.length - 1) {
            const ee = this.materials[this.materials.length - 1];
            this.materials[ie] = ee, ee._indexInSceneMaterialArray = ie
          }
          ee._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(ee), ie
      }
      removeActionManager(ee) {
        const ie = this.actionManagers.indexOf(ee);
        return -1 !== ie && this.actionManagers.splice(ie, 1), ie
      }
      removeTexture(ee) {
        const ie = this.textures.indexOf(ee);
        return -1 !== ie && this.textures.splice(ie, 1), this.onTextureRemovedObservable.notifyObservers(ee), ie
      }
      removeFrameGraph(ee) {
        const ie = this.frameGraphs.indexOf(ee);
        return -1 !== ie && this.frameGraphs.splice(ie, 1), this.onFrameGraphRemovedObservable.notifyObservers(ee), ie
      }
      removeObjectRenderer(ee) {
        const ie = this.objectRenderers.indexOf(ee);
        return -1 !== ie && this.objectRenderers.splice(ie, 1), this.onObjectRendererRemovedObservable.notifyObservers(ee), ie
      }
      removePostProcess(ee) {
        const ie = this.postProcesses.indexOf(ee);
        return -1 !== ie && this.postProcesses.splice(ie, 1), this.onPostProcessRemovedObservable.notifyObservers(ee), ie
      }
      removeEffectLayer(ee) {
        const ie = this.effectLayers.indexOf(ee);
        return -1 !== ie && this.effectLayers.splice(ie, 1), this.onEffectLayerRemovedObservable.notifyObservers(ee), ie
      }
      addLight(ee) {
        if (!this._blockEntityCollection) {
          this.lights.push(ee), this.sortLightsByPriority(), ee.parent || ee._addToSceneRootNodes();
          for (const ie of this.meshes) - 1 === ie.lightSources.indexOf(ee) && (ie.lightSources.push(ee), ie._resyncLightSources());
          be.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(ee)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Ne.c.CompareLightsPriority)
      }
      addCamera(ee) {
        this._blockEntityCollection || (this.cameras.push(ee), be.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(ee)
        })), ee.parent || ee._addToSceneRootNodes())
      }
      addSkeleton(ee) {
        this._blockEntityCollection || (this.skeletons.push(ee), be.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(ee)
        })))
      }
      addParticleSystem(ee) {
        this._blockEntityCollection || (this.zW.push(ee), be.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(ee)
        })))
      }
      addAnimation(ee) {
        this._blockEntityCollection || this.animations.push(ee)
      }
      addAnimationGroup(ee) {
        this._blockEntityCollection || (this.animationGroups.push(ee), be.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(ee)
        })))
      }
      addMultiMaterial(ee) {
        this._blockEntityCollection || (this.multiMaterials.push(ee), be.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(ee)
        })))
      }
      addMaterial(ee) {
        this._blockEntityCollection || ee.Xx() === this && -1 !== ee._indexInSceneMaterialArray || (ee._indexInSceneMaterialArray = this.materials.length, this.materials.push(ee), be.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(ee)
        })))
      }
      addMorphTargetManager(ee) {
        this._blockEntityCollection || this.morphTargetManagers.push(ee)
      }
      addGeometry(ee) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[ee.uniqueId] = this.geometries.length), this.geometries.push(ee))
      }
      addActionManager(ee) {
        this.actionManagers.push(ee)
      }
      addTexture(ee) {
        this._blockEntityCollection || (this.textures.push(ee), this.onNewTextureAddedObservable.notifyObservers(ee))
      }
      addFrameGraph(ee) {
        this.frameGraphs.push(ee), be.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(ee)
        }))
      }
      addObjectRenderer(ee) {
        this.objectRenderers.push(ee), be.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(ee)
        }))
      }
      addPostProcess(ee) {
        this._blockEntityCollection || (this.postProcesses.push(ee), be.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(ee)
        })))
      }
      addEffectLayer(ee) {
        this._blockEntityCollection || (this.effectLayers.push(ee), be.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(ee)
        })))
      }
      switchActiveCamera(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = ee, ie && ee.attachControl())
      }
      setActiveCameraById(ee) {
        const ie = this.getCameraById(ee);
        return ie ? (this.activeCamera = ie, ie) : null
      }
      setActiveCameraByName(ee) {
        const ie = this.getCameraByName(ee);
        return ie ? (this.activeCamera = ie, ie) : null
      }
      getAnimationGroupByName(ee) {
        for (let ie = 0; ie < this.animationGroups.length; ie++)
          if (this.animationGroups[ie].name === ee) return this.animationGroups[ie];
        return null
      }
      _getMaterial(ee, ie) {
        for (let He = 0; He < this.materials.length; He++) {
          const ee = this.materials[He];
          if (ie(ee)) return ee
        }
        if (ee)
          for (let He = 0; He < this.multiMaterials.length; He++) {
            const ee = this.multiMaterials[He];
            if (ie(ee)) return ee
          }
        return null
      }
      getMaterialByUniqueID(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(ee, ie)
      }
      getMaterialByUniqueId(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ie, (ie => ie.uniqueId === ee))
      }
      getMaterialById(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ie, (ie => ie.id === ee))
      }
      getMaterialByName(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ie, (ie => ie.name === ee))
      }
      getLastMaterialById(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let He = this.materials.length - 1; He >= 0; He--)
          if (this.materials[He].id === ee) return this.materials[He];
        if (ie)
          for (let He = this.multiMaterials.length - 1; He >= 0; He--)
            if (this.multiMaterials[He].id === ee) return this.multiMaterials[He];
        return null
      }
      getTextureByUniqueId(ee) {
        for (let ie = 0; ie < this.textures.length; ie++)
          if (this.textures[ie].uniqueId === ee) return this.textures[ie];
        return null
      }
      getTextureByName(ee) {
        for (let ie = 0; ie < this.textures.length; ie++)
          if (this.textures[ie].name === ee) return this.textures[ie];
        return null
      }
      getCameraById(ee) {
        for (let ie = 0; ie < this.cameras.length; ie++)
          if (this.cameras[ie].id === ee) return this.cameras[ie];
        return null
      }
      getCameraByUniqueId(ee) {
        for (let ie = 0; ie < this.cameras.length; ie++)
          if (this.cameras[ie].uniqueId === ee) return this.cameras[ie];
        return null
      }
      getCameraByName(ee) {
        for (let ie = 0; ie < this.cameras.length; ie++)
          if (this.cameras[ie].name === ee) return this.cameras[ie];
        return null
      }
      getBoneById(ee) {
        for (let ie = 0; ie < this.skeletons.length; ie++) {
          const He = this.skeletons[ie];
          for (let ie = 0; ie < He.bones.length; ie++)
            if (He.bones[ie].id === ee) return He.bones[ie]
        }
        return null
      }
      getBoneByName(ee) {
        for (let ie = 0; ie < this.skeletons.length; ie++) {
          const He = this.skeletons[ie];
          for (let ie = 0; ie < He.bones.length; ie++)
            if (He.bones[ie].name === ee) return He.bones[ie]
        }
        return null
      }
      getLightByName(ee) {
        for (let ie = 0; ie < this.lights.length; ie++)
          if (this.lights[ie].name === ee) return this.lights[ie];
        return null
      }
      getLightById(ee) {
        for (let ie = 0; ie < this.lights.length; ie++)
          if (this.lights[ie].id === ee) return this.lights[ie];
        return null
      }
      getLightByUniqueId(ee) {
        for (let ie = 0; ie < this.lights.length; ie++)
          if (this.lights[ie].uniqueId === ee) return this.lights[ie];
        return null
      }
      getParticleSystemById(ee) {
        for (let ie = 0; ie < this.zW.length; ie++)
          if (this.zW[ie].id === ee) return this.zW[ie];
        return null
      }
      getGeometryById(ee) {
        for (let ie = 0; ie < this.geometries.length; ie++)
          if (this.geometries[ie].id === ee) return this.geometries[ie];
        return null
      }
      _getGeometryByUniqueId(ee) {
        if (this._geometriesByUniqueId) {
          const ie = this._geometriesByUniqueId[ee];
          if (void 0 !== ie) return this.geometries[ie]
        } else
          for (let ie = 0; ie < this.geometries.length; ie++)
            if (this.geometries[ie].uniqueId === ee) return this.geometries[ie];
        return null
      }
      getFrameGraphByName(ee) {
        for (let ie = 0; ie < this.frameGraphs.length; ie++)
          if (this.frameGraphs[ie].name === ee) return this.frameGraphs[ie];
        return null
      }
      pushGeometry(ee, ie) {
        return !(!ie && this._getGeometryByUniqueId(ee.uniqueId)) && (this.addGeometry(ee), be.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(ee)
        })), !0)
      }
      removeGeometry(ee) {
        let ie;
        if (this._geometriesByUniqueId) {
          if (ie = this._geometriesByUniqueId[ee.uniqueId], void 0 === ie) return !1
        } else if (ie = this.geometries.indexOf(ee), ie < 0) return !1;
        if (ie !== this.geometries.length - 1) {
          const ee = this.geometries[this.geometries.length - 1];
          ee && (this.geometries[ie] = ee, this._geometriesByUniqueId && (this._geometriesByUniqueId[ee.uniqueId] = ie))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[ee.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(ee), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(ee) {
        for (let ie = 0; ie < this.meshes.length; ie++)
          if (this.meshes[ie].id === ee) return this.meshes[ie];
        return null
      }
      getMeshesById(ee) {
        return this.meshes.filter((function(ie) {
          return ie.id === ee
        }))
      }
      getTransformNodeById(ee) {
        for (let ie = 0; ie < this.transformNodes.length; ie++)
          if (this.transformNodes[ie].id === ee) return this.transformNodes[ie];
        return null
      }
      getTransformNodeByUniqueId(ee) {
        for (let ie = 0; ie < this.transformNodes.length; ie++)
          if (this.transformNodes[ie].uniqueId === ee) return this.transformNodes[ie];
        return null
      }
      getTransformNodesById(ee) {
        return this.transformNodes.filter((function(ie) {
          return ie.id === ee
        }))
      }
      getMeshByUniqueId(ee) {
        for (let ie = 0; ie < this.meshes.length; ie++)
          if (this.meshes[ie].uniqueId === ee) return this.meshes[ie];
        return null
      }
      getLastMeshById(ee) {
        for (let ie = this.meshes.length - 1; ie >= 0; ie--)
          if (this.meshes[ie].id === ee) return this.meshes[ie];
        return null
      }
      getLastTransformNodeById(ee) {
        for (let ie = this.transformNodes.length - 1; ie >= 0; ie--)
          if (this.transformNodes[ie].id === ee) return this.transformNodes[ie];
        return null
      }
      getLastEntryById(ee) {
        let ie;
        for (ie = this.meshes.length - 1; ie >= 0; ie--)
          if (this.meshes[ie].id === ee) return this.meshes[ie];
        for (ie = this.transformNodes.length - 1; ie >= 0; ie--)
          if (this.transformNodes[ie].id === ee) return this.transformNodes[ie];
        for (ie = this.cameras.length - 1; ie >= 0; ie--)
          if (this.cameras[ie].id === ee) return this.cameras[ie];
        for (ie = this.lights.length - 1; ie >= 0; ie--)
          if (this.lights[ie].id === ee) return this.lights[ie];
        for (ie = this.skeletons.length - 1; ie >= 0; ie--) {
          const He = this.skeletons[ie];
          for (let ie = He.bones.length - 1; ie >= 0; ie--)
            if (He.bones[ie].id === ee) return He.bones[ie]
        }
        return null
      }
      getNodeById(ee) {
        const ie = this.getMeshById(ee);
        if (ie) return ie;
        const He = this.getTransformNodeById(ee);
        if (He) return He;
        const ye = this.getLightById(ee);
        if (ye) return ye;
        const be = this.getCameraById(ee);
        if (be) return be;
        const Me = this.getBoneById(ee);
        return Me || null
      }
      getNodeByName(ee) {
        const ie = this.getMeshByName(ee);
        if (ie) return ie;
        const He = this.getTransformNodeByName(ee);
        if (He) return He;
        const ye = this.getLightByName(ee);
        if (ye) return ye;
        const be = this.getCameraByName(ee);
        if (be) return be;
        const Me = this.getBoneByName(ee);
        return Me || null
      }
      getMeshByName(ee) {
        for (let ie = 0; ie < this.meshes.length; ie++)
          if (this.meshes[ie].name === ee) return this.meshes[ie];
        return null
      }
      getTransformNodeByName(ee) {
        for (let ie = 0; ie < this.transformNodes.length; ie++)
          if (this.transformNodes[ie].name === ee) return this.transformNodes[ie];
        return null
      }
      getLastSkeletonById(ee) {
        for (let ie = this.skeletons.length - 1; ie >= 0; ie--)
          if (this.skeletons[ie].id === ee) return this.skeletons[ie];
        return null
      }
      getSkeletonByUniqueId(ee) {
        for (let ie = 0; ie < this.skeletons.length; ie++)
          if (this.skeletons[ie].uniqueId === ee) return this.skeletons[ie];
        return null
      }
      getSkeletonById(ee) {
        for (let ie = 0; ie < this.skeletons.length; ie++)
          if (this.skeletons[ie].id === ee) return this.skeletons[ie];
        return null
      }
      getSkeletonByName(ee) {
        for (let ie = 0; ie < this.skeletons.length; ie++)
          if (this.skeletons[ie].name === ee) return this.skeletons[ie];
        return null
      }
      getMorphTargetManagerById(ee) {
        for (let ie = 0; ie < this.morphTargetManagers.length; ie++)
          if (this.morphTargetManagers[ie].uniqueId === ee) return this.morphTargetManagers[ie];
        return null
      }
      getMorphTargetById(ee) {
        for (let ie = 0; ie < this.morphTargetManagers.length; ++ie) {
          const He = this.morphTargetManagers[ie];
          for (let ie = 0; ie < He.numTargets; ++ie) {
            const ye = He.getTarget(ie);
            if (ye.id === ee) return ye
          }
        }
        return null
      }
      getMorphTargetByName(ee) {
        for (let ie = 0; ie < this.morphTargetManagers.length; ++ie) {
          const He = this.morphTargetManagers[ie];
          for (let ie = 0; ie < He.numTargets; ++ie) {
            const ye = He.getTarget(ie);
            if (ye.name === ee) return ye
          }
        }
        return null
      }
      getPostProcessByName(ee) {
        for (let ie = 0; ie < this.postProcesses.length; ++ie) {
          const He = this.postProcesses[ie];
          if (He.name === ee) return He
        }
        return null
      }
      isActiveMesh(ee) {
        return -1 !== this._activeMeshes.indexOf(ee)
      }
      get uid() {
        return this._uid || (this._uid = ye.h.RandomId()), this._uid
      }
      addExternalData(ee, ie) {
        return this._externalData || (this._externalData = new Fe), this._externalData.add(ee, ie)
      }
      getExternalData(ee) {
        return this._externalData ? this._externalData.get(ee) : null
      }
      getOrAddExternalDataWithFactory(ee, ie) {
        return this._externalData || (this._externalData = new Fe), this._externalData.getOrAddWithFactory(ee, ie)
      }
      removeExternalData(ee) {
        return this._externalData.remove(ee)
      }
      _evaluateSubMesh(ee, ie, He, ye) {
        if (ye || ee.isInFrustum(this._frustumPlanes)) {
          for (let ye = 0, be = this._evaluateSubMeshStage; ye < be.length; ye++) {
            be[ye].action(ie, ee)
          }
          const He = ee.iT();
          null !== He && void 0 !== He && (He.hasRenderTargetTextures && null != He.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(He) && (this._processedMaterials.push(He), this._materialsRenderTargets.concatWithNoDuplicate(He.getRenderTargetTextures())), this._renderingManager.dispatch(ee, ie, He))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(ee) {
        this._preventFreeActiveMeshesAndRenderingGroups !== ee && (ee && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = ee)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let ee = 0; ee < this.activeCameras.length; ee++) {
            const ie = this.activeCameras[ee];
            ie && ie._activeMeshes && ie._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let ee = 0; ee < this.textures.length; ee++) {
            const ie = this.textures[ee];
            ie && ie.renderList && ie.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Ke = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const ee of Ke) ee.objectRenderer._freezeActiveMeshes(ye);
          return this._freezeActiveMeshesCancel = (0, be.f)((() => {
            let ee = !0,
              ie = !0;
            for (const He of Ke) ee && (ee = He.objectRenderer._isFrozen), ie && (ie = null !== He.objectRenderer._freezeActiveMeshesCancel);
            if (ee) return !0;
            if (!ie) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Me, this._skipEvaluateActiveMeshesCompletely = ee, ie?.()
          }), ((ee, ie) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), ie) {
              const ie = "Scene: Timeout while waiting for meshes to be frozen.";
              He ? He(ie) : (HH.e.Error(ie), ee && HH.e.Error(ee))
            } else {
              const ie = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              He ? He(ie) : (HH.e.Error(ie), ee && (HH.e.Error(ee), ee.stack && HH.e.Error(ee.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Me, this._skipEvaluateActiveMeshesCompletely = ee, ye)
              for (let ee = 0; ee < this._activeMeshes.length; ee++) this._activeMeshes.data[ee]._freeze();
            ie && ie()
          } else He && He("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let ee = 0; ee < this.meshes.length; ee++) {
          const ie = this.meshes[ee];
          ie._internalAbstractMeshDataInfo && (ie._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const ee = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const ie of ee) ie.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let ee = 0; ee < this._activeMeshes.length; ee++) this._activeMeshes.data[ee]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(ee) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => ee.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const ee = this._activeMeshes.length;
            for (let ie = 0; ie < ee; ie++) {
              this._activeMeshes.data[ie].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const ee = this._activeParticleSystems.length;
            for (let ie = 0; ie < ee; ie++) this._activeParticleSystems.data[ie].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let be = 0, Me = this._beforeEvaluateActiveMeshStage; be < Me.length; be++) {
          Me[be].action()
        }
        const ee = this.getActiveMeshCandidates(),
          ie = ee.length,
          He = ne.e.Enabled,
          ye = this.customLODSelector;
        for (let be = 0; be < ie; be++) {
          const ie = ee.data[be],
            Me = !ye && !ie.Zx && !ie._internalMeshDataInfo?._LODLevels.length;
          let Ke, Ue;
          if ((Me || (Ke = ie._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Ke ? Ke[1] = -1 : (Ke = [ie, -1], ie._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Ke))), !ie.isBlocked) && (He && this._totalVertices.addCount(ie.getTotalVertices(), !1), ie.isReady() && ie.isEnabled() && !ie.wR.hasAZeroComponent)) {
            if (ie.computeWorldMatrix(), ie.actionManager && ie.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ie), Me) Ue = ie;
            else if (Ue = ye ? ye(ie, this.activeCamera) : ie.getLOD(this.activeCamera), Ke[0] = Ue, Ke[1] = this._frameId, void 0 === Ue || null === Ue) continue;
            if (Ue !== ie && 0 !== Ue.billboardMode && Ue.computeWorldMatrix(), ie._preActivate(), ie.isVisible && ie.visibility > 0 && 0 !== (ie.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || ie.Gf || ie.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(ie), this.activeCamera._activeMeshes.push(ie), Ue !== ie && Ue._activate(this._renderId, !1);
              for (let ee = 0, He = this._preActiveMeshStage; ee < He.length; ee++) {
                He[ee].action(ie)
              }
              ie._activate(this._renderId, !1) && (ie.Zx ? ie._internalAbstractMeshDataInfo._actAsRegularMesh && (Ue = ie) : Ue._internalAbstractMeshDataInfo._onlyForInstances = !1, Ue._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(ie, Ue)), ie._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let ee = 0; ee < this.zW.length; ee++) {
            const ie = this.zW[ee];
            if (!ie.isStarted() || !ie.emitter) continue;
            const He = ie.emitter;
            He.position && !He.isEnabled() || (this._activeParticleSystems.push(ie), ie.animate(), this._renderingManager.dispatchParticles(ie))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(ee) {
        this._skeletonsEnabled && ee.skeleton && (this._activeSkeletons.pushNoDuplicate(ee.skeleton) && (ee.skeleton.prepare(), this._activeBones.addCount(ee.skeleton.bones.length, !1)), ee.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(ee) && this.frameGraph && ee.applySkeleton(ee.skeleton))
      }
      _activeMesh(ee, ie) {
        this._prepareSkeleton(ie);
        let He = ee.nMe || ee.Zx || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || ie.Gf;
        if (ie && ie.pW && ie.pW.length > 0) {
          const ye = this.getActiveSubMeshCandidates(ie),
            be = ye.length;
          He = He || 1 === be;
          for (let Me = 0; Me < be; Me++) {
            const be = ye.data[Me];
            this._evaluateSubMesh(be, ie, ee, He)
          }
        }
      }
      updateTransformMatrix(ee) {
        const ie = this.activeCamera;
        if (ie)
          if (ie._renderingMultiview) {
            const He = ie._rigCameras[0],
              ye = ie._rigCameras[1];
            this.setTransformMatrix(He.getViewMatrix(), He.getProjectionMatrix(ee), ye.getViewMatrix(), ye.getProjectionMatrix(ee))
          } else this.setTransformMatrix(ie.getViewMatrix(), ie.getProjectionMatrix(ee))
      }
      _bindFrameBuffer(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (ee && ee._multiviewTexture ? ee._multiviewTexture._bindFrameBuffer() : ee && ee.outputRenderTarget ? ee.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), ie && this._clearFrameBuffer(ee)
      }
      _clearFrameBuffer(ee) {
        if (ee && ee._multiviewTexture);
        else if (ee && ee.outputRenderTarget && !ee._renderingMultiview) {
          const ie = ee.outputRenderTarget;
          ie.onClearObservable.hasObservers() ? ie.onClearObservable.notifyObservers(this._engine) : ie.skipInitialClear || ee.isRightCamera || (this.autoClear && this._engine.clear(ie.clearColor || this._clearColor, !ie._cleared, !0, !0), ie._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (ee && ee._skipRendering) return;
        const be = this._engine;
        if (this._activeCamera = ee, !this.activeCamera) throw new Error("Active camera not set");
        if (be.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && He) {
          let ie = !0;
          ee._renderingMultiview && ee.outputRenderTarget && (ie = ee.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, ee.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), ee._renderingMultiview && ee.outputRenderTarget && (ee.outputRenderTarget.skipInitialClear = ie)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = ee.outputRenderTarget?.renderPassId ?? ee.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let ye = 0; ye < this._softwareSkinnedMeshes.length; ye++) {
          const ee = this._softwareSkinnedMeshes.data[ye];
          ee.applySkeleton(ee.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), ee.customRenderTargets && ee.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(ee.customRenderTargets), ie && ie.customRenderTargets && ie.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(ie.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let ye = 0, Ue = this._gatherActiveCameraRenderTargetsStage; ye < Ue.length; ye++) {
          Ue[ye].action(this._renderTargets)
        }
        let Me = !1;
        if (this.renderTargetsEnabled) {
          let ee;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            ye.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const ie = this.getBoundingBoxRenderer?.();
            for (let He = 0; He < this._renderTargets.length; He++) {
              const ye = this._renderTargets.data[He];
              if (ye._shouldRender()) {
                this._renderId++;
                const He = ye.activeCamera && ye.activeCamera !== this.activeCamera;
                ie && !ee && (ee = ie.renderList.length > 0 ? ie.renderList.data.slice() : [], ee.length = ie.renderList.length), ye.render(He, this.dumpNextRenderTargets), Me = !0
              }
            }
            ie && ee && (ie.renderList.data = ee, ie.renderList.length = ee.length), ye.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const ie = this.getBoundingBoxRenderer?.();
            ie && !ee && (ee = ie.renderList.length > 0 ? ie.renderList.data.slice() : [], ee.length = ie.renderList.length);
            for (let ee = 0, He = this._cameraDrawRenderTargetStage; ee < He.length; ee++) {
              Me = He[ee].action(this.activeCamera) || Me
            }
            ie && ee && (ie.renderList.data = ee, ie.renderList.length = ee.length)
          }
          this._intermediateRendering = !1
        }
        Me && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || ee._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let ye = 0, Ue = this._beforeCameraDrawStage; ye < Ue.length; ye++) {
          Ue[ye].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Ke = be.snapshotRendering && 1 === be.snapshotRenderingMode;
        Ke && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Ke), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let ye = 0, Ue = this._afterCameraDrawStage; ye < Ue.length; ye++) {
          Ue[ye].action(this.activeCamera)
        }
        if (this.postProcessManager && !ee._multiviewTexture) {
          const ie = ee.outputRenderTarget ? ee.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(ee.isIntermediate, ie)
        }
        for (let ye = 0, Ue = this._afterCameraPostProcessStage; ye < Ue.length; ye++) {
          Ue[ye].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === ee.cameraRigMode || ee._renderingMultiview) return ee._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(ee, void 0, ie), void this.onAfterRenderCameraObservable.notifyObservers(ee);
        if (ee._useMultiviewToSingleView) this._renderMultiviewToSingleView(ee);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(ee);
          for (let ie = 0; ie < ee._rigCameras.length; ie++) this._renderForCamera(ee._rigCameras[ie], ee)
        }
        this._activeCamera = ee, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(ee)
      }
      _checkIntersections() {
        for (let ee = 0; ee < this._meshesForIntersections.length; ee++) {
          const ie = this._meshesForIntersections.data[ee];
          if (ie.actionManager)
            for (let ee = 0; ie.actionManager && ee < ie.actionManager.actions.length; ee++) {
              const He = ie.actionManager.actions[ee];
              if (12 === He.trigger || 13 === He.trigger) {
                const ee = He.getTriggerParameter(),
                  ye = ee.mesh ? ee.mesh : ee,
                  be = ye.CMe(ie, ee.usePreciseIntersection),
                  Me = ie._intersectionsInProgress.indexOf(ye);
                be && -1 === Me ? 12 === He.trigger ? (He._executeCurrent(fe.CreateNew(ie, void 0, ye)), ie._intersectionsInProgress.push(ye)) : 13 === He.trigger && ie._intersectionsInProgress.push(ye) : !be && Me > -1 && (13 === He.trigger && He._executeCurrent(fe.CreateNew(ie, void 0, ye)), ie.actionManager.hasSpecificTrigger(13, (ee => {
                  const ie = ee.mesh ? ee.mesh : ee;
                  return ye === ie
                })) && 13 !== He.trigger || ie._intersectionsInProgress.splice(Me, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(ee) {}
      _animate(ee) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let ee = Math.max(UH.MinDeltaTime, Math.min(this._engine.getDeltaTime(), UH.MaxDeltaTime)) + this._timeAccumulator;
          const ie = this._engine.getTimeStep(),
            He = 1e3 / ie / 1e3;
          let ye = 0;
          const be = this._engine.getLockstepMaxSteps();
          let Me = Math.floor(ee / ie);
          for (Me = Math.min(Me, be); ee > 0 && ye < Me;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = ie * He, this._animate(ie), this.onAfterAnimationsObservable.notifyObservers(this), this.nS && this._advancePhysicsEngineStep(ie), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, ye++, ee -= ie;
          this._timeAccumulator = ee < 0 ? 0 : ee
        } else {
          const ee = this.useConstantAnimationDeltaTime ? 16 : Math.max(UH.MinDeltaTime, Math.min(this._engine.getDeltaTime(), UH.MaxDeltaTime));
          this._animationRatio = .06 * ee, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.nS && this._advancePhysicsEngineStep(ee)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(ee) {
        if (ee?.outputRenderTarget && !ee?.isRigCamera && (ee.outputRenderTarget._cleared = !1), ee?.rigCameras?.length)
          for (let ie = 0; ie < ee.rigCameras.length; ++ie) {
            const He = ee.rigCameras[ie].outputRenderTarget;
            He && (He._cleared = !1)
          }
      }
      resetDrawCache(ee) {
        if (this.meshes)
          for (const ie of this.meshes) ie.resetDrawCache(ee)
      }
      _renderWithFrameGraph() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ie = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, ee)
          for (const He of this.cameras)
            if (He.update(), 0 !== He.cameraRigMode)
              for (let ee = 0; ee < He._rigCameras.length; ee++) He._rigCameras[ee].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(ie)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(ee) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const ie = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), ye.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let ee = 0; ee < this._renderTargets.length; ee++) {
            const He = this._renderTargets.data[ee],
              ye = He.activeCamera || ie;
            this._renderRenderTarget(He, ye, !0, this.dumpNextRenderTargets)
          }
          ye.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let He = 0, ye = this._beforeClearStage; He < ye.length; He++) {
          ye[He].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const ie = this.getActiveMeshCandidates(),
            He = ie.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let ee = 0; ee < He; ee++) {
                const He = ie.data[ee];
                He._internalAbstractMeshDataInfo._wasActiveLastFrame && He.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const ee = this._activeParticleSystems.length;
              for (let ie = 0; ie < ee; ie++) this._activeParticleSystems.data[ie].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let ye = 0; ye < He; ye++) {
              const He = ie.data[ye];
              He._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, He.isBlocked || (this._totalVertices.addCount(He.getTotalVertices(), !1), He.isReady() && He.isEnabled() && !He.wR.hasAZeroComponent && (He.computeWorldMatrix(ee), He.actionManager && He.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(He)))
            }
            if (this.particlesEnabled)
              for (let ee = 0; ee < this.zW.length; ee++) {
                const ie = this.zW[ee];
                if (!ie.isStarted() || !ie.emitter) continue;
                const He = ie.emitter;
                He.position && !He.isEnabled() || (this._activeParticleSystems.push(ie), ie.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, ee._shouldRender()) {
          if (this._renderId++, this.activeCamera = ie, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), ee.render(He, ye)
        }
        this._intermediateRendering = !1
      }
      render() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.RZ) return;
        const He = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(ee, ie)
        } finally {
          this._renderingMeshEvaluationDepth = He
        }
      }
      _renderFrame(ee, ie) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), pe.b.Xx = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const He of this.activeCameras) this._checkCameraRenderTarget(He);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), ie || this.animate();
        for (let He = 0, ye = this._beforeCameraUpdateStage; He < ye.length; He++) {
          ye[He].action()
        }
        if (ee)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let He = 0; He < this.activeCameras.length; He++) {
              const ee = this.activeCameras[He];
              if (ee.update(), 0 !== ee.cameraRigMode)
                for (let ie = 0; ie < ee._rigCameras.length; ie++) ee._rigCameras[ie].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let He = 0; He < this.activeCamera._rigCameras.length; He++) this.activeCamera._rigCameras[He].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(ee, ie);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const ee = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            ye.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let ie = 0; ie < this.customRenderTargets.length; ie++) {
              const He = this.customRenderTargets[ie],
                ye = He.activeCamera || this.activeCamera;
              this._renderRenderTarget(He, ye, ee !== ye, this.dumpNextRenderTargets)
            }
            ye.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = ee?.renderPassId ?? 0, this.activeCamera = ee, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let ie = 0, He = this._beforeClearStage; ie < He.length; ie++) {
            He[ie].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let ie = 0, He = this._gatherRenderTargetsStage; ie < He.length; ie++) {
            He[ie].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ie = 0; ie < this.activeCameras.length; ie++) this._processSubCameras(this.activeCameras[ie], ie > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let He = 0, ye = this._afterRenderStage; He < ye.length; He++) {
          ye[He].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let ee = 0; ee < this._toBeDisposed.length; ee++) {
            const ie = this._toBeDisposed[ee];
            ie && ie.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let ee = 0; ee < this.materials.length; ee++) this.materials[ee].freeze()
      }
      unfreezeMaterials() {
        for (let ee = 0; ee < this.materials.length; ee++) this.materials[ee].unfreeze()
      }
      dispose() {
        if (this.RZ) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, ge.c)(this.stopAllAnimations)) {
          for (const ee of this._activeAnimatables) ee.onAnimationEndObservable.clear(), ee.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const ee = this._activeRequests.slice();
        for (const Me of ee) Me.abort();
        this._activeRequests.length = 0;
        try {
          this.Bx.notifyObservers(this)
        } catch (be) {
          HH.e.Error("An error occurred while calling onDisposeObservable!", be)
        }
        this.detachControl();
        const ie = this._engine.getInputElement?.();
        if (ie)
          for (let Me = 0; Me < this.cameras.length; Me++) this.cameras[Me].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (ee => ee.dispose(!0))), this._disposeList(this.transformNodes, (ee => ee.dispose(!0)));
        const He = this.cameras;
        this._disposeList(He), this._disposeList(this.zW), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let ye = this._engine.scenes.indexOf(this);
        if (ye > -1 && this._engine.scenes.splice(ye, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, pe.i)(), Ee.b._LastCreatedScene === this) {
          Ee.b._LastCreatedScene = null;
          let ee = Ee.b.Instances.length - 1;
          for (; ee >= 0;) {
            const ie = Ee.b.Instances[ee];
            if (ie.scenes.length > 0) {
              Ee.b._LastCreatedScene = ie.scenes[this._engine.scenes.length - 1];
              break
            }
            ee--
          }
        }
        ye = this._engine._virtualScenes.indexOf(this), ye > -1 && this._engine._virtualScenes.splice(ye, 1), this._engine.wipeCaches(!0), this.Bx.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(ee, ie) {
        const He = ee.slice(0);
        ie = ie ?? (ee => ee.dispose());
        for (const ye of He) ie(ye);
        ee.length = 0
      }
      get RZ() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let ee = 0; ee < this.meshes.length; ee++) {
          const ie = this.meshes[ee].geometry;
          ie && ie.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const ee of this.textures) {
          ee._buffer && (ee._buffer = null)
        }
      }
      getWorldExtends(ee) {
        const ie = new oe.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          He = new oe.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        ee = ee || (() => !0);
        const ye = this.meshes.filter(ee);
        for (const be of ye) {
          if (be.computeWorldMatrix(!0), !be.pW || 0 === be.pW.length || be.infiniteDistance) continue;
          const ee = be.WC(),
            ye = ee.boundingBox.minimumWorld,
            Me = ee.boundingBox.maximumWorld;
          oe.p.CheckExtends(ye, ie, He), oe.p.CheckExtends(Me, ie, He)
        }
        return ie.x === Number.MAX_VALUE ? {
          min: oe.p.Zero(),
          max: oe.p.Zero()
        } : {
          min: ie,
          max: He
        }
      }
      createPickingRay(ee, ie, He, ye) {
        throw (0, ge.l)("Ray")
      }
      createPickingRayToRef(ee, ie, He, ye, be) {
        throw (0, ge.l)("Ray")
      }
      createPickingRayInCameraSpace(ee, ie, He) {
        throw (0, ge.l)("Ray")
      }
      createPickingRayInCameraSpaceToRef(ee, ie, He, ye) {
        throw (0, ge.l)("Ray")
      }
      tq(ee, ie, He, ye, be, Me) {
        const Ke = (0, ge.l)("Ray", !0);
        return Ke && HH.e.Warn(Ke), new qe.e
      }
      pickWithBoundingInfo(ee, ie, He, ye, be) {
        const Me = (0, ge.l)("Ray", !0);
        return Me && HH.e.Warn(Me), new qe.e
      }
      pickWithRay(ee, ie, He, ye) {
        throw (0, ge.l)("Ray")
      }
      multiPick(ee, ie, He, ye, be) {
        throw (0, ge.l)("Ray")
      }
      multiPickWithRay(ee, ie, He) {
        throw (0, ge.l)("Ray")
      }
      setPointerOverMesh(ee, ie, He) {
        this._inputManager.setPointerOverMesh(ee, ie, He)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const ee of this.geometries) ee._rebuild();
        for (const ee of this.meshes) ee._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const ee of this._components) ee.rebuild();
        for (const ee of this.zW) ee.rebuild();
        if (this.spriteManagers)
          for (const ee of this.spriteManagers) ee.rebuild()
      }
      _rebuildTextures() {
        for (const ee of this.textures) ee._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(ee, ie, He) {
        if (void 0 === ie) return ee;
        const ye = [];
        for (const be in ee) {
          const Me = ee[be];
          Je.b && Je.b.MatchesQuery(Me, ie) && (!He || He(Me)) && ye.push(Me)
        }
        return ye
      }
      getMeshesByTags(ee, ie) {
        return this._getByTags(this.meshes, ee, ie)
      }
      getCamerasByTags(ee, ie) {
        return this._getByTags(this.cameras, ee, ie)
      }
      getLightsByTags(ee, ie) {
        return this._getByTags(this.lights, ee, ie)
      }
      getMaterialByTags(ee, ie) {
        return this._getByTags(this.materials, ee, ie).concat(this._getByTags(this.multiMaterials, ee, ie))
      }
      getTransformNodesByTags(ee, ie) {
        return this._getByTags(this.transformNodes, ee, ie)
      }
      setRenderingOrder(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(ee, ie, He, ye)
      }
      setRenderingAutoClearDepthStencil(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(ee, ie, He, ye)
      }
      getAutoClearDepthStencilSetup(ee) {
        return this._renderingManager.getAutoClearDepthStencilSetup(ee)
      }
      _forceBlockMaterialDirtyMechanism(ee) {
        this._blockMaterialDirtyMechanism = ee
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(ee) {
        this._blockMaterialDirtyMechanism !== ee && (this._blockMaterialDirtyMechanism = ee, ee || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(ee, ie) {
        if (!this._blockMaterialDirtyMechanism)
          for (const He of this.materials) ie && !ie(He) || He.tye(ee)
      }
      _loadFile(ee, ie, He, ye, be, Me, Ke) {
        const Ue = (0, he.o)(ee, ie, He, ye ? this.offlineProvider : void 0, be, Me, Ke);
        return this._activeRequests.push(Ue), Ue.onCompleteObservable.add((ee => {
          this._activeRequests.splice(this._activeRequests.indexOf(ee), 1)
        })), Ue
      }
      async _loadFileAsync(ee, ie, He, ye, be) {
        return await new Promise(((Me, Ke) => {
          this._loadFile(ee, (ee => {
            Me(ee)
          }), ie, He, ye, ((ee, ie) => {
            Ke(ie)
          }), be)
        }))
      }
      async _loadDelayedFileAsync(ee, ie, He) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const ye = `${ee}|${ie?"binary":"string"}`;
        let be = this._delayedFileRequests.get(ye);
        if (!be) {
          be = ie ? this._loadFileAsync(ee, void 0, He, !0) : this._loadFileAsync(ee, void 0, He, !1);
          const Me = be;
          (async () => {
            try {
              await Me
            } catch {}
            this._delayedFileRequests?.delete(ye)
          })(), this._delayedFileRequests.set(ye, be)
        }
        return await be
      }
      _requestFile(ee, ie, He, ye, be, Me, Ke) {
        const Ue = (0, he.x)(ee, ie, He, ye ? this.offlineProvider : void 0, be, Me, Ke);
        return this._activeRequests.push(Ue), Ue.onCompleteObservable.add((ee => {
          this._activeRequests.splice(this._activeRequests.indexOf(ee), 1)
        })), Ue
      }
      async _requestFileAsync(ee, ie, He, ye, be) {
        return await new Promise(((Me, Ke) => {
          this._requestFile(ee, (ee => {
            Me(ee)
          }), ie, He, ye, (ee => {
            Ke(ee)
          }), be)
        }))
      }
      _readFile(ee, ie, He, ye, be) {
        const Me = (0, he.s)(ee, ie, He, ye, be);
        return this._activeRequests.push(Me), Me.onCompleteObservable.add((ee => {
          this._activeRequests.splice(this._activeRequests.indexOf(ee), 1)
        })), Me
      }
      async _readFileAsync(ee, ie, He) {
        return await new Promise(((ye, be) => {
          this._readFile(ee, (ee => {
            ye(ee)
          }), ie, He, (ee => {
            be(ee)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, ge.l)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(ee) {
        return this.setActiveCameraById(ee)
      }
      getMaterialByID(ee) {
        return this.getMaterialById(ee)
      }
      getLastMaterialByID(ee) {
        return this.getLastMaterialById(ee)
      }
      getTextureByUniqueID(ee) {
        return this.getTextureByUniqueId(ee)
      }
      getCameraByID(ee) {
        return this.getCameraById(ee)
      }
      getCameraByUniqueID(ee) {
        return this.getCameraByUniqueId(ee)
      }
      getBoneByID(ee) {
        return this.getBoneById(ee)
      }
      getLightByID(ee) {
        return this.getLightById(ee)
      }
      getLightByUniqueID(ee) {
        return this.getLightByUniqueId(ee)
      }
      getParticleSystemByID(ee) {
        return this.getParticleSystemById(ee)
      }
      getGeometryByID(ee) {
        return this.getGeometryById(ee)
      }
      getMeshByID(ee) {
        return this.getMeshById(ee)
      }
      getMeshByUniqueID(ee) {
        return this.getMeshByUniqueId(ee)
      }
      getLastMeshByID(ee) {
        return this.getLastMeshById(ee)
      }
      getMeshesByID(ee) {
        return this.getMeshesById(ee)
      }
      getTransformNodeByID(ee) {
        return this.getTransformNodeById(ee)
      }
      getTransformNodeByUniqueID(ee) {
        return this.getTransformNodeByUniqueId(ee)
      }
      getTransformNodesByID(ee) {
        return this.getTransformNodesById(ee)
      }
      getNodeByID(ee) {
        return this.getNodeById(ee)
      }
      getLastEntryByID(ee) {
        return this.getLastEntryById(ee)
      }
      getLastSkeletonByID(ee) {
        return this.getLastSkeletonById(ee)
      }
    }
    UH.FOGMODE_NONE = 0, UH.FOGMODE_EXP = 1, UH.FOGMODE_EXP2 = 2, UH.FOGMODE_LINEAR = 3, UH.MinDeltaTime = 1, UH.MaxDeltaTime = 1e3, UH._OriginalDefaultMaterialFactory = UH.DefaultMaterialFactory;
    let FH = !1;

    function JH() {
      FH || (FH = !0, (0, yH.e)("BABYLON.Scene", UH))
    }(Qe = UH.prototype).sortActiveAnimatables ?? (Qe.sortActiveAnimatables = (0, ge.h)("Scene", "sortActiveAnimatables")), (ei = UH.prototype).beginWeightedAnimation ?? (ei.beginWeightedAnimation = (0, ge.h)("Scene", "beginWeightedAnimation")), (ii = UH.prototype).beginAnimation ?? (ii.beginAnimation = (0, ge.h)("Scene", "beginAnimation")), (Hi = UH.prototype).beginHierarchyAnimation ?? (Hi.beginHierarchyAnimation = (0, ge.h)("Scene", "beginHierarchyAnimation")), (yi = UH.prototype).beginDirectAnimation ?? (yi.beginDirectAnimation = (0, ge.h)("Scene", "beginDirectAnimation")), (bi = UH.prototype).beginDirectHierarchyAnimation ?? (bi.beginDirectHierarchyAnimation = (0, ge.h)("Scene", "beginDirectHierarchyAnimation")), (Mi = UH.prototype).getAnimatableByTarget ?? (Mi.getAnimatableByTarget = (0, ge.h)("Scene", "getAnimatableByTarget")), (Ki = UH.prototype).getAllAnimatablesByTarget ?? (Ki.getAllAnimatablesByTarget = (0, ge.h)("Scene", "getAllAnimatablesByTarget")), (Ui = UH.prototype).stopAllAnimations ?? (Ui.stopAllAnimations = (0, ge.h)("Scene", "stopAllAnimations")), (Fi = UH.prototype).getSoundByName ?? (Fi.getSoundByName = (0, ge.h)("Scene", "getSoundByName")), (Ji = UH.prototype).createOrUpdateSelectionOctree ?? (Ji.createOrUpdateSelectionOctree = (0, ge.h)("Scene", "createOrUpdateSelectionOctree")), (oi = UH.prototype).createDefaultLight ?? (oi.createDefaultLight = (0, ge.h)("Scene", "createDefaultLight")), (Ri = UH.prototype).createDefaultCamera ?? (Ri.createDefaultCamera = (0, ge.h)("Scene", "createDefaultCamera")), (ki = UH.prototype).createDefaultCameraOrLight ?? (ki.createDefaultCameraOrLight = (0, ge.h)("Scene", "createDefaultCameraOrLight")), (qi = UH.prototype).createDefaultSkybox ?? (qi.createDefaultSkybox = (0, ge.h)("Scene", "createDefaultSkybox")), (fi = UH.prototype).createDefaultEnvironment ?? (fi.createDefaultEnvironment = (0, ge.h)("Scene", "createDefaultEnvironment")), (Ti = UH.prototype).createDefaultVRExperience ?? (Ti.createDefaultVRExperience = (0, ge.h)("Scene", "createDefaultVRExperience")), (Xi = UH.prototype).createDefaultXRExperienceAsync ?? (Xi.createDefaultXRExperienceAsync = (0, ge.h)("Scene", "createDefaultXRExperienceAsync")), (zi = UH.prototype).getGlowLayerByName ?? (zi.getGlowLayerByName = (0, ge.h)("Scene", "getGlowLayerByName")), (Bi = UH.prototype).getHighlightLayerByName ?? (Bi.getHighlightLayerByName = (0, ge.h)("Scene", "getHighlightLayerByName")), (Ei = UH.prototype).getSelectionOutlineLayerByName ?? (Ei.getSelectionOutlineLayerByName = (0, ge.h)("Scene", "getSelectionOutlineLayerByName")), (gi = UH.prototype).removeLensFlareSystem ?? (gi.removeLensFlareSystem = (0, ge.h)("Scene", "removeLensFlareSystem")), (Oi = UH.prototype).addLensFlareSystem ?? (Oi.addLensFlareSystem = (0, ge.h)("Scene", "addLensFlareSystem")), (di = UH.prototype).getLensFlareSystemByName ?? (di.getLensFlareSystemByName = (0, ge.h)("Scene", "getLensFlareSystemByName")), (Wi = UH.prototype).getLensFlareSystemByID ?? (Wi.getLensFlareSystemByID = (0, ge.h)("Scene", "getLensFlareSystemByID")), (ti = UH.prototype).getLensFlareSystemById ?? (ti.getLensFlareSystemById = (0, ge.h)("Scene", "getLensFlareSystemById")), (Zi = UH.prototype).getPhysicsEngine ?? (Zi.getPhysicsEngine = (0, ge.h)("Scene", "getPhysicsEngine")), (wi = UH.prototype).enablePhysics ?? (wi.enablePhysics = (0, ge.h)("Scene", "enablePhysics")), (Di = UH.prototype).disablePhysicsEngine ?? (Di.disablePhysicsEngine = (0, ge.h)("Scene", "disablePhysicsEngine")), (Pi = UH.prototype).isPhysicsEnabled ?? (Pi.isPhysicsEnabled = (0, ge.h)("Scene", "isPhysicsEnabled")), (Ai = UH.prototype).deleteCompoundImpostor ?? (Ai.deleteCompoundImpostor = (0, ge.h)("Scene", "deleteCompoundImpostor")), (Yi = UH.prototype).removeReflectionProbe ?? (Yi.removeReflectionProbe = (0, ge.h)("Scene", "removeReflectionProbe")), (Vi = UH.prototype).addReflectionProbe ?? (Vi.addReflectionProbe = (0, ge.h)("Scene", "addReflectionProbe")), (ai = UH.prototype).getBoundingBoxRenderer ?? (ai.getBoundingBoxRenderer = (0, ge.h)("Scene", "getBoundingBoxRenderer")), (ci = UH.prototype).enableDepthRenderer ?? (ci.enableDepthRenderer = (0, ge.h)("Scene", "enableDepthRenderer")), (xi = UH.prototype).disableDepthRenderer ?? (xi.disableDepthRenderer = (0, ge.h)("Scene", "disableDepthRenderer")), (Li = UH.prototype).enableFluidRenderer ?? (Li.enableFluidRenderer = (0, ge.h)("Scene", "enableFluidRenderer")), (Ci = UH.prototype).disableFluidRenderer ?? (Ci.disableFluidRenderer = (0, ge.h)("Scene", "disableFluidRenderer")), (vi = UH.prototype).enableGeometryBufferRenderer ?? (vi.enableGeometryBufferRenderer = (0, ge.h)("Scene", "enableGeometryBufferRenderer")), (ui = UH.prototype).disableGeometryBufferRenderer ?? (ui.disableGeometryBufferRenderer = (0, ge.h)("Scene", "disableGeometryBufferRenderer")), (mi = UH.prototype).enableIblCdfGenerator ?? (mi.enableIblCdfGenerator = (0, ge.h)("Scene", "enableIblCdfGenerator")), (li = UH.prototype).disableIblCdfGenerator ?? (li.disableIblCdfGenerator = (0, ge.h)("Scene", "disableIblCdfGenerator")), (Si = UH.prototype).getOutlineRenderer ?? (Si.getOutlineRenderer = (0, ge.h)("Scene", "getOutlineRenderer")), (ni = UH.prototype).enablePrePassRenderer ?? (ni.enablePrePassRenderer = (0, ge.h)("Scene", "enablePrePassRenderer")), (ji = UH.prototype).disablePrePassRenderer ?? (ji.disablePrePassRenderer = (0, ge.h)("Scene", "disablePrePassRenderer")), (si = UH.prototype).enableSubSurfaceForPrePass ?? (si.enableSubSurfaceForPrePass = (0, ge.h)("Scene", "enableSubSurfaceForPrePass")), (Ii = UH.prototype).disableSubSurfaceForPrePass ?? (Ii.disableSubSurfaceForPrePass = (0, ge.h)("Scene", "disableSubSurfaceForPrePass")), (Ni = UH.prototype).pickSprite ?? (Ni.pickSprite = (0, ge.h)("Scene", "pickSprite")), (Gi = UH.prototype).pickSpriteWithRay ?? (Gi.pickSpriteWithRay = (0, ge.h)("Scene", "pickSpriteWithRay")), (ri = UH.prototype).multiPickSprite ?? (ri.multiPickSprite = (0, ge.h)("Scene", "multiPickSprite")), (Qi = UH.prototype).multiPickSpriteWithRay ?? (Qi.multiPickSpriteWithRay = (0, ge.h)("Scene", "multiPickSpriteWithRay")), (eH = UH.prototype).setPointerOverSprite ?? (eH.setPointerOverSprite = (0, ge.h)("Scene", "setPointerOverSprite")), (iH = UH.prototype).getPointerOverSprite ?? (iH.getPointerOverSprite = (0, ge.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(UH.prototype, "mainSoundTrack") || Object.defineProperty(UH.prototype, "mainSoundTrack", (0, ge.d)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(UH.prototype, "soundTracks") || Object.defineProperty(UH.prototype, "soundTracks", (0, ge.d)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(UH.prototype, "audioEnabled") || Object.defineProperty(UH.prototype, "audioEnabled", (0, ge.d)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(UH.prototype, "headphone") || Object.defineProperty(UH.prototype, "headphone", (0, ge.d)("Scene", "headphone")), Object.getOwnPropertyDescriptor(UH.prototype, "audioListenerPositionProvider") || Object.defineProperty(UH.prototype, "audioListenerPositionProvider", (0, ge.d)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(UH.prototype, "audioListenerRotationProvider") || Object.defineProperty(UH.prototype, "audioListenerRotationProvider", (0, ge.d)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(UH.prototype, "audioPositioningRefreshRate") || Object.defineProperty(UH.prototype, "audioPositioningRefreshRate", (0, ge.d)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(UH.prototype, "selectionOctree") || Object.defineProperty(UH.prototype, "selectionOctree", (0, ge.d)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(UH.prototype, "debugLayer") || Object.defineProperty(UH.prototype, "debugLayer", (0, ge.d)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(UH.prototype, "gamepadManager") || Object.defineProperty(UH.prototype, "gamepadManager", (0, ge.d)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(UH.prototype, "simplificationQueue") || Object.defineProperty(UH.prototype, "simplificationQueue", (0, ge.d)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(UH.prototype, "onBeforePhysicsObservable") || Object.defineProperty(UH.prototype, "onBeforePhysicsObservable", (0, ge.d)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(UH.prototype, "onAfterPhysicsObservable") || Object.defineProperty(UH.prototype, "onAfterPhysicsObservable", (0, ge.d)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(UH.prototype, "reflectionProbes") || Object.defineProperty(UH.prototype, "reflectionProbes", (0, ge.d)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(UH.prototype, "forceShowBoundingBoxes") || Object.defineProperty(UH.prototype, "forceShowBoundingBoxes", (0, ge.d)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(UH.prototype, "depthPeelingRenderer") || Object.defineProperty(UH.prototype, "depthPeelingRenderer", (0, ge.d)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(UH.prototype, "useOrderIndependentTransparency") || Object.defineProperty(UH.prototype, "useOrderIndependentTransparency", (0, ge.d)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(UH.prototype, "fluidRenderer") || Object.defineProperty(UH.prototype, "fluidRenderer", (0, ge.d)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(UH.prototype, "geometryBufferRenderer") || Object.defineProperty(UH.prototype, "geometryBufferRenderer", (0, ge.d)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(UH.prototype, "iblCdfGenerator") || Object.defineProperty(UH.prototype, "iblCdfGenerator", (0, ge.d)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(UH.prototype, "prePassRenderer") || Object.defineProperty(UH.prototype, "prePassRenderer", (0, ge.d)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(UH.prototype, "subSurfaceConfiguration") || Object.defineProperty(UH.prototype, "subSurfaceConfiguration", (0, ge.d)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(UH.prototype, "spriteManagers") || Object.defineProperty(UH.prototype, "spriteManagers", (0, ge.d)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(UH.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(UH.prototype, "onBeforeSpritesRenderingObservable", (0, ge.d)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(UH.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(UH.prototype, "onAfterSpritesRenderingObservable", (0, ge.d)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41279: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      f: () => be
    });
    class ye {}
    ye.NAME_EFFECTLAYER = "EffectLayer", ye.NAME_LAYER = "Layer", ye.NAME_LENSFLARESYSTEM = "LensFlareSystem", ye.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", ye.NAME_PARTICLESYSTEM = "ParticleSystem", ye.NAME_GAMEPAD = "Gamepad", ye.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", ye.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", ye.NAME_PREPASSRENDERER = "PrePassRenderer", ye.NAME_DEPTHRENDERER = "DepthRenderer", ye.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", ye.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", ye.NAME_SPRITE = "Sprite", ye.NAME_SUBSURFACE = "SubSurface", ye.NAME_OUTLINERENDERER = "Outline", ye.NAME_PROCEDURALTEXTURE = "ProceduralTexture", ye.NAME_SHADOWGENERATOR = "ShadowGenerator", ye.NAME_OCTREE = "FMe", ye.NAME_PHYSICSENGINE = "PhysicsEngine", ye.NAME_AUDIO = "Audio", ye.NAME_FLUIDRENDERER = "FluidRenderer", ye.NAME_IBLCDFGENERATOR = "iblCDFGenerator", ye.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", ye.STEP_ISREADYFORMESH_EFFECTLAYER = 0, ye.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, ye.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, ye.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, ye.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, ye.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, ye.STEP_BEFORECAMERADRAW_PREPASS = 0, ye.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, ye.STEP_BEFORECAMERADRAW_LAYER = 2, ye.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, ye.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, ye.STEP_BEFORERENDERINGMESH_PREPASS = 0, ye.STEP_BEFORERENDERINGMESH_OUTLINE = 1, ye.STEP_AFTERRENDERINGMESH_PREPASS = 0, ye.STEP_AFTERRENDERINGMESH_OUTLINE = 1, ye.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, ye.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, ye.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, ye.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, ye.STEP_BEFORECLEAR_PREPASS = 1, ye.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, ye.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, ye.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, ye.STEP_AFTERCAMERADRAW_PREPASS = 0, ye.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, ye.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, ye.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, ye.STEP_AFTERCAMERADRAW_LAYER = 4, ye.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, ye.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, ye.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, ye.STEP_AFTERRENDER_AUDIO = 0, ye.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, ye.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, ye.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, ye.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, ye.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, ye.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, ye.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, ye.STEP_POINTERMOVE_SPRITE = 0, ye.STEP_POINTERDOWN_SPRITE = 0, ye.STEP_POINTERUP_SPRITE = 0;
    class be extends Array {
      constructor(ee) {
        super(...ee)
      }
      static Create() {
        return Object.create(be.prototype)
      }
      registerStep(ee, ie, He) {
        let ye, be = 0;
        for (; be < this.length; be++) {
          if (ye = this[be].index, ee < ye) break
        }
        this.splice(be, 0, {
          index: ee,
          component: ie,
          action: He.bind(ie)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41113: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => Ue,
      i: () => ye,
      l: () => be,
      m: () => Me
    });

    function ye(ee, ie, He, ye, be, Me) {
      function Ke(ee) {
        if (void 0 !== ee && "function" !== typeof ee) throw new TypeError("Function expected");
        return ee
      }
      for (var Ue, Fe = ye.kind, Je = "getter" === Fe ? "get" : "setter" === Fe ? "set" : "value", oe = !ie && ee ? ye.static ? ee : ee.prototype : null, Re = ie || (oe ? Object.getOwnPropertyDescriptor(oe, ye.name) : {}), ke = !1, qe = He.length - 1; qe >= 0; qe--) {
        var fe = {};
        for (var Te in ye) fe[Te] = "access" === Te ? {} : ye[Te];
        for (var Te in ye.access) fe.access[Te] = ye.access[Te];
        fe.addInitializer = function(ee) {
          if (ke) throw new TypeError("Cannot add initializers after decoration has completed");
          Me.push(Ke(ee || null))
        };
        var pe = (0, He[qe])("accessor" === Fe ? {
          get: Re.get,
          set: Re.set
        } : Re[Je], fe);
        if ("accessor" === Fe) {
          if (void 0 === pe) continue;
          if (null === pe || "object" !== typeof pe) throw new TypeError("Object expected");
          (Ue = Ke(pe.get)) && (Re.get = Ue), (Ue = Ke(pe.set)) && (Re.set = Ue), (Ue = Ke(pe.init)) && be.unshift(Ue)
        } else(Ue = Ke(pe)) && ("field" === Fe ? be.unshift(Ue) : Re[Je] = Ue)
      }
      oe && Object.defineProperty(oe, ye.name, Re), ke = !0
    }

    function be(ee, ie, He) {
      for (var ye = arguments.length > 2, be = 0; be < ie.length; be++) He = ye ? ie[be].call(ee, He) : ie[be].call(ee);
      return ye ? He : void 0
    }

    function Me(ee, ie, He) {
      return "symbol" === typeof ie && (ie = ie.description ? "[".concat(ie.description, "]") : ""), Object.defineProperty(ee, "name", {
        configurable: !0,
        value: He ? "".concat(He, " ", ie) : ie
      })
    }
    Object.create;
    Object.create;

    function Ke(ee, ie, He, ye) {
      if ("a" === He && !ye) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ie ? ee !== ie || !ye : !ie.has(ee)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === He ? ye : "a" === He ? ye.call(ee) : ye ? ye.value : ie.get(ee)
    }

    function Ue(ee, ie, He, ye, be) {
      if ("m" === ye) throw new TypeError("Private method is not writable");
      if ("a" === ye && !be) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ie ? ee !== ie || !be : !ie.has(ee)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === ye ? be.call(ee, He) : be ? be.value = He : ie.set(ee, He), He
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);