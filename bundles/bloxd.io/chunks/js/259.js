export const id = 259;
export const ids = [259];
export const modules = {
  40160: (uu, Ru, yu) => {
    yu.d(Ru, {
      $: () => QE,
      $f: () => gy,
      Ab: () => Ky,
      Ad: () => tu,
      Bc: () => wu,
      Bf: () => EE,
      C: () => Pu,
      Cb: () => zu,
      Cd: () => su,
      Ce: () => by,
      D: () => YR,
      Eb: () => yy,
      Ec: () => iu,
      Fd: () => gu,
      Ff: () => ay,
      Ge: () => xy,
      H: () => Bu,
      Hb: () => Ry,
      Hc: () => oR,
      Id: () => lu,
      If: () => uE,
      Jb: () => xR,
      K: () => KR,
      Kc: () => ER,
      Ke: () => Yy,
      Kf: () => vy,
      Lc: () => rR,
      Lf: () => fy,
      M: () => Mu,
      Mc: () => Du,
      Md: () => SR,
      Nb: () => JR,
      Nd: () => Nu,
      Ne: () => Py,
      Oc: () => XR,
      Pb: () => Ku,
      Pe: () => sy,
      Pf: () => RE,
      Q: () => Gu,
      Qf: () => oy,
      Rd: () => Vu,
      Sc: () => NR,
      Se: () => ly,
      Sf: () => Cy,
      T: () => Iu,
      Tb: () => Wu,
      Td: () => TR,
      Tf: () => Ty,
      Ue: () => ty,
      Uf: () => qy,
      Wb: () => jR,
      Wc: () => yR,
      Wf: () => cy,
      X: () => ZR,
      Xb: () => Ou,
      Xc: () => Au,
      Xd: () => iR,
      Xe: () => Oy,
      Xf: () => Ly,
      Y: () => xu,
      Yb: () => uy,
      Yc: () => du,
      Yd: () => Fu,
      Ye: () => ny,
      Yf: () => Hy,
      Z: () => hu,
      Zc: () => Eu,
      Ze: () => zy,
      Zf: () => py,
      _b: () => Uu,
      _d: () => BR,
      ac: () => au,
      ad: () => eu,
      be: () => qR,
      bf: () => Uy,
      c: () => Qu,
      cb: () => fR,
      db: () => qu,
      dd: () => mR,
      de: () => FR,
      dg: () => ky,
      ec: () => vu,
      ef: () => Zy,
      f: () => mu,
      gb: () => vR,
      gd: () => Tu,
      ge: () => uR,
      hc: () => RR,
      hf: () => wy,
      hg: () => dy,
      ic: () => pR,
      ie: () => fu,
      j: () => ku,
      jf: () => Fy,
      jg: () => iy,
      kb: () => aR,
      kd: () => pu,
      kf: () => KE,
      kg: () => jy,
      lc: () => Yu,
      le: () => Zu,
      lf: () => ey,
      n: () => cu,
      nb: () => ou,
      nd: () => Su,
      ne: () => bu,
      oc: () => nu,
      of: () => Iy,
      og: () => hy,
      p: () => Xy,
      pc: () => QR,
      q: () => Jy,
      qb: () => OR,
      qd: () => Qy,
      re: () => ru,
      rf: () => Ay,
      rg: () => By,
      sc: () => ju,
      se: () => Ny,
      t: () => Ju,
      tc: () => Hu,
      td: () => my,
      ub: () => Lu,
      uc: () => VR,
      uf: () => Gy,
      v: () => wR,
      vg: () => Sy,
      wc: () => Xu,
      we: () => yE,
      xd: () => Cu,
      yb: () => Ey,
      ye: () => Wy,
      yf: () => My,
      z: () => hR,
      zc: () => PR,
      zf: () => Dy
    });
    const Eu = -2147483648,
      Ku = 12,
      Qu = 12,
      mu = 4095,
      Ju = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      Nu = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      Xu = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      Vu = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      ru = {
        Alive: 16
      },
      Bu = 32,
      xu = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      Su = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      pu = 4294967295,
      Tu = 0,
      Wu = 4294967295,
      ju = 4,
      Hu = 123,
      du = -2147483648,
      bu = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      Cu = 51,
      ku = 5,
      eu = 4294967295,
      Au = 4294967295,
      Du = 128,
      Mu = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      Iu = 16,
      Gu = 255,
      Uu = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      nu = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      su = {
        Hotbar: 256,
        Drop: 257
      },
      tu = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      lu = {
        Rate: 0,
        Gyro: 1
      },
      gu = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      cu = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      Lu = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      zu = {
        LookPointed: 1,
        Held: 2
      },
      Fu = 3,
      wu = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      Zu = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      hu = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      Pu = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      iu = {
        Stackable: 1
      },
      Yu = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      ou = {
        Detail: 1,
        RoomForOne: 2
      },
      qu = {
        HaveIngredients: 1,
        Listed: 2
      },
      Ou = {
        HasOpts: 1
      },
      vu = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      au = {
        Up: 1,
        Down: 2
      },
      fu = {
        TwoD: 1,
        Loop: 2
      },
      uR = {
        StopAfter: 1
      },
      RR = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      yR = {
        Pose: 1,
        Visible: 2
      },
      ER = 255,
      KR = 65535,
      QR = 255,
      mR = 65535,
      JR = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      NR = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      XR = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      VR = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      rR = 4294967295,
      BR = 4294967295,
      xR = 255,
      SR = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      pR = {
        critical: 123
      },
      TR = 4294967295,
      WR = {
        BYTES: 4,
        sr: (uu, Ru) => uu.getUint32(Ru + 0, !0)
      },
      jR = {
        BYTES: 12,
        serverId: (uu, Ru) => uu.getInt32(Ru + 0, !0),
        index: (uu, Ru) => uu.getUint32(Ru + 4, !0),
        kind: (uu, Ru) => uu.getUint16(Ru + 8, !0)
      },
      HR = {
        BYTES: 20,
        pos: (uu, Ru, yu) => uu.getInt32(Ru + 0 + 4 * yu, !0),
        actual: (uu, Ru) => uu.getUint32(Ru + 12, !0),
        dataLen: (uu, Ru) => uu.getUint32(Ru + 16, !0)
      },
      dR = {
        BYTES: 20,
        what: (uu, Ru) => uu.getUint8(Ru + 0),
        value: (uu, Ru) => uu.getInt16(Ru + 2, !0),
        pos: (uu, Ru, yu) => uu.getInt32(Ru + 4 + 4 * yu, !0),
        block: (uu, Ru) => uu.getUint32(Ru + 16, !0)
      },
      bR = {
        BYTES: 4,
        item: (uu, Ru) => uu.getUint16(Ru + 0, !0),
        slot: (uu, Ru) => uu.getUint8(Ru + 2)
      },
      CR = {
        BYTES: 16,
        target: (uu, Ru) => uu.getInt32(Ru + 0, !0),
        damage: (uu, Ru) => uu.getFloat32(Ru + 4, !0),
        distance: (uu, Ru) => uu.getFloat32(Ru + 8, !0),
        crit: (uu, Ru) => uu.getUint8(Ru + 12)
      },
      kR = {
        BYTES: 4,
        slot: (uu, Ru) => uu.getUint16(Ru + 0, !0)
      },
      eR = {
        BYTES: 20,
        what: (uu, Ru) => uu.getUint8(Ru + 0),
        value: (uu, Ru) => uu.getInt16(Ru + 2, !0),
        pos: (uu, Ru, yu) => uu.getInt32(Ru + 4 + 4 * yu, !0),
        block: (uu, Ru) => uu.getUint32(Ru + 16, !0)
      },
      AR = {
        BYTES: 12,
        serverId: (uu, Ru) => uu.getInt32(Ru + 0, !0),
        index: (uu, Ru) => uu.getUint32(Ru + 4, !0),
        what: (uu, Ru) => uu.getUint16(Ru + 8, !0)
      },
      DR = {
        BYTES: 24,
        cx: (uu, Ru) => uu.getInt32(Ru + 0, !0),
        cy: (uu, Ru) => uu.getInt32(Ru + 4, !0),
        cz: (uu, Ru) => uu.getInt32(Ru + 8, !0),
        slot: (uu, Ru) => uu.getUint32(Ru + 12, !0),
        generation: (uu, Ru) => uu.getUint32(Ru + 16, !0),
        flags: (uu, Ru) => uu.getUint32(Ru + 20, !0)
      },
      MR = {
        BYTES: 44,
        pos: (uu, Ru, yu) => uu.getFloat64(Ru + 0 + 8 * yu, !0),
        sound: (uu, Ru) => uu.getUint16(Ru + 24, !0),
        flags: (uu, Ru) => uu.getUint16(Ru + 26, !0),
        handle: (uu, Ru) => uu.getUint32(Ru + 28, !0),
        volume: (uu, Ru) => uu.getFloat32(Ru + 32, !0),
        rate: (uu, Ru) => uu.getFloat32(Ru + 36, !0),
        refDist: (uu, Ru) => uu.getFloat32(Ru + 40, !0)
      },
      IR = {
        BYTES: 28,
        pos: (uu, Ru, yu) => uu.getFloat64(Ru + 0 + 8 * yu, !0),
        handle: (uu, Ru) => uu.getUint32(Ru + 24, !0)
      },
      GR = {
        BYTES: 16,
        handle: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        volume: (uu, Ru) => uu.getFloat32(Ru + 4, !0),
        rate: (uu, Ru) => uu.getFloat32(Ru + 8, !0),
        refDist: (uu, Ru) => uu.getFloat32(Ru + 12, !0)
      },
      UR = {
        BYTES: 12,
        handle: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        to: (uu, Ru) => uu.getFloat32(Ru + 4, !0),
        ms: (uu, Ru) => uu.getUint16(Ru + 8, !0),
        flags: (uu, Ru) => uu.getUint16(Ru + 10, !0)
      },
      nR = {
        BYTES: 4,
        handle: (uu, Ru) => uu.getUint32(Ru + 0, !0)
      },
      sR = {
        BYTES: 4,
        reason: (uu, Ru) => uu.getUint8(Ru + 0),
        code: (uu, Ru) => uu.getUint8(Ru + 1)
      },
      tR = {
        BYTES: 4,
        key: (uu, Ru) => uu.getUint8(Ru + 0),
        tag: (uu, Ru) => uu.getUint8(Ru + 1)
      },
      lR = {
        BYTES: 16,
        save: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        index: (uu, Ru) => uu.getUint32(Ru + 4, !0),
        ptr: (uu, Ru) => uu.getUint32(Ru + 8, !0),
        len: (uu, Ru) => uu.getUint32(Ru + 12, !0)
      },
      gR = {
        BYTES: 16,
        save: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        kind: (uu, Ru) => uu.getUint8(Ru + 4),
        parts: (uu, Ru) => uu.getUint32(Ru + 8, !0),
        bytes: (uu, Ru) => uu.getUint32(Ru + 12, !0)
      },
      cR = {
        BYTES: 4,
        totalTicks: (uu, Ru) => uu.getUint32(Ru + 0, !0)
      },
      LR = {
        BYTES: 24,
        what: (uu, Ru) => uu.getUint8(Ru + 0),
        int: (uu, Ru) => uu.getInt32(Ru + 4, !0),
        x: (uu, Ru) => uu.getFloat64(Ru + 8, !0),
        y: (uu, Ru) => uu.getFloat64(Ru + 16, !0)
      },
      zR = {
        BYTES: 8,
        what: (uu, Ru) => uu.getUint8(Ru + 0),
        kind: (uu, Ru) => uu.getUint8(Ru + 1),
        save: (uu, Ru) => uu.getUint32(Ru + 4, !0)
      },
      FR = {
        BYTES: 4,
        Dm: (uu, Ru) => uu.getUint16(Ru + 0, !0)
      },
      wR = {
        BYTES: 360,
        eye: (uu, Ru, yu) => uu.getFloat64(Ru + 0 + 8 * yu, !0),
        localPos: (uu, Ru, yu) => uu.getFloat64(Ru + 24 + 8 * yu, !0),
        KRu: (uu, Ru, yu) => uu.getFloat64(Ru + 48 + 8 * yu, !0),
        viewProj: (uu, Ru, yu) => uu.getFloat32(Ru + 72 + 4 * yu, !0),
        origin: (uu, Ru, yu) => uu.getInt32(Ru + 136 + 4 * yu, !0),
        heading: (uu, Ru) => uu.getFloat32(Ru + 148, !0),
        pitch: (uu, Ru) => uu.getFloat32(Ru + 152, !0),
        tanHalfFovX: (uu, Ru) => uu.getFloat32(Ru + 156, !0),
        tanHalfFovY: (uu, Ru) => uu.getFloat32(Ru + 160, !0),
        viewportCss: (uu, Ru, yu) => uu.getFloat32(Ru + 164 + 4 * yu, !0),
        localVel: (uu, Ru, yu) => uu.getFloat32(Ru + 172 + 4 * yu, !0),
        actionDir: (uu, Ru, yu) => uu.getFloat32(Ru + 184 + 4 * yu, !0),
        localId: (uu, Ru) => uu.getInt32(Ru + 196, !0),
        playerFlags: (uu, Ru) => uu.getUint32(Ru + 200, !0),
        targetBlock: (uu, Ru, yu) => uu.getInt32(Ru + 204 + 4 * yu, !0),
        targetAdjacent: (uu, Ru, yu) => uu.getInt32(Ru + 216 + 4 * yu, !0),
        targetBlockId: (uu, Ru) => uu.getUint32(Ru + 228, !0),
        targetNormal: (uu, Ru, yu) => uu.getInt8(Ru + 232 + 1 * yu),
        targetFlags: (uu, Ru) => uu.getUint8(Ru + 235),
        pickedEntity: (uu, Ru) => uu.getInt32(Ru + 236, !0),
        breakingPos: (uu, Ru, yu) => uu.getInt32(Ru + 240 + 4 * yu, !0),
        breakingProgress: (uu, Ru) => uu.getFloat32(Ru + 252, !0),
        pC: (uu, Ru) => uu.getUint16(Ru + 256, !0),
        selectedSlot: (uu, Ru) => uu.getUint8(Ru + 258),
        heldFlags: (uu, Ru) => uu.getUint8(Ru + 259),
        heldAttrVersion: (uu, Ru) => uu.getUint32(Ru + 260, !0),
        inventoryVersion: (uu, Ru) => uu.getUint32(Ru + 264, !0),
        effectsVersion: (uu, Ru) => uu.getUint32(Ru + 268, !0),
        entitiesVersion: (uu, Ru) => uu.getUint32(Ru + 272, !0),
        entRenderPtr: (uu, Ru) => uu.getUint32(Ru + 276, !0),
        entCapacity: (uu, Ru) => uu.getUint32(Ru + 280, !0),
        frameMs: (uu, Ru) => uu.getFloat32(Ru + 284, !0),
        fps: (uu, Ru) => uu.getFloat32(Ru + 288, !0),
        entVisPtr: (uu, Ru) => uu.getUint32(Ru + 292, !0),
        momentumFrac: (uu, Ru) => uu.getFloat32(Ru + 296, !0),
        chunkSlotsPtr: (uu, Ru) => uu.getUint32(Ru + 300, !0),
        chunkSlotsLen: (uu, Ru) => uu.getUint32(Ru + 304, !0),
        walkThroughPtr: (uu, Ru) => uu.getUint32(Ru + 308, !0),
        walkThroughLen: (uu, Ru) => uu.getUint32(Ru + 312, !0),
        audioViewPtr: (uu, Ru) => uu.getUint32(Ru + 316, !0),
        inventoryViewPtr: (uu, Ru) => uu.getUint32(Ru + 320, !0),
        eventOverflowGen: (uu, Ru) => uu.getUint32(Ru + 324, !0),
        eventOverflowMask: (uu, Ru) => uu.getUint32(Ru + 328, !0),
        promptEntity: (uu, Ru) => uu.getInt32(Ru + 332, !0),
        replayViewPtr: (uu, Ru) => uu.getUint32(Ru + 336, !0),
        slotIcon: (uu, Ru) => uu.getUint32(Ru + 340, !0),
        localDeaths: (uu, Ru) => uu.getUint32(Ru + 344, !0),
        cameraFar: (uu, Ru) => uu.getFloat32(Ru + 348, !0),
        gliderBoostFuel: (uu, Ru) => uu.getUint32(Ru + 352, !0),
        interactLabel: (uu, Ru) => uu.getUint16(Ru + 356, !0),
        interactIcon: (uu, Ru) => uu.getUint16(Ru + 358, !0)
      },
      ZR = {
        BYTES: 16,
        voxelsPtr: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        version: (uu, Ru) => uu.getUint32(Ru + 4, !0),
        generation: (uu, Ru) => uu.getUint32(Ru + 8, !0),
        jJ: (uu, Ru) => uu.getUint32(Ru + 12, !0)
      },
      hR = {
        BYTES: 56,
        listener: (uu, Ru, yu) => uu.getFloat64(Ru + 0 + 8 * yu, !0),
        forward: (uu, Ru, yu) => uu.getFloat32(Ru + 24 + 4 * yu, !0),
        up: (uu, Ru, yu) => uu.getFloat32(Ru + 36 + 4 * yu, !0),
        dropped: (uu, Ru) => uu.getUint32(Ru + 48, !0),
        unfollowed: (uu, Ru) => uu.getUint32(Ru + 52, !0)
      },
      PR = {
        BYTES: 8,
        item: (uu, Ru) => uu.getUint16(Ru + 0, !0),
        amount: (uu, Ru) => uu.getUint16(Ru + 2, !0),
        attrVersion: (uu, Ru) => uu.getUint32(Ru + 4, !0)
      },
      iR = {
        BYTES: 76,
        version: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        state: (uu, Ru) => uu.getUint8(Ru + 4),
        cameraMode: (uu, Ru) => uu.getUint8(Ru + 5),
        sr: (uu, Ru) => uu.getUint32(Ru + 8, !0),
        totalTicks: (uu, Ru) => uu.getUint32(Ru + 12, !0),
        speed: (uu, Ru) => uu.getFloat32(Ru + 16, !0),
        markIn: (uu, Ru) => uu.getUint32(Ru + 20, !0),
        markOut: (uu, Ru) => uu.getUint32(Ru + 24, !0),
        editVersion: (uu, Ru) => uu.getUint32(Ru + 28, !0),
        drops: (uu, Ru, yu) => uu.getUint32(Ru + 32 + 4 * yu, !0)
      },
      YR = {
        BYTES: 6,
        flags: (uu, Ru) => uu.getUint8(Ru + 0),
        harvestType: (uu, Ru) => uu.getUint8(Ru + 1),
        harvestLevel: (uu, Ru) => uu.getUint8(Ru + 2),
        attachedTop: (uu, Ru) => uu.getUint16(Ru + 4, !0)
      },
      oR = {
        BYTES: 3,
        flags: (uu, Ru) => uu.getUint8(Ru + 0),
        harvests: (uu, Ru) => uu.getUint8(Ru + 1),
        level: (uu, Ru) => uu.getUint8(Ru + 2)
      },
      qR = {
        BYTES: 12,
        item: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        amount: (uu, Ru) => uu.getFloat64(Ru + 4, !0)
      },
      OR = {
        BYTES: 16,
        recipes: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        ingredients: (uu, Ru) => uu.getUint32(Ru + 4, !0),
        craftAllTimes: (uu, Ru) => uu.getUint32(Ru + 8, !0),
        flags: (uu, Ru) => uu.getUint32(Ru + 12, !0)
      },
      vR = {
        BYTES: 10,
        item: (uu, Ru) => uu.getUint16(Ru + 0, !0),
        recipe: (uu, Ru) => uu.getUint16(Ru + 2, !0),
        produces: (uu, Ru) => uu.getUint16(Ru + 4, !0),
        requires: (uu, Ru) => uu.getUint16(Ru + 6, !0),
        flags: (uu, Ru) => uu.getUint8(Ru + 8)
      },
      aR = {
        BYTES: 4,
        amount: (uu, Ru) => uu.getUint16(Ru + 0, !0),
        items: (uu, Ru) => uu.getUint16(Ru + 2, !0)
      },
      fR = {
        BYTES: 8,
        amount: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        item: (uu, Ru) => uu.getUint16(Ru + 4, !0),
        from: (uu, Ru) => uu.getUint16(Ru + 6, !0)
      },
      uy = {
        BYTES: 16,
        serverId: (uu, Ru) => uu.getInt32(Ru + 0, !0),
        len: (uu, Ru) => uu.getUint32(Ru + 4, !0),
        kind: (uu, Ru) => uu.getUint16(Ru + 8, !0),
        variation: (uu, Ru) => uu.getUint16(Ru + 10, !0),
        pose: (uu, Ru) => uu.getUint8(Ru + 12),
        meta: (uu, Ru) => uu.getUint8(Ru + 13),
        mesh: (uu, Ru) => uu.getUint8(Ru + 14),
        flags: (uu, Ru) => uu.getUint8(Ru + 15)
      },
      Ry = {
        BYTES: 40,
        terrainOpaque: (uu, Ru) => uu.getUint32(Ru + 0, !0),
        terrainTransparent: (uu, Ru) => uu.getUint32(Ru + 4, !0),
        terrainPack: (uu, Ru) => uu.getUint32(Ru + 8, !0),
        earthSky: (uu, Ru) => uu.getUint32(Ru + 12, !0),
        skyMeshes: (uu, Ru) => uu.getUint32(Ru + 16, !0),
        regular: (uu, Ru) => uu.getUint32(Ru + 20, !0),
        thin: (uu, Ru) => uu.getUint32(Ru + 24, !0),
        line: (uu, Ru) => uu.getUint32(Ru + 28, !0),
        text: (uu, Ru) => uu.getUint32(Ru + 32, !0),
        particles: (uu, Ru) => uu.getUint32(Ru + 36, !0)
      },
      yy = {
        BYTES: 16,
        fov: (uu, Ru) => uu.getFloat32(Ru + 0, !0),
        baseFov: (uu, Ru) => uu.getFloat32(Ru + 4, !0),
        aspect: (uu, Ru) => uu.getFloat32(Ru + 8, !0),
        bodyHeading: (uu, Ru) => uu.getFloat32(Ru + 12, !0)
      },
      Ey = {
        BYTES: 32,
        eye: (uu, Ru, yu) => uu.getFloat64(Ru + 0 + 8 * yu, !0),
        heading: (uu, Ru) => uu.getFloat32(Ru + 24, !0),
        pitch: (uu, Ru) => uu.getFloat32(Ru + 28, !0)
      },
      Ky = {
        BYTES: 40,
        feet: (uu, Ru, yu) => uu.getFloat64(Ru + 0 + 8 * yu, !0),
        eyeHeight: (uu, Ru) => uu.getFloat32(Ru + 24, !0),
        heading: (uu, Ru) => uu.getFloat32(Ru + 28, !0),
        headingIsDrawn: (uu, Ru) => uu.getUint32(Ru + 32, !0)
      },
      Qy = 32,
      my = 63,
      Jy = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function Ny(uu, Ru, yu, Eu, Ku) {
      var Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu;
      switch (uu) {
        case 32:
          return 4 === Eu && (null === (Qu = Ku.tickEnd) || void 0 === Qu || Qu.call(Ku, WR.sr(Ru, yu)), !0);
        case 33:
          return 12 === Eu && (null === (mu = Ku.entitySpawned) || void 0 === mu || mu.call(Ku, jR.serverId(Ru, yu), jR.index(Ru, yu), jR.kind(Ru, yu)), !0);
        case 34:
          return 12 === Eu && (null === (Ju = Ku.entityDespawned) || void 0 === Ju || Ju.call(Ku, jR.serverId(Ru, yu), jR.index(Ru, yu), jR.kind(Ru, yu)), !0);
        case 39:
          return !(Eu < 20) && (null === (Nu = Ku.changeBlockFail) || void 0 === Nu || Nu.call(Ku, HR.pos(Ru, yu, 0), HR.pos(Ru, yu, 1), HR.pos(Ru, yu, 2), HR.actual(Ru, yu), HR.dataLen(Ru, yu), yu + 20, Eu - 20), !0);
        case 46:
          return 0 === Eu && (null === (Xu = Ku.changeBlockFailEnd) || void 0 === Xu || Xu.call(Ku), !0);
        case 48:
          return 20 === Eu && (null === (Vu = Ku.inventoryEvent) || void 0 === Vu || Vu.call(Ku, dR.what(Ru, yu), dR.value(Ru, yu), dR.pos(Ru, yu, 0), dR.pos(Ru, yu, 1), dR.pos(Ru, yu, 2), dR.block(Ru, yu)), !0);
        case 49:
          return 4 === Eu && (null === (ru = Ku.heldItemChanged) || void 0 === ru || ru.call(Ku, bR.item(Ru, yu), bR.slot(Ru, yu)), !0);
        case 50:
          return 16 === Eu && (null === (Bu = Ku.shotDamage) || void 0 === Bu || Bu.call(Ku, CR.target(Ru, yu), CR.damage(Ru, yu), CR.distance(Ru, yu), CR.crit(Ru, yu)), !0);
        case 51:
          return !(Eu < 4) && (null === (xu = Ku.enchantOffer) || void 0 === xu || xu.call(Ku, kR.slot(Ru, yu), yu + 4, Eu - 4), !0);
        case 52:
          return !(Eu < 20) && (null === (Su = Ku.uiEvent) || void 0 === Su || Su.call(Ku, eR.what(Ru, yu), eR.value(Ru, yu), eR.pos(Ru, yu, 0), eR.pos(Ru, yu, 1), eR.pos(Ru, yu, 2), eR.block(Ru, yu), yu + 20, Eu - 20), !0);
        case 53:
          return 12 === Eu && (null === (pu = Ku.entityInfoChanged) || void 0 === pu || pu.call(Ku, AR.serverId(Ru, yu), AR.index(Ru, yu), AR.what(Ru, yu)), !0);
        case 55:
          return 24 === Eu && (null === (Tu = Ku.chunkSlot) || void 0 === Tu || Tu.call(Ku, DR.cx(Ru, yu), DR.cy(Ru, yu), DR.cz(Ru, yu), DR.slot(Ru, yu), DR.generation(Ru, yu), DR.flags(Ru, yu)), !0);
        case 40:
          return 44 === Eu && (null === (Wu = Ku.playSound) || void 0 === Wu || Wu.call(Ku, MR.pos(Ru, yu, 0), MR.pos(Ru, yu, 1), MR.pos(Ru, yu, 2), MR.sound(Ru, yu), MR.flags(Ru, yu), MR.handle(Ru, yu), MR.volume(Ru, yu), MR.rate(Ru, yu), MR.refDist(Ru, yu)), !0);
        case 41:
          return 28 === Eu && (null === (ju = Ku.soundPos) || void 0 === ju || ju.call(Ku, IR.pos(Ru, yu, 0), IR.pos(Ru, yu, 1), IR.pos(Ru, yu, 2), IR.handle(Ru, yu)), !0);
        case 42:
          return 16 === Eu && (null === (Hu = Ku.soundSet) || void 0 === Hu || Hu.call(Ku, GR.handle(Ru, yu), GR.volume(Ru, yu), GR.rate(Ru, yu), GR.refDist(Ru, yu)), !0);
        case 43:
          return 12 === Eu && (null === (du = Ku.soundFade) || void 0 === du || du.call(Ku, UR.handle(Ru, yu), UR.to(Ru, yu), UR.ms(Ru, yu), UR.flags(Ru, yu)), !0);
        case 44:
          return 4 === Eu && (null === (bu = Ku.soundStop) || void 0 === bu || bu.call(Ku, nR.handle(Ru, yu)), !0);
        case 45:
          return 0 === Eu && (null === (Cu = Ku.soundReset) || void 0 === Cu || Cu.call(Ku), !0);
        case 56:
          return 4 === Eu && (null === (ku = Ku.replayFailed) || void 0 === ku || ku.call(Ku, sR.reason(Ru, yu), sR.code(Ru, yu)), !0);
        case 57:
          return !(Eu < 4) && (null === (eu = Ku.replayOption) || void 0 === eu || eu.call(Ku, tR.key(Ru, yu), tR.tag(Ru, yu), yu + 4, Eu - 4), !0);
        case 58:
          return 16 === Eu && (null === (Au = Ku.replayFilePart) || void 0 === Au || Au.call(Ku, lR.save(Ru, yu), lR.index(Ru, yu), lR.ptr(Ru, yu), lR.len(Ru, yu)), !0);
        case 59:
          return 16 === Eu && (null === (Du = Ku.replayFileReady) || void 0 === Du || Du.call(Ku, gR.save(Ru, yu), gR.kind(Ru, yu), gR.parts(Ru, yu), gR.bytes(Ru, yu)), !0);
        case 60:
          return !(Eu < 4) && (null === (Mu = Ku.replayOpened) || void 0 === Mu || Mu.call(Ku, cR.totalTicks(Ru, yu), yu + 4, Eu - 4), !0);
        case 61:
          return !(Eu < 24) && (null === (Iu = Ku.replayUiEvent) || void 0 === Iu || Iu.call(Ku, LR.what(Ru, yu), LR.int(Ru, yu), LR.x(Ru, yu), LR.y(Ru, yu), yu + 24, Eu - 24), !0);
        case 62:
          return 8 === Eu && (null === (Gu = Ku.recorderEvent) || void 0 === Gu || Gu.call(Ku, zR.what(Ru, yu), zR.kind(Ru, yu), zR.save(Ru, yu)), !0);
        default:
          return !1
      }
    }
    const Xy = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let Vy = new Uint8Array(0);

    function ry(uu) {
      return Vy.buffer !== uu.buffer && (Vy = new Uint8Array(uu.buffer)), Vy
    }

    function By(uu, Ru, yu) {
      const Eu = uu.Kx(66, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint8(Eu + 0, yu), !0
    }

    function xy(uu, Ru, yu) {
      const Eu = uu.Kx(67, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint32(Eu + 0, yu, !0), !0
    }

    function Sy(uu, Ru, yu) {
      const Eu = uu.Kx(68, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint8(Eu + 0, yu), !0
    }

    function py(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(69, Ru, 4 + Eu.length);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setUint8(Ku + 0, yu), ry(Qu).set(Eu, Qu.byteOffset + Ku + 4), !0
    }

    function Ty(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.Kx(128, Ru, 4 + Ku.length);
      if (Qu < 0) return !1;
      const mu = uu.view;
      return mu.setUint8(Qu + 0, yu), mu.setUint16(Qu + 2, Eu, !0), ry(mu).set(Ku, mu.byteOffset + Qu + 4), !0
    }

    function Wy(uu, Ru, yu) {
      const Eu = uu.Kx(131, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setInt32(Eu + 0, yu, !0), !0
    }

    function jy(uu, Ru, yu) {
      const Eu = uu.Kx(132, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint32(Eu + 0, yu, !0), !0
    }

    function Hy(uu, Ru, yu) {
      const Eu = uu.Kx(133, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint32(Eu + 0, yu, !0), !0
    }

    function dy(uu, Ru, yu) {
      const Eu = uu.Kx(144, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint8(Eu + 0, yu), !0
    }

    function by(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.Kx(145, Ru, 12);
      if (Qu < 0) return !1;
      const mu = uu.view;
      return mu.setInt32(Qu + 0, yu, !0), mu.setInt32(Qu + 4, Eu, !0), mu.setInt32(Qu + 8, Ku, !0), !0
    }

    function Cy(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(256, Ru, 4 + Eu.length);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setUint16(Ku + 0, yu, !0), ry(Qu).set(Eu, Qu.byteOffset + Ku + 4), !0
    }

    function ky(uu, Ru, yu) {
      const Eu = uu.Kx(258, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint8(Eu + 0, yu), !0
    }

    function ey(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
      const Xu = uu.Kx(320, Ru, 48 + Nu.length);
      if (Xu < 0) return !1;
      const Vu = uu.view;
      Vu.setUint32(Xu + 0, yu, !0), Vu.setUint16(Xu + 4, Eu, !0), Vu.setUint16(Xu + 6, Ku, !0), Vu.setUint32(Xu + 8, Qu, !0);
      for (let ru = 0; ru < 3; ru++) Vu.setFloat64(Xu + 12 + 8 * ru, mu[ru], !0);
      for (let ru = 0; ru < 3; ru++) Vu.setFloat32(Xu + 36 + 4 * ru, Ju[ru], !0);
      return ry(Vu).set(Nu, Vu.byteOffset + Xu + 48), !0
    }

    function Ay(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
      const Xu = uu.Kx(321, Ru, 48 + Nu.length);
      if (Xu < 0) return !1;
      const Vu = uu.view;
      Vu.setUint32(Xu + 0, yu, !0), Vu.setInt32(Xu + 4, Eu, !0), Vu.setUint16(Xu + 8, Ku, !0), Vu.setUint16(Xu + 10, Qu, !0);
      for (let ru = 0; ru < 3; ru++) Vu.setFloat64(Xu + 12 + 8 * ru, mu[ru], !0);
      for (let ru = 0; ru < 3; ru++) Vu.setFloat32(Xu + 36 + 4 * ru, Ju[ru], !0);
      return ry(Vu).set(Nu, Vu.byteOffset + Xu + 48), !0
    }

    function Dy(uu, Ru, yu, Eu, Ku, Qu, mu) {
      const Ju = uu.Kx(322, Ru, 44 + mu.length);
      if (Ju < 0) return !1;
      const Nu = uu.view;
      Nu.setUint32(Ju + 0, yu, !0), Nu.setUint32(Ju + 4, Eu, !0);
      for (let Xu = 0; Xu < 3; Xu++) Nu.setFloat64(Ju + 8 + 8 * Xu, Ku[Xu], !0);
      for (let Xu = 0; Xu < 3; Xu++) Nu.setFloat32(Ju + 32 + 4 * Xu, Qu[Xu], !0);
      return ry(Nu).set(mu, Nu.byteOffset + Ju + 44), !0
    }

    function My(uu, Ru, yu) {
      const Eu = uu.Kx(323, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint32(Eu + 0, yu, !0), !0
    }

    function Iy(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.Kx(324, Ru, 32 + Qu.length);
      if (mu < 0) return !1;
      const Ju = uu.view;
      Ju.setUint32(mu + 0, yu, !0), Ju.setUint32(mu + 4, Eu, !0);
      for (let Nu = 0; Nu < 3; Nu++) Ju.setFloat64(mu + 8 + 8 * Nu, Ku[Nu], !0);
      return ry(Ju).set(Qu, Ju.byteOffset + mu + 32), !0
    }

    function Gy(uu, Ru) {
      return !(uu.Kx(325, Ru, 0) < 0)
    }

    function Uy(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.Kx(384, Ru, 16);
      if (mu < 0) return !1;
      const Ju = uu.view;
      return Ju.setUint32(mu + 0, yu, !0), Ju.setUint32(mu + 4, Eu, !0), Ju.setFloat32(mu + 8, Ku, !0), Ju.setFloat32(mu + 12, Qu, !0), !0
    }

    function ny(uu, Ru, yu, Eu, Ku, Qu, mu) {
      const Ju = uu.Kx(385, Ru, 36 + mu.length);
      if (Ju < 0) return !1;
      const Nu = uu.view;
      Nu.setUint32(Ju + 0, yu, !0), Nu.setUint32(Ju + 4, Eu, !0);
      for (let Xu = 0; Xu < 3; Xu++) Nu.setFloat64(Ju + 8 + 8 * Xu, Ku[Xu], !0);
      return Nu.setUint32(Ju + 32, Qu, !0), ry(Nu).set(mu, Nu.byteOffset + Ju + 36), !0
    }

    function sy(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
      const Xu = uu.Kx(386, Ru, 56 + Nu.length);
      if (Xu < 0) return !1;
      const Vu = uu.view;
      Vu.setUint32(Xu + 0, yu, !0), Vu.setUint8(Xu + 4, Eu);
      for (let ru = 0; ru < 4; ru++) Vu.setFloat32(Xu + 8 + 4 * ru, Ku[ru], !0);
      for (let ru = 0; ru < 3; ru++) Vu.setFloat64(Xu + 24 + 8 * ru, Qu[ru], !0);
      return Vu.setUint32(Xu + 48, mu, !0), Vu.setUint32(Xu + 52, Ju, !0), ry(Vu).set(Nu, Vu.byteOffset + Xu + 56), !0
    }

    function ty(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
      const Xu = uu.Kx(387, Ru, 56);
      if (Xu < 0) return !1;
      const Vu = uu.view;
      Vu.setUint32(Xu + 0, yu, !0), Vu.setUint16(Xu + 4, Eu, !0), Vu.setUint8(Xu + 6, Ku);
      for (let ru = 0; ru < 3; ru++) Vu.setFloat64(Xu + 8 + 8 * ru, Qu[ru], !0);
      for (let ru = 0; ru < 2; ru++) Vu.setFloat32(Xu + 32 + 4 * ru, mu[ru], !0);
      Vu.setFloat32(Xu + 40, Ju, !0);
      for (let ru = 0; ru < 3; ru++) Vu.setFloat32(Xu + 44 + 4 * ru, Nu[ru], !0);
      return !0
    }

    function ly(uu, Ru, yu) {
      const Eu = uu.Kx(388, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint32(Eu + 0, yu, !0), !0
    }

    function gy(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(389, Ru, 8);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setInt32(Ku + 0, yu, !0), Qu.setFloat32(Ku + 4, Eu, !0), !0
    }

    function cy(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(390, Ru, 8);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setInt32(Ku + 0, yu, !0), Qu.setFloat32(Ku + 4, Eu, !0), !0
    }

    function Ly(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.Kx(391, Ru, 12);
      if (mu < 0) return !1;
      const Ju = uu.view;
      return Ju.setFloat32(mu + 0, yu, !0), Ju.setFloat32(mu + 4, Eu, !0), Ju.setUint8(mu + 8, Ku), Ju.setUint8(mu + 9, Qu), !0
    }

    function zy(uu, Ru, yu) {
      const Eu = uu.Kx(392, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint32(Eu + 0, yu, !0), !0
    }

    function Fy(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.Kx(393, Ru, 12);
      if (Qu < 0) return !1;
      const mu = uu.view;
      return mu.setUint32(Qu + 0, yu, !0), mu.setUint16(Qu + 4, Eu, !0), mu.setFloat32(Qu + 8, Ku, !0), !0
    }

    function wy(uu, Ru, yu, Eu, Ku, Qu, mu) {
      const Ju = uu.Kx(394, Ru, 36);
      if (Ju < 0) return !1;
      const Nu = uu.view;
      Nu.setUint32(Ju + 0, yu, !0), Nu.setUint16(Ju + 4, Eu, !0), Nu.setUint8(Ju + 6, Ku);
      for (let Xu = 0; Xu < 3; Xu++) Nu.setFloat64(Ju + 8 + 8 * Xu, Qu[Xu], !0);
      return Nu.setFloat32(Ju + 32, mu, !0), !0
    }

    function Zy(uu, Ru, yu) {
      const Eu = uu.Kx(398, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setUint32(Eu + 0, yu, !0), !0
    }

    function hy(uu, Ru, yu) {
      const Eu = uu.Kx(448, Ru, 4);
      if (Eu < 0) return !1;
      return uu.view.setFloat32(Eu + 0, yu, !0), !0
    }

    function Py(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(450, Ru, 12);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      for (let mu = 0; mu < 2; mu++) Qu.setFloat32(Ku + 0 + 4 * mu, yu[mu], !0);
      return Qu.setUint8(Ku + 8, Eu), !0
    }

    function iy(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(452, Ru, 8);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setFloat32(Ku + 0, yu, !0), Qu.setUint8(Ku + 4, Eu), !0
    }

    function Yy(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.Kx(454, Ru, 4);
      if (Qu < 0) return !1;
      const mu = uu.view;
      return mu.setUint8(Qu + 0, yu), mu.setUint8(Qu + 1, Eu), mu.setUint8(Qu + 2, Ku), !0
    }

    function oy(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(455, Ru, 40);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      for (let mu = 0; mu < 9; mu++) Qu.setInt32(Ku + 0 + 4 * mu, yu[mu], !0);
      return Qu.setUint32(Ku + 36, Eu, !0), !0
    }

    function qy(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(456, Ru, 8);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setFloat32(Ku + 0, yu, !0), Qu.setUint8(Ku + 4, Eu), !0
    }

    function Oy(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.Kx(457, Ru, 16);
      if (Qu < 0) return !1;
      const mu = uu.view;
      for (let Ju = 0; Ju < 3; Ju++) mu.setInt32(Qu + 0 + 4 * Ju, yu[Ju], !0);
      for (let Ju = 0; Ju < 3; Ju++) mu.setInt8(Qu + 12 + 1 * Ju, Eu[Ju]);
      return mu.setUint8(Qu + 15, Ku), !0
    }

    function vy(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(530, Ru, 4 + Eu.length);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setUint8(Ku + 0, yu), ry(Qu).set(Eu, Qu.byteOffset + Ku + 4), !0
    }

    function ay(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.Kx(531, Ru, 12 + Qu.length);
      if (mu < 0) return !1;
      const Ju = uu.view;
      return Ju.setFloat32(mu + 0, yu, !0), Ju.setFloat32(mu + 4, Eu, !0), Ju.setUint32(mu + 8, Ku, !0), ry(Ju).set(Qu, Ju.byteOffset + mu + 12), !0
    }

    function fy(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.Kx(532, Ru, 12 + Qu.length);
      if (mu < 0) return !1;
      const Ju = uu.view;
      return Ju.setInt32(mu + 0, yu, !0), Ju.setInt32(mu + 4, Eu, !0), Ju.setUint32(mu + 8, Ku, !0), ry(Ju).set(Qu, Ju.byteOffset + mu + 12), !0
    }

    function uE(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.Kx(533, Ru, 8 + Ku.length);
      if (Qu < 0) return !1;
      const mu = uu.view;
      return mu.setInt32(Qu + 0, yu, !0), mu.setInt32(Qu + 4, Eu, !0), ry(mu).set(Ku, mu.byteOffset + Qu + 8), !0
    }

    function RE(uu, Ru) {
      return !(uu.Kx(576, Ru, 0) < 0)
    }

    function yE(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.Kx(577, Ru, 36 + Qu.length);
      if (mu < 0) return !1;
      const Ju = uu.view;
      Ju.setUint8(mu + 0, yu);
      for (let Nu = 0; Nu < 16; Nu++) Ju.setUint8(mu + 4 + 1 * Nu, Eu[Nu]);
      for (let Nu = 0; Nu < 16; Nu++) Ju.setUint8(mu + 20 + 1 * Nu, Ku[Nu]);
      return ry(Ju).set(Qu, Ju.byteOffset + mu + 36), !0
    }

    function EE(uu, Ru, yu, Eu) {
      const Ku = uu.Kx(578, Ru, 4 + Eu.length);
      if (Ku < 0) return !1;
      const Qu = uu.view;
      return Qu.setUint8(Ku + 0, yu), ry(Qu).set(Eu, Qu.byteOffset + Ku + 4), !0
    }

    function KE(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
      const Nu = uu.Kx(579, Ru, 36);
      if (Nu < 0) return !1;
      const Xu = uu.view;
      return Xu.setFloat64(Nu + 0, yu, !0), Xu.setFloat64(Nu + 8, Eu, !0), Xu.setFloat64(Nu + 16, Ku, !0), Xu.setFloat64(Nu + 24, Qu, !0), Xu.setUint16(Nu + 32, mu, !0), Xu.setUint8(Nu + 34, Ju), !0
    }
    class QE {
      constructor(uu, Ru) {
        this.core = uu, this.afterCall = Ru
      }
      canModify(uu, Ru, yu) {
        const Eu = this.core.cQu(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      terrainBlocked(uu, Ru, yu, Eu, Ku) {
        const Qu = this.core.Mmu(uu, Ru, yu, Eu, Ku);
        return this.afterCall(), Qu
      }
      sA(uu, Ru, yu, Eu) {
        const Ku = this.core.ZB(uu, Ru, yu, Eu);
        return this.afterCall(), Ku
      }
      blockData(uu, Ru, yu) {
        const Eu = this.core.lQu(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      cameraSweep(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = this.core.gKu(uu, Ru, yu, Eu, Ku, Qu, mu);
        return this.afterCall(), Ju
      }
      hasServerTarget(uu) {
        const Ru = this.core.OQu(uu);
        return this.afterCall(), Ru
      }
      entityInteractable(uu) {
        const Ru = this.core.PQu(uu);
        return this.afterCall(), Ru
      }
      entityCrouching(uu) {
        const Ru = this.core.hQu(uu);
        return this.afterCall(), Ru
      }
      predictServerPosition(uu, Ru, yu, Eu) {
        const Ku = this.core.Jmu(uu, Ru, yu, Eu);
        return this.afterCall(), Ku
      }
      setOtherEntitySetting(uu, Ru, yu) {
        const Eu = this.core.wKu(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      entityInfoBatch(uu) {
        const Ru = this.core.PKu(uu);
        return this.afterCall(), Ru
      }
      entityName(uu) {
        const Ru = this.core.iQu(uu);
        return this.afterCall(), Ru
      }
      hasEffect(uu, Ru) {
        const yu = this.core.qQu(uu, Ru);
        return this.afterCall(), yu
      }
      scratchPtr() {
        const uu = this.core.sKu();
        return this.afterCall(), uu
      }
      invSwap(uu, Ru) {
        const yu = this.core.ymu(uu, Ru);
        return this.afterCall(), yu
      }
      invMove(uu, Ru, yu) {
        const Eu = this.core.fQu(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      invQuickMove(uu, Ru, yu, Eu) {
        const Ku = this.core.umu(uu, Ru, yu, Eu);
        return this.afterCall(), Ku
      }
      invRemove(uu, Ru, yu) {
        const Eu = this.core.Rmu(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      invEnchant(uu, Ru, yu, Eu, Ku) {
        const Qu = this.core.aQu(uu, Ru, yu, Eu, Ku);
        return this.afterCall(), Qu
      }
      craft(uu, Ru, yu) {
        const Eu = this.core.craft(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      salvage(uu, Ru, yu) {
        const Eu = this.core.salvage(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      selectSlot(uu) {
        const Ru = this.core.rmu(uu);
        return this.afterCall(), Ru
      }
      closeChest() {
        const uu = this.core.LQu();
        return this.afterCall(), uu
      }
      itemAttributesBatch(uu) {
        const Ru = this.core.hKu(uu);
        return this.afterCall(), Ru
      }
      itemNames() {
        const uu = this.core.eC();
        return this.afterCall(), uu
      }
      blockProps() {
        const uu = this.core.gQu();
        return this.afterCall(), uu
      }
      itemProps() {
        const uu = this.core.Emu();
        return this.afterCall(), uu
      }
      salvageRecipe(uu) {
        const Ru = this.core.YKu(uu);
        return this.afterCall(), Ru
      }
      craftingView(uu, Ru, yu) {
        const Eu = this.core.ZKu(uu, Ru, yu);
        return this.afterCall(), Eu
      }
      directorView() {
        const uu = this.core.lKu();
        return this.afterCall(), uu
      }
      directorDefaultPose() {
        const uu = this.core.cKu();
        return this.afterCall(), uu
      }
      directorEntity(uu) {
        const Ru = this.core.LKu(uu);
        return this.afterCall(), Ru
      }
      directorPose(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = this.core.zKu(uu, Ru, yu, Eu, Ku, Qu);
        return this.afterCall(), mu
      }
      passTimings(uu) {
        const Ru = this.core.mmu(uu);
        return this.afterCall(), Ru
      }
      drawCensus() {
        const uu = this.core.ZQu();
        return this.afterCall(), uu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);